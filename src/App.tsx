import React, { useState, useEffect } from 'react';
import { CommandPanel } from './components/CommandPanel';
import { LeagueDisplay } from './components/LeagueDisplay';
import { PokemonStats } from './components/PokemonStats';
import { StatsDashboard } from './components/StatsDashboard';
import { LeagueEngine } from './engine/league';
import { Command, LeagueState, EngineResponse } from './types/league';
import { Zap, Github } from 'lucide-react';

function App() {
  const [leagueState, setLeagueState] = useState<LeagueState | null>(null);
  const [lastLogs, setLastLogs] = useState<string[]>([]);
  const [lastErrors, setLastErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState<'league' | 'pokedex' | 'stats'>('league');

  const engine = new LeagueEngine();

  const handleExecuteCommand = async (command: Command) => {
    setIsLoading(true);

    try {
      const commandWithState = {
        ...command,
        league_state: leagueState || undefined
      };

      const response: EngineResponse = await engine.processCommand(commandWithState);

      setLeagueState(response.league_state);
      setLastLogs(response.logs);
      setLastErrors(response.errors);

      try {
        await fetch('http://localhost:3000/league', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(response.league_state)
        });
      } catch (err) {
        console.error('Failed to persist league state', err);
      }
    } catch (error) {
      setLastErrors([`Failed to execute command: ${error instanceof Error ? error.message : String(error)}`]);
      setLastLogs([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const loadState = async () => {
      try {
        // Use relative URL for production, localhost for development
        const apiUrl = process.env.NODE_ENV === 'production' 
          ? '/api/league' 
          : 'http://localhost:3000/league';
        const res = await fetch(apiUrl);
        if (res.ok) {
          const data: LeagueState = await res.json();
          if (data && Object.keys(data).length > 0) {
            setLeagueState(data);
          }
        }
      } catch (err) {
        console.error('Failed to load league state', err);
      }
    };
    loadState();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Pokémon Fantasy League
                </h1>
                <p className="text-gray-600 text-sm">Turn-based battles with 151 Gen 1 Pokémon</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <nav className="flex gap-2">
                <button
                  onClick={() => setView('league')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${view === 'league' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  League
                </button>
                <button
                  onClick={() => setView('pokedex')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${view === 'pokedex' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Pokédex
                </button>
                <button
                  onClick={() => setView('stats')}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${view === 'stats' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Stats
                </button>
              </nav>
              <a
                href="https://github.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {view === 'league' ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Command Panel */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">League Management</h2>
                  <p className="text-gray-600">Execute commands to manage your Pokémon Fantasy League</p>
                </div>
                <CommandPanel onExecuteCommand={handleExecuteCommand} isLoading={isLoading} state={leagueState} />
              </div>

              {/* League Display */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">League Status</h2>
                  <p className="text-gray-600">Current league state and recent activity</p>
                </div>
                <LeagueDisplay state={leagueState} logs={lastLogs} errors={lastErrors} />
              </div>
            </div>

            {/* Features */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">League Features</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience the ultimate Pokémon fantasy league with deterministic battles, persistent state, and comprehensive team management.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: '⚔️', title: 'Turn-based Battles', description: 'Authentic Pokémon battles with type effectiveness, STAB, and critical hits' },
                  { icon: '🎲', title: 'Deterministic RNG', description: 'Reproducible results using seeded random number generation' },
                  { icon: '📊', title: 'Team Management', description: 'Draft teams, make trades, and pick up free agents' },
                  { icon: '🏆', title: 'Season Tracking', description: 'Complete win/loss records and historical battle results' },
                  { icon: '🔄', title: 'Persistent State', description: 'Full league state saved as JSON for continued play' },
                  { icon: '⚡', title: 'Gen 1 Only', description: 'Classic Pokémon with official base stats and movesets' }
                ].map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Start Guide */}
            <div className="mt-16 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'Initialize League', description: 'Create your league with players and free agents' },
                  { step: '2', title: 'Register Teams', description: 'Each player drafts 4 Pokémon for their roster' },
                  { step: '3', title: 'Set Matchups', description: 'Configure weekly head-to-head matchups' },
                  { step: '4', title: 'Run Battles', description: 'Simulate battles and track results' }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : view === 'pokedex' ? (
          <PokemonStats />
        ) : (
          <StatsDashboard state={leagueState} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2025 Pokémon Fantasy League Engine. Built with React and TypeScript.</p>
            <p className="text-sm mt-2">Pokémon and related characters are trademarks of Nintendo, Game Freak, and Creatures Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
