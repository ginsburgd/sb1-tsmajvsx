export interface Pokemon {
  name: string;
  gen: number;
  types: string[];
  base_stats: {
    hp: number;
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  };
  default_moves: string[];
}

export interface Move {
  type: string;
  category: 'Physical' | 'Special' | 'Status';
  power: number;
  accuracy: number;
  priority: number;
  stab_applicable: boolean;
}

export interface RosterPokemon {
  pokemon_id: string;
  nickname?: string;
  level: number;
  moves: string[];
}

export interface Player {
  player_id: string;
  name: string;
  team_name: string;
  roster: RosterPokemon[];
  record: {
    wins: number;
    losses: number;
  };
}

export interface Matchup {
  matchup_id: string;
  home_player_id: string;
  away_player_id: string;
}

export interface WeekSchedule {
  week_number: number;
  matchups: Matchup[];
}

export interface BattleEvent {
  type: 'damage' | 'status';
  amount?: number;
  status?: string;
}

export interface BattleTurn {
  turn: number;
  attacker: string;
  defender: string;
  move: string;
  damage: number;
  critical: boolean;
  effectiveness: number;
  fainted: boolean;
  missed?: boolean;
  events: BattleEvent[];
}

export interface BattleResult {
  matchup_id: string;
  winner: string;
  loser: string;
  battle_summary: string;
  knockouts: { [player_id: string]: number };
  pokemon_stats: {
    [player_id: string]: {
      [pokemon_id: string]: {
        kos: number;
        damage: number;
        faints: number;
      };
    };
  };
  seed_used: string;
  replay: BattleTurn[];
}

export interface WeekResult {
  week_number: number;
  results: BattleResult[];
}

export interface LeagueState {
  meta: {
    league_id: string;
    season: number;
    current_week: number;
    rng: {
      seed_strategy: string;
    };
    draft_order: string[];
    current_drafter: string | null;
  };
  config: {
    team_size: number;
    gens_allowed: number[];
    battle: {
      use_status_moves: boolean;
      allow_items: boolean;
      allow_abilities: boolean;
      crit_rate: number;
      damage_variance: [number, number];
    };
    transactions: {
      trades_per_week: string;
      free_agents_per_week: string;
    };
  };
  players: Player[];
  schedule: {
    weeks: WeekSchedule[];
  };
  free_agents: string[];
  pokedex: {
    pokemon: { [key: string]: Pokemon };
    moves: { [key: string]: Move };
    type_chart: { [key: string]: { [key: string]: number } };
  };
  history: {
    weeks: WeekResult[];
  };
  metrics: {
    total_battles: number;
    knockouts: { [player_id: string]: number };
  };
}

export interface Command {
  command: string;
  args: Record<string, unknown>;
  league_state?: LeagueState;
}

export interface EngineResponse {
  league_state: LeagueState;
  result: unknown;
  logs: string[];
  errors: string[];
}