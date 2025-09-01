import React, { useMemo, useState } from 'react';
import { POKEMON_DATA } from '../data/pokemon';

function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return text;
  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);
  return (
    <>
      {before}
      <span className="bg-yellow-200">{match}</span>
      {after}
    </>
  );
}

export function PokemonStats() {
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const baseEntries = useMemo(
    () => Object.values(POKEMON_DATA).sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  const entries = useMemo(() => {
    const name = nameFilter.toLowerCase();
    const type = typeFilter.toLowerCase();
    return baseEntries.filter(
      p =>
        (!name || p.name.toLowerCase().includes(name)) &&
        (!type || p.types.some(t => t.toLowerCase().includes(type)))
    );
  }, [baseEntries, nameFilter, typeFilter]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Pokémon Stats</h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={e => setNameFilter(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="text"
          placeholder="Filter by type"
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-gray-700">
            <th className="pb-2 text-left">Image</th>
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
               <img
                      src={`/pokemon/${p.name}.png`}
                      alt={p.name}
                      className="w-6 h-6"
              />
              <td className="py-1 font-medium">{highlightMatch(p.name, nameFilter)}</td>
              <td className="py-1">
                {p.types.map((t, i) => (
                  <React.Fragment key={t}>
                    {i > 0 && ', '}
                    {highlightMatch(t, typeFilter)}
                  </React.Fragment>
                ))}
              </td>
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
