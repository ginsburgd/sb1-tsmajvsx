import { LeagueState, Command, EngineResponse, WeekSchedule } from '../types/league';
import { POKEMON_DATA, MOVE_DATA, TYPE_CHART } from '../data/pokemon';
import { BattleSimulator } from './battle';
import { generateSeed } from '../utils/crypto';

export class LeagueEngine {
  async processCommand(command: Command): Promise<EngineResponse> {
    let state = command.league_state;
    const logs: string[] = [];
    const errors: string[] = [];
    let result: any = {};

    try {
      switch (command.command) {
        case 'INIT':
          ({ state, result } = this.initLeague(command.args, logs));
          break;
        case 'REGISTER_TEAM':
          ({ state, result } = this.registerTeam(state!, command.args, logs, errors));
          break;
        case 'SET_MATCHUPS':
          ({ state, result } = this.setMatchups(state!, command.args, logs, errors));
          break;
        case 'RUN_WEEK':
          ({ state, result } = this.runWeek(state!, command.args, logs, errors));
          break;
        case 'TRADE':
          ({ state, result } = this.processTrade(state!, command.args, logs, errors));
          break;
        case 'PICKUP':
          ({ state, result } = this.processPickup(state!, command.args, logs, errors));
          break;
        case 'DRAFT_PICK':
          ({ state, result } = this.processDraftPick(state!, command.args, logs, errors));
          break;
        case 'STANDINGS':
          result = this.getStandings(state!, logs);
          break;
        case 'SAVE':
          try {
            await fetch('http://localhost:3000/league', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
              },
              body: JSON.stringify(state)
            });
            result = { message: 'League state saved' };
            logs.push('League state saved');
          } catch {
            errors.push('Failed to save league state');
          }
          break;
        case 'LOAD':
          try {
            const response = await fetch('http://localhost:3000/league', {
              headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            if (response.ok) {
              state = await response.json();
              result = { message: 'League state loaded' };
              logs.push('League state loaded');
            } else {
              errors.push('Failed to load league state');
            }
          } catch {
            errors.push('Failed to load league state');
          }
          break;
        default:
          errors.push(`Unknown command: ${command.command}`);
      }
    } catch (error) {
      errors.push(`Error processing command: ${error instanceof Error ? error.message : String(error)}`);
    }

    return {
      league_state: state!,
      result,
      logs,
      errors
    };
  }

  private initLeague(args: any, logs: string[]): { state: LeagueState; result: any } {
    const state: LeagueState = {
      meta: {
        league_id: args.league_id,
        season: args.season || 1,
        current_week: 0,
        rng: {
          seed_strategy: 'sha256(league_id+season+week+matchup_id)'
        },
        draft_order: args.draft_order || args.players.map((p: any) => p.player_id),
        current_drafter: (args.draft_order || args.players.map((p: any) => p.player_id))[0] || null
      },
      config: {
        team_size: 4,
        gens_allowed: [1, 2, 3],
        battle: {
          use_status_moves: false,
          allow_items: false,
          allow_abilities: false,
          crit_rate: 0.0625,
          damage_variance: [0.85, 1.0]
        },
        transactions: {
          trades_per_week: 'unlimited',
          free_agents_per_week: 'unlimited'
        }
      },
      players: args.players.map((p: any) => ({
        player_id: p.player_id,
        name: p.name,
        team_name: p.team_name,
        roster: [],
        record: { wins: 0, losses: 0 }
      })),
      schedule: {
        weeks: []
      },
      free_agents: args.free_agents || [],
      pokedex: {
        pokemon: { ...POKEMON_DATA, ...args.pokedex?.pokemon },
        moves: { ...MOVE_DATA, ...args.pokedex?.moves },
        type_chart: { ...TYPE_CHART, ...args.pokedex?.type_chart }
      },
      history: {
        weeks: []
      }
    };

    logs.push(`Initialized league ${args.league_id}, season ${args.season || 1}`);
    
    return {
      state,
      result: { message: 'League created', current_week: 0 }
    };
  }

