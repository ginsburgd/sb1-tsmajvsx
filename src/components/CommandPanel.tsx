import React, { useState } from 'react';
import { Command, LeagueState } from '../types/league';
import { Play, Users, Calendar, Trophy, ArrowRightLeft, UserPlus, ListOrdered } from 'lucide-react';

interface CommandPanelProps {
  onExecuteCommand: (command: Command) => void;
  isLoading: boolean;
  state: LeagueState | null;
}

export function CommandPanel({ onExecuteCommand, isLoading, state }: CommandPanelProps) {
  const [activeTab, setActiveTab] = useState('init');
  const [formData, setFormData] = useState<any>({});

  const tabs = [
    { id: 'init', label: 'Initialize', icon: Play },
    { id: 'draft', label: 'Draft', icon: ListOrdered },
    { id: 'register', label: 'Register Team', icon: Users },
    { id: 'matchups', label: 'Set Matchups', icon: Calendar },
    { id: 'run_week', label: 'Run Week', icon: Trophy },
    { id: 'trade', label: 'Trade', icon: ArrowRightLeft },
    { id: 'pickup', label: 'Free Agents', icon: UserPlus }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let command: Command;
    
    switch (activeTab) {
      case 'init':
        command = {
          command: 'INIT',
          args: {
            league_id: formData.leagueId || 'PFLL-001',
            season: parseInt(formData.season) || 1,
            players: [
              { player_id: 'P1', name: formData.player1Name || 'Ash', team_name: formData.team1Name || 'Pikachamps' },
              { player_id: 'P2', name: formData.player2Name || 'Misty', team_name: formData.team2Name || 'Cerulean Surge' },
              { player_id: 'P3', name: formData.player3Name || 'Brock', team_name: formData.team3Name || 'Pewter Rocks' },
              { player_id: 'P4', name: formData.player4Name || 'Gary', team_name: formData.team4Name || 'Pallet Rivals' }
            ],
            free_agents: [
              'Venusaur', 'Charizard', 'Blastoise', 'Pikachu', 'Raichu', 'Gengar', 'Alakazam', 'Machamp', 'Dragonite',
              'Typhlosion', 'Feraligatr', 'Meganium', 'Ampharos', 'Skarmory',
              'Sceptile', 'Blaziken', 'Swampert', 'Gardevoir', 'Metagross', 'Salamence',
              'Bulbasaur', 'Ivysaur', 'Charmander', 'Charmeleon', 'Squirtle', 'Wartortle'
            ]
          }
        };
        break;

      case 'draft':
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

      case 'register':
        const roster = (formData.roster || '').split(',').map((p: string) => p.trim()).filter((p: string) => p);
        if (roster.length !== 4) {
          alert('Please enter exactly 4 Pokémon names separated by commas');
          return;
        }
        command = {
          command: 'REGISTER_TEAM',
          args: {
            player_id: formData.playerId || 'P1',
            roster: roster.map((pokemon_id: string) => ({ pokemon_id, level: 50 }))
          }
        };
        break;
      
      case 'matchups':
        command = {
          command: 'SET_MATCHUPS',
          args: {
            week_number: parseInt(formData.weekNumber) || 1,
            matchups: [
              { matchup_id: 'w1m1', home_player_id: 'P1', away_player_id: 'P2' },
              { matchup_id: 'w1m2', home_player_id: 'P3', away_player_id: 'P4' }
            ]
          }
        };
        break;
      
      case 'run_week':
        command = {
          command: 'RUN_WEEK',
          args: {
            week_number: parseInt(formData.weekNumber) || 1
          }
        };
        break;
      
      case 'trade':
        const send = (formData.send || '').split(',').map((p: string) => p.trim()).filter((p: string) => p);
        const receive = (formData.receive || '').split(',').map((p: string) => p.trim()).filter((p: string) => p);
        command = {
          command: 'TRADE',
          args: {
            from_player_id: formData.fromPlayerId || 'P1',
            to_player_id: formData.toPlayerId || 'P2',
            send,
            receive
          }
        };
        break;
      
      case 'pickup':
        const add = (formData.add || '').split(',').map((p: string) => p.trim()).filter((p: string) => p);
        const drop = (formData.drop || '').split(',').map((p: string) => p.trim()).filter((p: string) => p);
        command = {
          command: 'PICKUP',
          args: {
            player_id: formData.playerId || 'P1',
            add,
            drop
          }
        };
        break;
      
      default:
        return;
    }
    
    onExecuteCommand(command);
  };

  const updateFormData = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {activeTab === 'init' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Player {i} Name</label>
                    <input
                      type="text"
                      value={formData[`player${i}Name`] || ''}
                      onChange={(e) => updateFormData(`player${i}Name`, e.target.value)}
                      placeholder={['Ash', 'Misty', 'Brock', 'Gary'][i-1]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Team {i} Name</label>
                    <input
                      type="text"
                      value={formData[`team${i}Name`] || ''}
                      onChange={(e) => updateFormData(`team${i}Name`, e.target.value)}
                      placeholder={['Pikachamps', 'Cerulean Surge', 'Pewter Rocks', 'Pallet Rivals'][i-1]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'draft' && state && (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Current Drafter:{' '}
                {state.players.find(p => p.player_id === state.meta.current_drafter)?.team_name || state.meta.current_drafter}
              </p>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pokémon Name</label>
                <input
                  type="text"
                  value={formData.pokemon || ''}
                  onChange={(e) => updateFormData('pokemon', e.target.value)}
                  placeholder="Pikachu"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {activeTab === 'register' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Player ID</label>
                <select
                  value={formData.playerId || ''}
                  onChange={(e) => updateFormData('playerId', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Player</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                  <option value="P3">P3</option>
                  <option value="P4">P4</option>
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
                <p className="text-sm text-gray-500 mt-1">Available: Charizard, Blastoise, Venusaur, Pikachu, Gengar, Dragonite, Sceptile, Blaziken, Swampert, etc.</p>
              </div>
            </div>
          )}

          {activeTab === 'matchups' && (
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
                <p className="text-sm text-gray-600">Default matchups will be set: P1 vs P2, P3 vs P4</p>
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

          {activeTab === 'trade' && (
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
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>
                    <option value="P4">P4</option>
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
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>
                    <option value="P4">P4</option>
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

          {activeTab === 'pickup' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Player ID</label>
                <select
                  value={formData.playerId || ''}
                  onChange={(e) => updateFormData('playerId', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Player</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                  <option value="P3">P3</option>
                  <option value="P4">P4</option>
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

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isLoading ? 'Processing...' : `Execute ${tabs.find(t => t.id === activeTab)?.label}`}
          </button>
        </form>
      </div>
    </div>
  );
}