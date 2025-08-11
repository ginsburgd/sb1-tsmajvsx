// Simple deterministic PRNG using a string seed
export class SeededRandom {
  private seed: number;

  constructor(seedString: string) {
    // Convert string to number seed using a simple hash
    this.seed = this.hashString(seedString);
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  }

  // Linear congruential generator
  next(): number {
    this.seed = (this.seed * 1664525 + 1013904223) % 4294967296;
    return this.seed / 4294967296;
  }

  // Get random float between min and max
  range(min: number, max: number): number {
    return min + this.next() * (max - min);
  }

  // Get random integer between min and max (inclusive)
  int(min: number, max: number): number {
    return Math.floor(this.range(min, max + 1));
  }

  // Get random boolean with given probability
  bool(probability: number = 0.5): boolean {
    return this.next() < probability;
  }
}

// Generate deterministic seed for battles
export function generateSeed(leagueId: string, season: number, week: number, matchupId: string): string {
  return `${leagueId}_${season}_${week}_${matchupId}`;
}