  private registerTeam(state: LeagueState, args: any, logs: string[], errors: string[]): { state: LeagueState; result: any } {
    const player = state.players.find(p => p.player_id === args.player_id);
    if (!player) {
      errors.push(`Player ${args.player_id} not found`);
      return { state, result: {} };
    }

    if (args.roster.length !== state.config.team_size) {
      errors.push(`Roster must contain exactly ${state.config.team_size} Pokémon`);
      return { state, result: {} };
    }

    // Validate all Pokémon exist and are available
    for (const pokemon of args.roster) {
      if (!state.pokedex.pokemon[pokemon.pokemon_id]) {
        errors.push(`Pokémon ${pokemon.pokemon_id} not found in Pokédex`);
        return { state, result: {} };
      }

      if (!state.free_agents.includes(pokemon.pokemon_id)) {
        errors.push(`Pokémon ${pokemon.pokemon_id} is not available as a free agent`);
        return { state, result: {} };
      }
    }

    if (errors.length > 0) {
      return { state, result: {} };
    }

    // Remove Pokémon from free agents
    for (const pokemon of args.roster) {
      const index = state.free_agents.indexOf(pokemon.pokemon_id);
      if (index > -1) {
        state.free_agents.splice(index, 1);
      }
    }

    // Set roster with default moves
    player.roster = args.roster.map((pokemon: any) => {
      const pokemonData = state.pokedex.pokemon[pokemon.pokemon_id];
      return {
        pokemon_id: pokemon.pokemon_id,
        nickname: pokemon.nickname || null,
        level: pokemon.level || 50,
        moves: pokemon.moves || pokemonData.default_moves.slice(0, 4)
      };
    });

    logs.push(`Registered team for ${player.name}: ${args.roster.map((p: any) => p.pokemon_id).join(', ')}`);

    return {
      state,
      result: { message: 'Team registered successfully', roster: player.roster }
    };
  }

  private setMatchups(state: LeagueState, args: any, logs: string[], errors: string[]): { state: LeagueState; result: any } {
    const weekSchedule: WeekSchedule = {
      week_number: args.week_number,
      matchups: args.matchups
    };

    // Validate matchups
    for (const matchup of args.matchups) {
      const homePlayer = state.players.find(p => p.player_id === matchup.home_player_id);
      const awayPlayer = state.players.find(p => p.player_id === matchup.away_player_id);

      if (!homePlayer) {
        errors.push(`Home player ${matchup.home_player_id} not found`);
      }
      if (!awayPlayer) {
        errors.push(`Away player ${matchup.away_player_id} not found`);
      }
    }

    if (errors.length > 0) {
      return { state, result: {} };
    }

    // Add or update week schedule
    const existingWeekIndex = state.schedule.weeks.findIndex(w => w.week_number === args.week_number);
    if (existingWeekIndex >= 0) {
      state.schedule.weeks[existingWeekIndex] = weekSchedule;
    } else {
      state.schedule.weeks.push(weekSchedule);
    }

    logs.push(`Set matchups for week ${args.week_number}: ${args.matchups.length} matchups`);

    return {
      state,
      result: { message: 'Matchups set successfully', week: weekSchedule }
    };
  }

  private runWeek(state: LeagueState, args: any, logs: string[], errors: string[]): { state: LeagueState; result: any } {
    const weekSchedule = state.schedule.weeks.find(w => w.week_number === args.week_number);
    if (!weekSchedule) {
      errors.push(`Week ${args.week_number} schedule not found`);
      return { state, result: {} };
    }

    const results = [];

    for (const matchup of weekSchedule.matchups) {
      const homePlayer = state.players.find(p => p.player_id === matchup.home_player_id);
      const awayPlayer = state.players.find(p => p.player_id === matchup.away_player_id);

      if (!homePlayer || !awayPlayer) {
        errors.push(`Players not found for matchup ${matchup.matchup_id}`);
        continue;
      }

      if (homePlayer.roster.length !== 4 || awayPlayer.roster.length !== 4) {
        errors.push(`Players must have complete rosters to battle`);
        continue;
      }

      // Generate deterministic seed for this battle
      const seed = generateSeed(state.meta.league_id, state.meta.season, args.week_number, matchup.matchup_id);
      
      // Simulate battle
      const simulator = new BattleSimulator(state, seed);
      const battleResult = simulator.simulateBattle(homePlayer.roster, awayPlayer.roster);

      const winner = battleResult.winner === 'home' ? homePlayer : awayPlayer;
      const loser = battleResult.winner === 'home' ? awayPlayer : homePlayer;

      // Update records
      winner.record.wins++;
      loser.record.losses++;

      const result = {
        matchup_id: matchup.matchup_id,
        winner: winner.player_id,
        loser: loser.player_id,
        battle_summary: battleResult.summary,
        knockouts: {
          [homePlayer.player_id]: battleResult.homeKOs,
          [awayPlayer.player_id]: battleResult.awayKOs
        },
        pokemon_stats: {
          [homePlayer.player_id]: battleResult.homeStats,
          [awayPlayer.player_id]: battleResult.awayStats
        },
        seed_used: seed,
        replay: battleResult.turns
      };

      results.push(result);
      logs.push(`${winner.name} defeated ${loser.name} (${battleResult.homeKOs}-${battleResult.awayKOs})`);
    }

    // Add to history
    const weekResult = {
      week_number: args.week_number,
      results
    };

    const existingHistoryIndex = state.history.weeks.findIndex(w => w.week_number === args.week_number);
    if (existingHistoryIndex >= 0) {
      state.history.weeks[existingHistoryIndex] = weekResult;
    } else {
      state.history.weeks.push(weekResult);
    }

    // Update current week
    if (args.week_number >= state.meta.current_week) {
      state.meta.current_week = args.week_number;
    }

    return {
      state,
      result: { message: `Week ${args.week_number} completed`, results }
    };
  }

