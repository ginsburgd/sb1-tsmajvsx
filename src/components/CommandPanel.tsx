import React, { useState, useMemo } from 'react';
import { Command, LeagueState } from '../types/league';
import { POKEMON_DATA } from '../data/pokemon';
import { Play, Users, Calendar, Trophy, ArrowRightLeft, UserPlus, ListOrdered } from 'lucide-react';

interface CommandPanelProps {
  onExecuteCommand: (command: Command) => void;
  isLoading: boolean;
  state: LeagueState | null;
}

export function CommandPanel({ onExecuteCommand, isLoading, state }: CommandPanelProps) {
  const [activeTab, setActiveTab] = useState('init');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [players, setPlayers] = useState([
    { id: 'P1', name: 'Ash', team: 'Pikachamps' },
    { id: 'P2', name: 'Misty', team: 'Cerulean Surge' },
    { id: 'P3', name: 'Brock', team: 'Pewter Rocks' },
    { id: 'P4', name: 'Gary', team: 'Pallet Rivals' }
  ]);

  const tabs = [
    { id: 'init', label: 'Initialize', icon: Play },
    { id: 'draft', label: 'Draft', icon: ListOrdered },
    { id: 'register', label: 'Register Team', icon: Users },
    { id: 'matchups', label: 'Set Matchups', icon: Calendar },
    { id: 'run_week', label: 'Run Week', icon: Trophy },
    { id: 'trade', label: 'Trade', icon: ArrowRightLeft },
    { id: 'pickup', label: 'Free Agents', icon: UserPlus }
  ];

  const allDraftPokemon = useMemo(() => {
    if (!state) return [] as string[];
    const drafted = state.players.flatMap(p => (p.roster ? p.roster.map(r => r.pokemon_id) : []));
    const all = Array.from(new Set([...state.free_agents, ...drafted]));
    return all.sort();
  }, [state]);

  const updateFormData = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const addPlayerField = () => {
    if (players.length >= 10) return;
    const nextId = `P${players.length + 1}`;
    setPlayers([...players, { id: nextId, name: '', team: '' }]);
  };

  const removePlayerField = () => {
    if (players.length <= 2) return;
    setPlayers(players.slice(0, -1));
  };

  const updatePlayer = (index: number, field: 'name' | 'team', value: string) => {
    const next = [...players];
    next[index] = { ...next[index], [field]: value };
    setPlayers(next);
  };

  const TYPE_COLORS: { [key: string]: string } = {
    Normal: 'bg-gray-400',
    Fire: 'bg-red-500',
    Water: 'bg-blue-500',
    Electric: 'bg-yellow-400',
    Grass: 'bg-green-500',
    Ice: 'bg-cyan-400',
    Fighting: 'bg-red-700',
    Poison: 'bg-purple-500',
    Ground: 'bg-yellow-700',
    Flying: 'bg-indigo-400',
    Psychic: 'bg-pink-500',
    Bug: 'bg-lime-500',
    Rock: 'bg-stone-500',
    Ghost: 'bg-purple-700',
    Dragon: 'bg-indigo-600',
    Dark: 'bg-gray-700',
    Steel: 'bg-gray-500',
    Fairy: 'bg-pink-400'
  };

  const getColor = (pokemon: string) => {
    const type = POKEMON_DATA[pokemon]?.types[0] || 'Normal';
    return TYPE_COLORS[type] || 'bg-gray-400';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let command: Command;
    switch (activeTab) {
      case 'init': {
        command = {
          command: 'INIT',
          args: {
            league_id: formData.leagueId || 'PFLL-001',
            season: parseInt(formData.season) || 1,
            players: players.map((p, i) => ({
              player_id: p.id,
              name: p.name || `Player ${i + 1}`,
              team_name: p.team || `Team ${i + 1}`
            })),
            free_agents: [
              'Venusaur', 'Charizard', 'Blastoise', 'Pikachu', 'Raichu', 'Gengar', 'Alakazam', 'Machamp', 'Dragonite',
              'Typhlosion', 'Feraligatr', 'Meganium', 'Ampharos', 'Skarmory',
              'Sceptile', 'Blaziken', 'Swampert', 'Gardevoir', 'Metagross', 'Salamence',
              'Bulbasaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Squirtle', 'Wartortle'
            ]
          }
        };
        break;
      }
      case 'draft': {
        if (!state || !state.meta.current_drafter) {
          alert('No active draft');
          return;
        }
        if (!formData.pokemon) {
          alert('Please enter a Pokémon name');
          return;
        }
        command = {
          command: 'DRAFT_PICK',
          args: {
            player_id: state.meta.current_drafter,
            pokemon_id: formData.pokemon.trim()
          }
        };
        break;
      }
      case 'register': {
        const roster = (formData.roster || '')
          .split(',')
          .map((p: string) => p.trim())
          .filter((p: string) => p);
        if (roster.length !== 4) {
          alert('Please enter exactly 4 Pokémon names separated by commas');
          return;
        }
        command = {
          command: 'REGISTER_TEAM',
          args: {
            player_id: formData.playerId || state?.players[0]?.player_id,
            roster: roster.map((pokemon_id: string) => ({ pokemon_id, level: 50 }))
          }
        };
        break;
      }
      case 'matchups': {
        if (!state) {
          alert('Initialize league first');
          return;
        }
        const week = parseInt(formData.weekNumber) || 1;
        const ids = state.players.map(p => p.player_id);
        const matchups = [] as { matchup_id: string; home_player_id: string; away_player_id: string }[];
        for (let i = 0; i < ids.length; i += 2) {
          if (ids[i + 1]) {
            matchups.push({ matchup_id: `w${week}m${i / 2 + 1}`, home_player_id: ids[i], away_player_id: ids[i + 1] });
          }
        }
        command = { command: 'SET_MATCHUPS', args: { week_number: week, matchups } };
        break;
      }
      case 'run_week': {
        command = { command: 'RUN_WEEK', args: { week_number: parseInt(formData.weekNumber) || 1 } };
        break;
      }
      case 'trade': {
        const send = (formData.send || '').split(',').map((p: string) => p.trim()).filter((p: string) => p);
        const receive = (formData.receive || '').split(',').map((p: string) => p.trim()).filter((p: string) => p);
        command = {
          command: 'TRADE',
          args: {
            from_player_id: formData.fromPlayerId || state?.players[0]?.player_id,
            to_player_id: formData.toPlayerId || state?.players[1]?.player_id,
            send,
            receive
          }
        };
        break;
      }
      case 'pickup': {
        const add = (formData.add || '').split(',').map((p: string) => p.trim()).filter((p: string) => p);
        const drop = (formData.drop || '').split(',').map((p: string) => p.trim()).filter((p: string) => p);
        command = {
          command: 'PICKUP',
          args: {
            player_id: formData.playerId || state?.players[0]?.player_id,
            add,
            drop
          }
        };
        break;
      }
      default:
        return;
    }

    onExecuteCommand(command);
  };

  const handleDraftPick = (pokemon: string) => {
    if (!state || !state.meta.current_drafter) {
      alert('No active draft');
      return;
    }
    onExecuteCommand({
      command: 'DRAFT_PICK',
      args: { player_id: state.meta.current_drafter, pokemon_id: pokemon }
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="border-b border-gray-200">
        <nav className="flex" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } flex-1 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center justify-center gap-2`}
            >
              <tab.icon className="w-4 h-4" /> {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {activeTab === 'init' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">League ID</label>
                  <input
                    type="text"
                    value={formData.leagueId || ''}
                    onChange={(e) => updateFormData('leagueId', e.target.value)}
                    placeholder="PFLL-001"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
                  <input
                    type="number"
                    value={formData.season || ''}
                    onChange={(e) => updateFormData('season', e.target.value)}
                    placeholder="1"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              {players.map((p, idx) => (
                <div key={p.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Player {idx + 1} Name</label>
                    <input
                      type="text"
                      value={p.name}
                      onChange={(e) => updatePlayer(idx, 'name', e.target.value)}
                      placeholder={`Player ${idx + 1}`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Team {idx + 1} Name</label>
                    <input
                      type="text"
                      value={p.team}
                      onChange={(e) => updatePlayer(idx, 'team', e.target.value)}
                      placeholder={`Team ${idx + 1}`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              ))}
              <div className="flex gap-2">
                <button type="button" onClick={addPlayerField} className="px-3 py-1 bg-green-500 text-white rounded">
                  Add Player
                </button>
                <button type="button" onClick={removePlayerField} className="px-3 py-1 bg-red-500 text-white rounded">
                  Remove Player
                </button>
              </div>
            </div>
          )}

          {activeTab === 'draft' && state && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Current Drafter:{' '}
                {state.players.find(p => p.player_id === state.meta.current_drafter)?.team_name || state.meta.current_drafter}
              </p>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pokémon</label>
                <input
                  type="text"
                  value={formData.pokemon || ''}
                  onChange={(e) => updateFormData('pokemon', e.target.value)}
                  placeholder="Charizard"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Available Pokémon</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                  {allDraftPokemon.map((pokemon) => (
                    <button
                      key={pokemon}
                      type="button"
                      onClick={() => handleDraftPick(pokemon)}
                      className={`flex items-center gap-2 p-2 rounded-lg border border-gray-200 hover:bg-gray-50 ${getColor(pokemon)}`}
                    >
                      <span className="font-medium text-sm text-white">{pokemon}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'register' && state && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Player</label>
                <select
                  value={formData.playerId || ''}
                  onChange={(e) => updateFormData('playerId', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Player</option>
                  {state.players.map(p => (
                    <option key={p.player_id} value={p.player_id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Team Roster (4 Pokémon, comma-separated)</label>
                <textarea
                  value={formData.roster || ''}
                  onChange={(e) => updateFormData('roster', e.target.value)}
                  placeholder="Charizard, Blastoise, Venusaur, Pikachu"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {activeTab === 'matchups' && state && (
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Week Number</label>
                <input
                  type="number"
                  value={formData.weekNumber || ''}
                  onChange={(e) => updateFormData('weekNumber', e.target.value)}
                  placeholder="1"
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Default matchups will pair players sequentially.</p>
              </div>
            </div>
          )}

          {activeTab === 'run_week' && (
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Week Number</label>
                <input
                  type="number"
                  value={formData.weekNumber || ''}
                  onChange={(e) => updateFormData('weekNumber', e.target.value)}
                  placeholder="1"
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">⚠️ Make sure all players have registered teams and matchups are set before running the week.</p>
              </div>
            </div>
          )}

          {activeTab === 'trade' && state && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">From Player</label>
                  <select
                    value={formData.fromPlayerId || ''}
                    onChange={(e) => updateFormData('fromPlayerId', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Player</option>
                    {state.players.map(p => (
                      <option key={p.player_id} value={p.player_id}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">To Player</label>
                  <select
                    value={formData.toPlayerId || ''}
                    onChange={(e) => updateFormData('toPlayerId', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Player</option>
                    {state.players.map(p => (
                      <option key={p.player_id} value={p.player_id}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Send (comma-separated)</label>
                <input
                  type="text"
                  value={formData.send || ''}
                  onChange={(e) => updateFormData('send', e.target.value)}
                  placeholder="Charizard"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Receive (comma-separated)</label>
                <input
                  type="text"
                  value={formData.receive || ''}
                  onChange={(e) => updateFormData('receive', e.target.value)}
                  placeholder="Blastoise"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {activeTab === 'pickup' && state && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Player</label>
                <select
                  value={formData.playerId || ''}
                  onChange={(e) => updateFormData('playerId', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Player</option>
                  {state.players.map(p => (
                    <option key={p.player_id} value={p.player_id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Add (comma-separated)</label>
                <input
                  type="text"
                  value={formData.add || ''}
                  onChange={(e) => updateFormData('add', e.target.value)}
                  placeholder="Gengar"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Drop (comma-separated)</label>
                <input
                  type="text"
                  value={formData.drop || ''}
                  onChange={(e) => updateFormData('drop', e.target.value)}
                  placeholder="Alakazam"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {activeTab !== 'draft' && (
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isLoading ? 'Processing...' : `Execute ${tabs.find(t => t.id === activeTab)?.label}`}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
