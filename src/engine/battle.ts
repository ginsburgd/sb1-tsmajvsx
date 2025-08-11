import { Pokemon, Move, RosterPokemon, LeagueState } from '../types/league';
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

interface BattleTurn {
  turn: number;
  attacker: string;
  defender: string;
  move: string;
  damage: number;
  critical: boolean;
  effectiveness: number;
  fainted: boolean;
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

  private initializeBattlePokemon(roster: RosterPokemon): BattlePokemon {
    const pokemon = this.state.pokedex.pokemon[roster.pokemon_id];
    const level = roster.level;
    
    // Calculate stats at level 50
    const hp = Math.floor(((2 * pokemon.base_stats.hp * level) / 100) + level + 10);
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
    if (this.state.config.battle.use_status_moves === false) {
      // Filter out status moves
      const damageMovesIndex = attacker.moves
        .map((move, index) => ({ move, index }))
        .filter(({ move }) => move.category !== 'Status');
      
      if (damageMovesIndex.length === 0) {
        return this.state.pokedex.moves['Struggle'];
      }

      // Calculate expected damage for each move
      let bestMove = damageMovesIndex[0].move;
      let bestDamage = 0;

      for (const { move } of damageMovesIndex) {
        const expectedDamage = this.calculateExpectedDamage(attacker, defender, move);
        if (expectedDamage > bestDamage) {
          bestDamage = expectedDamage;
          bestMove = move;
        }
      }

      return bestMove;
    }

    // For now, always pick the first damaging move if status moves are disabled
    return attacker.moves.find(m => m.category !== 'Status') || this.state.pokedex.moves['Struggle'];
  }

  private calculateExpectedDamage(attacker: BattlePokemon, defender: BattlePokemon, move: Move): number {
    if (move.category === 'Status') return 0;

    const level = 50;
    const A = move.category === 'Physical' ? attacker.stats.atk : attacker.stats.spa;
    const D = move.category === 'Physical' ? defender.stats.def : defender.stats.spd;
    
    const baseDamage = (((2 * level / 5 + 2) * move.power * A / D) / 50) + 2;
    
    // Apply modifiers
    let damage = baseDamage;
    
    // STAB
    if (move.stab_applicable && attacker.pokemon.types.includes(move.type)) {
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
    // Check if move hits
    if (!this.rng.bool(move.accuracy)) {
      this.turns.push({
        turn: turnNumber,
        attacker: attackerName,
        defender: defenderName,
        move: move.type + ' move',
        damage: 0,
        critical: false,
        effectiveness: 0,
        fainted: false
      });
      return { fainted: false, damage: 0 };
    }

    if (move.category === 'Status') {
      // For simplicity, status moves do nothing in this implementation
      return { fainted: false, damage: 0 };
    }

    // Calculate damage
    const level = 50;
    const A = move.category === 'Physical' ? attacker.stats.atk : attacker.stats.spa;
    const D = move.category === 'Physical' ? defender.stats.def : defender.stats.spd;
    
    let damage = (((2 * level / 5 + 2) * move.power * A / D) / 50) + 2;
    
    // Apply variance
    const variance = this.rng.range(this.state.config.battle.damage_variance[0], this.state.config.battle.damage_variance[1]);
    damage *= variance;
    
    // Check for critical hit
    const critical = this.rng.bool(this.state.config.battle.crit_rate);
    if (critical) {
      damage *= 1.5;
    }
    
    // STAB
    if (move.stab_applicable && attacker.pokemon.types.includes(move.type)) {
      damage *= 1.5;
    }
    
    // Type effectiveness
    let effectiveness = 1;
    for (const defenderType of defender.pokemon.types) {
      const typeMultiplier = this.state.pokedex.type_chart[move.type]?.[defenderType] ?? 1;
      effectiveness *= typeMultiplier;
    }
    damage *= effectiveness;
    
    // Round damage
    damage = Math.max(1, Math.floor(damage));
    
    // Apply damage
    defender.current_hp = Math.max(0, defender.current_hp - damage);
    const fainted = defender.current_hp === 0;
    
    this.turns.push({
      turn: turnNumber,
      attacker: attackerName,
      defender: defenderName,
      move: move.type + ' move',
      damage,
      critical,
      effectiveness,
      fainted
    });

    return { fainted, damage };
  }

  private generateBattleSummary(): string {
    const keyTurns = this.turns.filter(t => t.fainted || t.critical || t.effectiveness >= 2 || t.effectiveness <= 0.5);
    const summary = keyTurns.slice(0, 5).map(t => {
      let desc = `${t.attacker} used ${t.move} vs ${t.defender}`;
      if (t.critical) desc += ' (Critical Hit!)';
      if (t.effectiveness >= 2) desc += ' (Super Effective!)';
      if (t.effectiveness <= 0.5 && t.effectiveness > 0) desc += ' (Not Very Effective)';
      if (t.effectiveness === 0) desc += ' (No Effect)';
      if (t.fainted) desc += ` - ${t.defender} fainted!`;
      return desc;
    });
    
    return summary.join(' • ');
  }
}