  private processTrade(state: LeagueState, args: any, logs: string[], errors: string[]): { state: LeagueState; result: any } {
    const fromPlayer = state.players.find(p => p.player_id === args.from_player_id);
    const toPlayer = state.players.find(p => p.player_id === args.to_player_id);

    if (!fromPlayer || !toPlayer) {
      errors.push('One or both players not found');
      return { state, result: {} };
    }

    if (args.send.length !== args.receive.length) {
      errors.push('Trade must be balanced (same number of Pokémon each way)');
      return { state, result: {} };
    }

    // Validate Pokémon exist in rosters
    for (const pokemonId of args.send) {
      if (!fromPlayer.roster.find(p => p.pokemon_id === pokemonId)) {
        errors.push(`${fromPlayer.name} does not have ${pokemonId}`);
      }
    }

    for (const pokemonId of args.receive) {
      if (!toPlayer.roster.find(p => p.pokemon_id === pokemonId)) {
        errors.push(`${toPlayer.name} does not have ${pokemonId}`);
      }
    }

    if (errors.length > 0) {
      return { state, result: {} };
    }

    // Execute trade
    const sentPokemon = [];
    const receivedPokemon = [];

    // Remove sent Pokémon from fromPlayer
    for (const pokemonId of args.send) {
      const index = fromPlayer.roster.findIndex(p => p.pokemon_id === pokemonId);
      if (index >= 0) {
        sentPokemon.push(fromPlayer.roster[index]);
        fromPlayer.roster.splice(index, 1);
      }
    }

    // Remove received Pokémon from toPlayer
    for (const pokemonId of args.receive) {
      const index = toPlayer.roster.findIndex(p => p.pokemon_id === pokemonId);
      if (index >= 0) {
        receivedPokemon.push(toPlayer.roster[index]);
        toPlayer.roster.splice(index, 1);
      }
    }

    // Add Pokémon to new teams
    fromPlayer.roster.push(...receivedPokemon);
    toPlayer.roster.push(...sentPokemon);

    logs.push(`Trade: ${fromPlayer.name} traded ${args.send.join(', ')} for ${args.receive.join(', ')} with ${toPlayer.name}`);

    return {
      state,
      result: { message: 'Trade completed successfully', sent: args.send, received: args.receive }
    };
  }

