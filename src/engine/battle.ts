import { Pokemon, Move, RosterPokemon, LeagueState, BattleTurn, BattleEvent } from '../types/league';
import { SeededRandom } from '../utils/crypto';

interface BattlePokemon {
  pokemon: Pokemon;
  roster_info: RosterPokemon;
  current_hp: number;
  max_hp: number;
  stats: {
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  };
  moves: Move[];
}

export class BattleSimulator {
  private rng: SeededRandom;
  private state: LeagueState;
  private turns: BattleTurn[] = [];

  constructor(state: LeagueState, seed: string) {
    this.state = state;
    this.rng = new SeededRandom(seed);
  }

  simulateBattle(homeTeam: RosterPokemon[], awayTeam: RosterPokemon[]): {
    winner: 'home' | 'away';
    summary: string;
    homeKOs: number;
    awayKOs: number;
    turns: BattleTurn[];
    homeStats: { [pokemon_id: string]: { kos: number; damage: number; faints: number } };
    awayStats: { [pokemon_id: string]: { kos: number; damage: number; faints: number } };
  } {
    const homePokemon = homeTeam.map(p => this.initializeBattlePokemon(p));
    const awayPokemon = awayTeam.map(p => this.initializeBattlePokemon(p));

    let homeIndex = 0;
    let awayIndex = 0;
    let turnNumber = 1;
    this.turns = [];

    const homeStats: { [pokemon_id: string]: { kos: number; damage: number; faints: number } } = {};
    const awayStats: { [pokemon_id: string]: { kos: number; damage: number; faints: number } } = {};

    for (const p of homeTeam) {
      homeStats[p.pokemon_id] = { kos: 0, damage: 0, faints: 0 };
    }
    for (const p of awayTeam) {
      awayStats[p.pokemon_id] = { kos: 0, damage: 0, faints: 0 };
    }

    while (homeIndex < homePokemon.length && awayIndex < awayPokemon.length) {
      const homeMon = homePokemon[homeIndex];
      const awayMon = awayPokemon[awayIndex];

      // Determine turn order
      const homeMove = this.selectBestMove(homeMon, awayMon);
      const awayMove = this.selectBestMove(awayMon, homeMon);

      let firstAttacker, secondAttacker, firstMove, secondMove;

      if (homeMove.priority > awayMove.priority || 
          (homeMove.priority === awayMove.priority && homeMon.stats.spe > awayMon.stats.spe) ||
          (homeMove.priority === awayMove.priority && homeMon.stats.spe === awayMon.stats.spe && this.rng.bool())) {
        firstAttacker = 'home';
        secondAttacker = 'away';
        firstMove = homeMove;
        secondMove = awayMove;
      } else {
        firstAttacker = 'away';
        secondAttacker = 'home';
        firstMove = awayMove;
        secondMove = homeMove;
      }

      // Execute first attack
      const firstResult = this.executeTurn(
        firstAttacker === 'home' ? homeMon : awayMon,
        firstAttacker === 'away' ? homeMon : awayMon,
        firstMove,
        turnNumber,
        firstAttacker === 'home' ? homePokemon[homeIndex].pokemon.name : awayPokemon[awayIndex].pokemon.name,
        firstAttacker === 'away' ? homePokemon[homeIndex].pokemon.name : awayPokemon[awayIndex].pokemon.name
      );

      const firstAttackerStats = firstAttacker === 'home'
        ? homeStats[homeTeam[homeIndex].pokemon_id]
        : awayStats[awayTeam[awayIndex].pokemon_id];
      const firstDefenderStats = firstAttacker === 'home'
        ? awayStats[awayTeam[awayIndex].pokemon_id]
        : homeStats[homeTeam[homeIndex].pokemon_id];

      firstAttackerStats.damage += firstResult.damage;
      if (firstResult.fainted) {
        firstAttackerStats.kos += 1;
        firstDefenderStats.faints += 1;
        if (firstAttacker === 'home') {
          awayIndex++;
        } else {
          homeIndex++;
        }
        turnNumber++;
        continue;
      }

      // Execute second attack if defender didn't faint
      const secondResult = this.executeTurn(
        secondAttacker === 'home' ? homeMon : awayMon,
        secondAttacker === 'away' ? homeMon : awayMon,
        secondMove,
        turnNumber,
        secondAttacker === 'home' ? homePokemon[homeIndex].pokemon.name : awayPokemon[awayIndex].pokemon.name,
        secondAttacker === 'away' ? homePokemon[homeIndex].pokemon.name : awayPokemon[awayIndex].pokemon.name
      );

      const secondAttackerStats = secondAttacker === 'home'
        ? homeStats[homeTeam[homeIndex].pokemon_id]
        : awayStats[awayTeam[awayIndex].pokemon_id];
      const secondDefenderStats = secondAttacker === 'home'
        ? awayStats[awayTeam[awayIndex].pokemon_id]
        : homeStats[homeTeam[homeIndex].pokemon_id];

      secondAttackerStats.damage += secondResult.damage;
      if (secondResult.fainted) {
        secondAttackerStats.kos += 1;
        secondDefenderStats.faints += 1;
        if (secondAttacker === 'home') {
          awayIndex++;
        } else {
          homeIndex++;
        }
      }

      turnNumber++;
    }

    const homeKOs = awayIndex;
    const awayKOs = homeIndex;
    const winner = homeIndex >= homePokemon.length ? 'away' : 'home';

    return {
      winner,
      summary: this.generateBattleSummary(),
      homeKOs,
      awayKOs,
      turns: this.turns,
      homeStats,
      awayStats
    };
  }

