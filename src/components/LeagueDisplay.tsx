import React from 'react';
import { LeagueState } from '../types/league';
import { Trophy, Users, Calendar, Zap, Star, BarChart3 } from 'lucide-react';

interface LeagueDisplayProps {
  state: LeagueState | null;
  logs: string[];
  errors: string[];
}

export function LeagueDisplay({ state, logs, errors }: LeagueDisplayProps) {
  if (!state) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 text-center">
        <div className="mb-4">
          <Zap className="w-16 h-16 text-blue-600 mx-auto" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Initialize Your League</h3>
        <p className="text-gray-600">Get started by creating a new Pokémon Fantasy League!</p>
      </div>
    );
  }
  const koLeaders = (() => {
    const aggregate: { [key: string]: { playerId: string; pokemonId: string; kos: number; damage: number; faints: number } } = {};
    for (const week of state.history.weeks) {
      for (const result of week.results) {
        if (!result.pokemon_stats) continue;
        for (const [playerId, monStats] of Object.entries(result.pokemon_stats)) {
          for (const [pokemonId, stats] of Object.entries(monStats)) {
            const key = `${playerId}:${pokemonId}`;
            if (!aggregate[key]) {
              aggregate[key] = { playerId, pokemonId, kos: 0, damage: 0, faints: 0 };
            }
            aggregate[key].kos += stats.kos;
            aggregate[key].damage += stats.damage;
            aggregate[key].faints += stats.faints;
          }
        }
      }
    }
    return Object.values(aggregate).sort((a, b) => b.kos - a.kos).slice(0, 5);
  })();

  return (
    <div className="space-y-6">
      {/* League Info */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{state.meta.league_id}</h2>
            <p className="text-blue-100">Season {state.meta.season} • Week {state.meta.current_week}</p>
          </div>
          <Trophy className="w-12 h-12 text-yellow-300" />
        </div>
      </div>

      {/* Errors */}
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <h3 className="font-semibold text-red-800 mb-2">Errors</h3>
          <ul className="space-y-1">
            {errors.map((error, index) => (
              <li key={index} className="text-red-700 text-sm">• {error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Logs */}
      {logs.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <h3 className="font-semibold text-green-800 mb-2">Recent Activity</h3>
          <ul className="space-y-1">
            {logs.slice(-5).map((log, index) => (
              <li key={index} className="text-green-700 text-sm">• {log}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Draft Progress */}
      {state.meta.draft_order.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900">Draft Progress</h3>
            {state.meta.current_drafter && (
              <p className="text-sm text-gray-600 mt-1">
                Current Pick:{' '}
                {state.players.find(p => p.player_id === state.meta.current_drafter)?.team_name || state.meta.current_drafter}
              </p>
            )}
          </div>
          <div className="p-6">
            <ul className="space-y-2">
              {state.meta.draft_order.map((playerId) => {
                const player = state.players.find(p => p.player_id === playerId);
                const picks = player?.roster.length || 0;
                const remaining = state.config.team_size - picks;
                return (
                  <li
                    key={playerId}
                    className={`flex justify-between p-2 rounded ${
                      state.meta.current_drafter === playerId ? 'bg-blue-50' : ''
                    }`}
                  >
                    <span>{player?.team_name || playerId}</span>
                    <span className="text-sm text-gray-600">
                      {picks}/{state.config.team_size} drafted{remaining > 0 ? ` (${remaining} left)` : ''}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* Players and Rosters */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="border-b border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Teams & Rosters
          </h3>
        </div>
        <div className="p-6 space-y-6">
          {state.players.map((player) => (
            <div key={player.player_id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-bold text-gray-900">{player.team_name}</h4>
                  <p className="text-sm text-gray-600">Managed by {player.name}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-gray-900">{player.record.wins}-{player.record.losses}</div>
                  <div className="text-xs text-gray-500">W-L Record</div>
                </div>
              </div>
              
              {player.roster.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {player.roster.map((pokemon, index) => {
                    const pokemonData = state.pokedex.pokemon[pokemon.pokemon_id];
                    return (
                      <div key={index} className="bg-gray-50 rounded-lg p-3">
                        <div className="font-medium text-gray-900">{pokemonData?.name || pokemon.pokemon_id}</div>
                        <img
                          src={`/pokemon/${pokemonData?.name}.png`}
                          alt={pokemon}
                          className="w-8 h-8"
                        />
                        <div className="text-xs text-gray-500">Level {pokemon.level}</div>
                        {pokemonData && (
                          <div className="flex gap-1 mt-1">
                            {pokemonData.types.map((type) => (
                              <span key={type} className={`px-2 py-1 text-xs rounded-full text-white bg-gradient-to-r ${getTypeColor(type)}`}>
                                {type}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-gray-500 text-sm">No roster set</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recent Results */}
      {state.history.weeks.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Recent Results
            </h3>
          </div>
          <div className="p-6">
            {state.history.weeks.slice(-3).map((week) => (
              <div key={week.week_number} className="mb-6 last:mb-0">
                <h4 className="font-bold text-lg text-gray-900 mb-3">Week {week.week_number}</h4>
                <div className="space-y-3">
                  {week.results.map((result) => {
                    const winner = state.players.find(p => p.player_id === result.winner);
                    const loser = state.players.find(p => p.player_id === result.loser);
                    const winnerKOs = result.knockouts[result.winner];
                    const loserKOs = result.knockouts[result.loser];
                    
                    return (
                      <div key={result.matchup_id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium text-green-600">{winner?.team_name}</span>
                            <span className="text-gray-500">defeated</span>
                            <span className="font-medium text-red-500">{loser?.team_name}</span>
                          </div>
                          <div className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                            {winnerKOs}-{loserKOs}
                          </div>
                        </div>
                        {result.battle_summary && (
                          <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                            {result.battle_summary}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Season Leaders */}
      {koLeaders.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Season KO Leaders
            </h3>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-gray-700">
                  <th className="pb-2">Pokémon</th>
                  <th className="pb-2">Team</th>
                  <th className="pb-2 text-right">KOs</th>
                  <th className="pb-2 text-right">Damage</th>
                  <th className="pb-2 text-right">Faints</th>
                </tr>
              </thead>
              <tbody>
                {koLeaders.map((entry) => {
                  const player = state.players.find(p => p.player_id === entry.playerId);
                  const pokemon = state.pokedex.pokemon[entry.pokemonId];
                  return (
                    <tr key={`${entry.playerId}-${entry.pokemonId}`} className="border-t border-gray-200">
                      <td className="py-1">{pokemon?.name || entry.pokemonId}</td>
                      <td className="py-1">{player?.team_name || entry.playerId}</td>
                      <td className="py-1 text-right font-mono">{entry.kos}</td>
                      <td className="py-1 text-right font-mono">{entry.damage}</td>
                      <td className="py-1 text-right font-mono">{entry.faints}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Free Agents */}
      {state.free_agents.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200">
          <div className="border-b border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900">Available Free Agents</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2">
              {state.free_agents.slice(0, 20).map((pokemonId) => {
                const pokemon = state.pokedex.pokemon[pokemonId];
                return (
                  <div key={pokemonId} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                    <div className="font-medium text-sm">{pokemon?.name || pokemonId}</div>
                    {pokemon && (
                      <div className="flex gap-1 mt-1">
                        {pokemon.types.map((type) => (
                          <span key={type} className={`px-1 py-0.5 text-xs rounded text-white ${getTypeColor(type)}`}>
                            {type}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              {state.free_agents.length > 20 && (
                <div className="bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-gray-500">
                  +{state.free_agents.length - 20} more
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getTypeColor(type: string): string {
  const colors: { [key: string]: string } = {
    Normal: 'from-gray-400 to-gray-500',
    Fire: 'from-red-500 to-orange-500',
    Water: 'from-blue-500 to-blue-600',
    Electric: 'from-yellow-400 to-yellow-500',
    Grass: 'from-green-500 to-green-600',
    Ice: 'from-cyan-400 to-cyan-500',
    Fighting: 'from-red-600 to-red-700',
    Poison: 'from-purple-500 to-purple-600',
    Ground: 'from-yellow-600 to-yellow-700',
    Flying: 'from-indigo-400 to-sky-500',
    Psychic: 'from-pink-500 to-pink-600',
    Bug: 'from-lime-500 to-green-500',
    Rock: 'from-stone-500 to-stone-600',
    Ghost: 'from-purple-600 to-indigo-600',
    Dragon: 'from-indigo-600 to-purple-600',
    Dark: 'from-gray-700 to-gray-800',
    Steel: 'from-gray-500 to-slate-500',
    Fairy: 'from-pink-400 to-pink-500'
  };
  return colors[type] || 'from-gray-400 to-gray-500';
}