  private processPickup(state: LeagueState, args: any, logs: string[], errors: string[]): { state: LeagueState; result: any } {
    const player = state.players.find(p => p.player_id === args.player_id);
    if (!player) {
      errors.push(`Player ${args.player_id} not found`);
      return { state, result: {} };
    }

    const toAdd = args.add || [];
    const toDrop = args.drop || [];

    // Validate roster size after changes
    const newRosterSize = player.roster.length - toDrop.length + toAdd.length;
    if (newRosterSize !== state.config.team_size) {
      errors.push(`Roster must remain at ${state.config.team_size} Pokémon after pickup`);
      return { state, result: {} };
    }

    // Validate drop Pokémon exist in roster
    for (const pokemonId of toDrop) {
      if (!player.roster.find(p => p.pokemon_id === pokemonId)) {
        errors.push(`Player does not have ${pokemonId} to drop`);
      }
    }

    // Validate add Pokémon are available
    for (const pokemonId of toAdd) {
      if (!state.free_agents.includes(pokemonId)) {
        errors.push(`${pokemonId} is not available as a free agent`);
      }
    }

    if (errors.length > 0) {
      return { state, result: {} };
    }

    // Execute pickup
    // Drop Pokémon
    for (const pokemonId of toDrop) {
      const index = player.roster.findIndex(p => p.pokemon_id === pokemonId);
      if (index >= 0) {
        player.roster.splice(index, 1);
        state.free_agents.push(pokemonId);
      }
    }

    // Add Pokémon
    for (const pokemonId of toAdd) {
      const index = state.free_agents.indexOf(pokemonId);
      if (index >= 0) {
        state.free_agents.splice(index, 1);
        const pokemonData = state.pokedex.pokemon[pokemonId];
        player.roster.push({
          pokemon_id: pokemonId,
          level: 50,
          moves: pokemonData.default_moves.slice(0, 4)
        });
      }
    }

    logs.push(`${player.name} dropped ${toDrop.join(', ') || 'none'} and picked up ${toAdd.join(', ') || 'none'}`);

    return {
      state,
      result: { message: 'Pickup completed successfully', added: toAdd, dropped: toDrop }
    };
  }

  private processDraftPick(state: LeagueState, args: any, logs: string[], errors: string[]): { state: LeagueState; result: any } {
    const player = state.players.find(p => p.player_id === args.player_id);
    if (!player) {
      errors.push(`Player ${args.player_id} not found`);
      return { state, result: {} };
    }

    if (state.meta.current_drafter !== args.player_id) {
      errors.push(`It's not ${args.player_id}'s turn to draft`);
      return { state, result: {} };
    }

    if (player.roster.length >= state.config.team_size) {
      errors.push(`${player.name}'s roster is already full`);
      return { state, result: {} };
    }

    if (!state.free_agents.includes(args.pokemon_id)) {
      errors.push(`${args.pokemon_id} is not available as a free agent`);
      return { state, result: {} };
    }

    const index = state.free_agents.indexOf(args.pokemon_id);
    state.free_agents.splice(index, 1);
    const pokemonData = state.pokedex.pokemon[args.pokemon_id];
    player.roster.push({
      pokemon_id: args.pokemon_id,
      level: 50,
      moves: pokemonData.default_moves.slice(0, 4)
    });

    logs.push(`${player.name} drafted ${args.pokemon_id}`);

    // Advance to next drafter
    const order = state.meta.draft_order;
    const currentIndex = order.indexOf(args.player_id);
    let nextIndex = currentIndex;
    let found = false;
    for (let i = 0; i < order.length; i++) {
      nextIndex = (nextIndex + 1) % order.length;
      const nextPlayer = state.players.find(p => p.player_id === order[nextIndex]);
      if (nextPlayer && nextPlayer.roster.length < state.config.team_size) {
        state.meta.current_drafter = order[nextIndex];
        found = true;
        break;
      }
    }

    if (!found) {
      state.meta.current_drafter = null;
    }

    return {
      state,
      result: { message: 'Draft pick successful', pokemon_id: args.pokemon_id, player_id: args.player_id }
    };
  }

  private getStandings(state: LeagueState, logs: string[]): any {
    // Calculate total KOs for tiebreaker
    const standings = state.players.map(player => {
      let totalKOs = 0;
      for (const week of state.history.weeks) {
        for (const result of week.results) {
          totalKOs += result.knockouts[player.player_id] || 0;
        }
      }

      return {
        player_id: player.player_id,
        name: player.name,
        team_name: player.team_name,
        wins: player.record.wins,
        losses: player.record.losses,
        total_kos: totalKOs
      };
    });

    // Sort by wins (desc), then losses (asc), then total KOs (desc)
    standings.sort((a, b) => {
      if (a.wins !== b.wins) return b.wins - a.wins;
      if (a.losses !== b.losses) return a.losses - b.losses;
      return b.total_kos - a.total_kos;
    });

    logs.push('Generated current standings');

    return {
      standings,
      current_week: state.meta.current_week
    };
  }
}