import React from 'react';
import { LeagueState } from '../types/league';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface StatsDashboardProps {
  state: LeagueState | null;
}

export function StatsDashboard({ state }: StatsDashboardProps) {
  if (!state) {
    return <div className="text-center p-4">No league data available.</div>;
  }

  const labels = state.players.map(p => p.name);
  const wins = state.players.map(p => p.record.wins);
  const losses = state.players.map(p => p.record.losses);
  const kos = state.players.map(p => state.metrics.knockouts[p.player_id] || 0);

  const recordData = {
    labels,
    datasets: [
      {
        label: 'Wins',
        data: wins,
        backgroundColor: 'rgba(34,197,94,0.5)'
      },
      {
        label: 'Losses',
        data: losses,
        backgroundColor: 'rgba(239,68,68,0.5)'
      }
    ]
  };

  const koData = {
    labels,
    datasets: [
      {
        label: 'Knockouts',
        data: kos,
        backgroundColor: 'rgba(59,130,246,0.5)'
      }
    ]
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Player Records</h2>
        <Bar data={recordData} />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Total Knockouts</h2>
        <Bar data={koData} />
      </div>
    </div>
  );
}