  /**
   * Converts a roster entry into a battle-ready Pokémon.
   *
   * Stats scale with the Pokémon's level using simplified Pokémon formulas:
   * HP  = floor(((2 * base_stat.hp * level) / 100) + level + 10)
   * Other stats = floor(((2 * base_stat * level) / 100) + 5)
   * This means higher levels yield proportionally stronger stats.
   */
  private initializeBattlePokemon(roster: RosterPokemon): BattlePokemon {
    const pokemon = this.state.pokedex.pokemon[roster.pokemon_id];
    const level = roster.level;

    // Calculate stats based on the Pokémon's roster level
    const hp = Math.floor(((2 * pokemon.base_stats.hp * level) / 100) + level + 10);
    console.log('hp is' + hp)
    const stats = {
      atk: Math.floor(((2 * pokemon.base_stats.atk * level) / 100) + 5),
      def: Math.floor(((2 * pokemon.base_stats.def * level) / 100) + 5),
      spa: Math.floor(((2 * pokemon.base_stats.spa * level) / 100) + 5),
      spd: Math.floor(((2 * pokemon.base_stats.spd * level) / 100) + 5),
      spe: Math.floor(((2 * pokemon.base_stats.spe * level) / 100) + 5)
    };

    // Get moves
    const moves = roster.moves.map(moveName => 
      this.state.pokedex.moves[moveName] || this.state.pokedex.moves['Struggle']
    );

    return {
      pokemon,
      roster_info: roster,
      current_hp: hp,
      max_hp: hp,
      stats,
      moves
    };
  }

  private selectBestMove(attacker: BattlePokemon, defender: BattlePokemon): Move {
    // Determine which moves are available based on whether status moves are allowed
    const availableMoves = this.state.config.battle.use_status_moves
      ? attacker.moves
      : attacker.moves.filter(m => m.category !== 'Status');

    if (availableMoves.length === 0) {
      return this.state.pokedex.moves['Struggle'];
    }

    // Choose the move that yields the highest expected damage
    let bestMove = availableMoves[0];
    let bestDamage = this.calculateExpectedDamage(attacker, defender, bestMove);

    for (const move of availableMoves.slice(1)) {
      const expectedDamage = this.calculateExpectedDamage(attacker, defender, move);
      if (expectedDamage > bestDamage) {
        bestDamage = expectedDamage;
        bestMove = move;
      }
    }

    return bestMove;
  }

  private calculateExpectedDamage(attacker: BattlePokemon, defender: BattlePokemon, move: Move): number {
    if (move.category === 'Status') return 0;

    const level = attacker.roster_info.level;
    const A = move.category === 'Physical' ? attacker.stats.atk : attacker.stats.spa;
    const D = move.category === 'Physical' ? defender.stats.def : defender.stats.spd;
    
    const baseDamage = (((2 * level / 5 + 2) * move.power * A / D) / 50) + 2;
    
    // Apply modifiers
    let damage = baseDamage;
    
    // STAB
    if (attacker.pokemon.types.includes(move.type)) {
      damage *= 1.5;
    }
    
    // Type effectiveness
    let effectiveness = 1;
    for (const defenderType of defender.pokemon.types) {
      const typeMultiplier = this.state.pokedex.type_chart[move.type]?.[defenderType] ?? 1;
      effectiveness *= typeMultiplier;
    }
    damage *= effectiveness;
    
    // Expected crit multiplier
    damage *= (1 + this.state.config.battle.crit_rate * 0.5);
    
    // Expected variance (midpoint)
    damage *= (this.state.config.battle.damage_variance[0] + this.state.config.battle.damage_variance[1]) / 2;
    
    // Hit chance
    damage *= move.accuracy;
    
    return damage;
  }

