import React from 'react';
import { POKEMON_DATA } from '../data/pokemon';

export function PokemonStats() {
  const entries = Object.values(POKEMON_DATA).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Pokémon Stats</h2>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-gray-700">
            <th className="pb-2 text-left">Name</th>
            <th className="pb-2 text-left">Types</th>
            <th className="pb-2 text-right">HP</th>
            <th className="pb-2 text-right">Atk</th>
            <th className="pb-2 text-right">Def</th>
            <th className="pb-2 text-right">SpA</th>
            <th className="pb-2 text-right">SpD</th>
            <th className="pb-2 text-right">Spe</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(p => (
            <tr key={p.name} className="border-t border-gray-200">
              <td className="py-1 font-medium">{p.name}</td>
              <td className="py-1">{p.types.join(', ')}</td>
              <td className="py-1 text-right font-mono">{p.base_stats.hp}</td>
              <td className="py-1 text-right font-mono">{p.base_stats.atk}</td>
              <td className="py-1 text-right font-mono">{p.base_stats.def}</td>
              <td className="py-1 text-right font-mono">{p.base_stats.spa}</td>
              <td className="py-1 text-right font-mono">{p.base_stats.spd}</td>
              <td className="py-1 text-right font-mono">{p.base_stats.spe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
