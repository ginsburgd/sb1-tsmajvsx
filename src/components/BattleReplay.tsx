import React, { useEffect, useRef, useState } from 'react';
import { BattleTurn } from '../types/league';

interface BattleReplayProps {
  turns: BattleTurn[];
  musicUrl?: string;
}

export function BattleReplay({ turns, musicUrl }: BattleReplayProps) {
  const [index, setIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (musicUrl && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [musicUrl]);

  useEffect(() => {
    if (index >= turns.length) return;
    const timer = setTimeout(() => setIndex(i => i + 1), 1500);
    return () => clearTimeout(timer);
  }, [index, turns.length]);

  if (index >= turns.length) {
    return (
      <div className="p-4">
        {musicUrl && <audio ref={audioRef} src={musicUrl} loop />}
        <p className="text-center">Battle replay finished.</p>
      </div>
    );
  }

  const turn = turns[index];

  return (
    <div className="p-4 space-y-2">
      {musicUrl && <audio ref={audioRef} src={musicUrl} loop />}
      <p className="font-bold">Turn {turn.turn}: {turn.attacker} used {turn.move}</p>
      {turn.events.map((e, i) => (
        <p key={i} className="ml-4 animate-pulse">
          {e.type === 'damage'
            ? `${turn.defender} took ${e.amount} damage!`
            : `${turn.defender} ${e.status}`}
        </p>
      ))}
    </div>
  );
}

BattleReplay.defaultProps = {
  musicUrl: 'https://vgmsite.com/soundtracks/pokemon-red-blue-gameboy/kcdtdx28jq/3-34.%20Battle!%20(Vs%20Wild%20Pok%C3%A9mon).mp3'
};