  private executeTurn(attacker: BattlePokemon, defender: BattlePokemon, move: Move, turnNumber: number, attackerName: string, defenderName: string): { fainted: boolean; damage: number } {
    let critical = false
    let effectiveness = 1
    let fainted = false
    let missed = 0
    let damage = 0
    let events: BattleEvent[] = [{ type: 'status', status: move.type }];
    // Check if move hits
    if (!this.rng.bool(move.accuracy)) {
      events = [{ type: 'status', status: 'missed' }];
      critical = false
      effectiveness = 1
      fainted = false
      missed = true
      damage = 0
    }

    if (move.category === 'Status') {
      events = [{ type: 'status', status: move.type }];
      critical = false
      effectiveness = 1
      fainted = false
      missed = false
      damage = 0
    }

    else { 

      // Calculate damage
      const level = attacker.roster_info.level;
      const A = move.category === 'Physical' ? attacker.stats.atk : attacker.stats.spa;
      const D = move.category === 'Physical' ? defender.stats.def : defender.stats.spd;
      
      damage = (((2 * level / 5 + 2) * move.power * A / D) / 50) + 2;
      
      // Apply variance
      const variance = this.rng.range(this.state.config.battle.damage_variance[0], this.state.config.battle.damage_variance[1]);
      damage *= variance;
      
      // Check for critical hit
      critical = this.rng.bool(this.state.config.battle.crit_rate);
      if (critical) {
        damage *= 1.5;
      }
      
      // STAB
      if (attacker.pokemon.types.includes(move.type)) {
        damage *= 1.5;
      }
      
      // Type effectiveness
      effectiveness = 1;
      for (const defenderType of defender.pokemon.types) {
        const typeMultiplier = this.state.pokedex.type_chart[move.type]?.[defenderType] ?? 1;
        effectiveness *= typeMultiplier;
      }
      damage *= effectiveness;
      
      // Round damage
      damage = Math.max(1, Math.floor(damage));
      
      // Apply damage
      defender.current_hp = Math.max(0, defender.current_hp - damage);
      fainted = defender.current_hp === 0;

      events = [{ type: 'damage', amount: damage }];
      if (critical) events.push({ type: 'status', status: 'critical' });
      if (effectiveness >= 2) events.push({ type: 'status', status: 'super-effective' });
      if (effectiveness <= 0.5 && effectiveness > 0) events.push({ type: 'status', status: 'not-very-effective' });
      if (effectiveness === 0) events.push({ type: 'status', status: 'no-effect' });
      if (fainted) events.push({ type: 'status', status: 'fainted' });
    }

    this.turns.push({
      turn: turnNumber,
      attacker: attackerName,
      attacker_total_hp: attacker.max_hp,
      attacker_current_hp: attacker.current_hp,
      defender: defenderName,
      defender_current_hp: defender.current_hp,
      defender_total_hp: defender.max_hp,
      move: move.name,
      damage,
      critical,
      effectiveness,
      fainted,
      events
    });

    return { fainted, damage };
  }

  private generateBattleSummary(): string {
    //Ezra: I don't think we care about key turns for now. Instead, we want to see the whole breakdown.
    //const keyTurns = this.turns.filter(t => t.fainted || t.critical || t.effectiveness >= 2 || t.effectiveness <= 0.5 || t.missed);
    const summary = this.turns.map(t => {
      let desc = `${t.attacker} (${t.attacker_current_hp}/${t.attacker_total_hp} hp) used ${t.move} vs ${t.defender} (${t.defender_current_hp}/${t.defender_total_hp} hp) dealing ${t.damage} damage.`;
      if (t.critical) desc += ' (Critical Hit!)';
      if (t.missed) {
        desc += ' (Missed)';
      } else {
        if (t.effectiveness >= 2) desc += ' (Super Effective!)';
        if (t.effectiveness <= 0.5 && t.effectiveness > 0) desc += ' (Not Very Effective)';
        if (t.effectiveness === 0) desc += ' (No Effect)';
      }
      if (t.fainted) desc += ` - ${t.defender} fainted!`;
      return desc;
    });
    
    return summary.join(' \n\n ');
  }
}