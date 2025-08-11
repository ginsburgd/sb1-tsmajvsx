import { Pokemon, Move } from '../types/league';

export const POKEMON_DATA: { [key: string]: Pokemon } = {
  // Gen 1
  Bulbasaur: {
    name: 'Bulbasaur',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
    default_moves: ['Vine Whip', 'Tackle', 'Poison Powder', 'Sleep Powder']
  },
  Ivysaur: {
    name: 'Ivysaur',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
    default_moves: ['Razor Leaf', 'Tackle', 'Poison Powder', 'Sleep Powder']
  },
  Venusaur: {
    name: 'Venusaur',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    default_moves: ['Petal Dance', 'Razor Leaf', 'Sludge Bomb', 'Earthquake']
  },
  Charmander: {
    name: 'Charmander',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
    default_moves: ['Ember', 'Scratch', 'Growl', 'Leer']
  },
  Charmeleon: {
    name: 'Charmeleon',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
    default_moves: ['Flamethrower', 'Slash', 'Dragon Rage', 'Scary Face']
  },
  Charizard: {
    name: 'Charizard',
    gen: 1,
    types: ['Fire', 'Flying'],
    base_stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    default_moves: ['Fire Blast', 'Wing Attack', 'Slash', 'Earthquake']
  },
  Squirtle: {
    name: 'Squirtle',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 },
    default_moves: ['Water Gun', 'Tackle', 'Tail Whip', 'Withdraw']
  },
  Wartortle: {
    name: 'Wartortle',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58 },
    default_moves: ['Water Pulse', 'Bite', 'Rapid Spin', 'Protect']
  },
  Blastoise: {
    name: 'Blastoise',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
    default_moves: ['Hydro Pump', 'Bite', 'Ice Beam', 'Earthquake']
  },
  Pikachu: {
    name: 'Pikachu',
    gen: 1,
    types: ['Electric'],
    base_stats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
    default_moves: ['Thunderbolt', 'Quick Attack', 'Thunder Wave', 'Double Team']
  },
  Raichu: {
    name: 'Raichu',
    gen: 1,
    types: ['Electric'],
    base_stats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110 },
    default_moves: ['Thunder', 'Body Slam', 'Thunder Wave', 'Seismic Toss']
  },
  Gengar: {
    name: 'Gengar',
    gen: 1,
    types: ['Ghost', 'Poison'],
    base_stats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    default_moves: ['Shadow Ball', 'Sludge Bomb', 'Thunderbolt', 'Ice Punch']
  },
  Alakazam: {
    name: 'Alakazam',
    gen: 1,
    types: ['Psychic'],
    base_stats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120 },
    default_moves: ['Psychic', 'Fire Punch', 'Ice Punch', 'Thunder Punch']
  },
  Machamp: {
    name: 'Machamp',
    gen: 1,
    types: ['Fighting'],
    base_stats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
    default_moves: ['Cross Chop', 'Rock Slide', 'Earthquake', 'Fire Blast']
  },
  Dragonite: {
    name: 'Dragonite',
    gen: 1,
    types: ['Dragon', 'Flying'],
    base_stats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    default_moves: ['Dragon Claw', 'Wing Attack', 'Earthquake', 'Fire Blast']
  },
  
  // Gen 2
  Typhlosion: {
    name: 'Typhlosion',
    gen: 2,
    types: ['Fire'],
    base_stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    default_moves: ['Eruption', 'Fire Blast', 'Thunder Punch', 'Earthquake']
  },
  Feraligatr: {
    name: 'Feraligatr',
    gen: 2,
    types: ['Water'],
    base_stats: { hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78 },
    default_moves: ['Hydro Pump', 'Crunch', 'Ice Punch', 'Earthquake']
  },
  Meganium: {
    name: 'Meganium',
    gen: 2,
    types: ['Grass'],
    base_stats: { hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80 },
    default_moves: ['Petal Dance', 'Body Slam', 'Earthquake', 'Ancient Power']
  },
  Ampharos: {
    name: 'Ampharos',
    gen: 2,
    types: ['Electric'],
    base_stats: { hp: 90, atk: 75, def: 85, spa: 115, spd: 90, spe: 55 },
    default_moves: ['Thunderbolt', 'Fire Punch', 'Focus Punch', 'Thunder Wave']
  },
  Skarmory: {
    name: 'Skarmory',
    gen: 2,
    types: ['Steel', 'Flying'],
    base_stats: { hp: 65, atk: 80, def: 140, spa: 40, spd: 70, spe: 70 },
    default_moves: ['Steel Wing', 'Drill Peck', 'Rock Slide', 'Toxic']
  },
  
  // Gen 3
  Sceptile: {
    name: 'Sceptile',
    gen: 3,
    types: ['Grass'],
    base_stats: { hp: 70, atk: 85, def: 65, spa: 105, spd: 85, spe: 120 },
    default_moves: ['Leaf Blade', 'Dragon Claw', 'Rock Slide', 'Earthquake']
  },
  Blaziken: {
    name: 'Blaziken',
    gen: 3,
    types: ['Fire', 'Fighting'],
    base_stats: { hp: 80, atk: 120, def: 70, spa: 110, spd: 70, spe: 80 },
    default_moves: ['Blaze Kick', 'Sky Uppercut', 'Rock Slide', 'Earthquake']
  },
  Swampert: {
    name: 'Swampert',
    gen: 3,
    types: ['Water', 'Ground'],
    base_stats: { hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60 },
    default_moves: ['Earthquake', 'Surf', 'Ice Beam', 'Rock Slide']
  },
  Gardevoir: {
    name: 'Gardevoir',
    gen: 3,
    types: ['Psychic', 'Fairy'],
    base_stats: { hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80 },
    default_moves: ['Psychic', 'Thunderbolt', 'Ice Beam', 'Focus Blast']
  },
  Metagross: {
    name: 'Metagross',
    gen: 3,
    types: ['Steel', 'Psychic'],
    base_stats: { hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70 },
    default_moves: ['Meteor Mash', 'Psychic', 'Earthquake', 'Rock Slide']
  },
  Salamence: {
    name: 'Salamence',
    gen: 3,
    types: ['Dragon', 'Flying'],
    base_stats: { hp: 95, atk: 135, def: 80, spa: 110, spd: 80, spe: 100 },
    default_moves: ['Dragon Claw', 'Earthquake', 'Fire Blast', 'Rock Slide']
  }
};

export const MOVE_DATA: { [key: string]: Move } = {
  // Physical moves
  'Vine Whip': { type: 'Grass', category: 'Physical', power: 45, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Razor Leaf': { type: 'Grass', category: 'Physical', power: 55, accuracy: 0.95, priority: 0, stab_applicable: true },
  'Petal Dance': { type: 'Grass', category: 'Special', power: 120, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Leaf Blade': { type: 'Grass', category: 'Physical', power: 90, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Tackle': { type: 'Normal', category: 'Physical', power: 40, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Scratch': { type: 'Normal', category: 'Physical', power: 40, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Slash': { type: 'Normal', category: 'Physical', power: 70, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Body Slam': { type: 'Normal', category: 'Physical', power: 85, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Quick Attack': { type: 'Normal', category: 'Physical', power: 40, accuracy: 1.0, priority: 1, stab_applicable: true },
  'Ember': { type: 'Fire', category: 'Special', power: 40, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Flamethrower': { type: 'Fire', category: 'Special', power: 90, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Fire Blast': { type: 'Fire', category: 'Special', power: 110, accuracy: 0.85, priority: 0, stab_applicable: true },
  'Eruption': { type: 'Fire', category: 'Special', power: 150, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Blaze Kick': { type: 'Fire', category: 'Physical', power: 85, accuracy: 0.9, priority: 0, stab_applicable: true },
  'Water Gun': { type: 'Water', category: 'Special', power: 40, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Water Pulse': { type: 'Water', category: 'Special', power: 60, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Surf': { type: 'Water', category: 'Special', power: 90, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Hydro Pump': { type: 'Water', category: 'Special', power: 110, accuracy: 0.8, priority: 0, stab_applicable: true },
  'Thunderbolt': { type: 'Electric', category: 'Special', power: 90, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Thunder': { type: 'Electric', category: 'Special', power: 110, accuracy: 0.7, priority: 0, stab_applicable: true },
  'Psychic': { type: 'Psychic', category: 'Special', power: 90, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Shadow Ball': { type: 'Ghost', category: 'Special', power: 80, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Sludge Bomb': { type: 'Poison', category: 'Special', power: 90, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Ice Beam': { type: 'Ice', category: 'Special', power: 90, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Earthquake': { type: 'Ground', category: 'Physical', power: 100, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Rock Slide': { type: 'Rock', category: 'Physical', power: 75, accuracy: 0.9, priority: 0, stab_applicable: true },
  'Cross Chop': { type: 'Fighting', category: 'Physical', power: 100, accuracy: 0.8, priority: 0, stab_applicable: true },
  'Sky Uppercut': { type: 'Fighting', category: 'Physical', power: 85, accuracy: 0.9, priority: 0, stab_applicable: true },
  'Focus Blast': { type: 'Fighting', category: 'Special', power: 120, accuracy: 0.7, priority: 0, stab_applicable: true },
  'Focus Punch': { type: 'Fighting', category: 'Physical', power: 150, accuracy: 1.0, priority: -3, stab_applicable: true },
  'Dragon Claw': { type: 'Dragon', category: 'Physical', power: 80, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Wing Attack': { type: 'Flying', category: 'Physical', power: 60, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Drill Peck': { type: 'Flying', category: 'Physical', power: 80, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Steel Wing': { type: 'Steel', category: 'Physical', power: 70, accuracy: 0.9, priority: 0, stab_applicable: true },
  'Meteor Mash': { type: 'Steel', category: 'Physical', power: 90, accuracy: 0.9, priority: 0, stab_applicable: true },
  'Bite': { type: 'Dark', category: 'Physical', power: 60, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Crunch': { type: 'Dark', category: 'Physical', power: 80, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Fire Punch': { type: 'Fire', category: 'Physical', power: 75, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Ice Punch': { type: 'Ice', category: 'Physical', power: 75, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Thunder Punch': { type: 'Electric', category: 'Physical', power: 75, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Ancient Power': { type: 'Rock', category: 'Special', power: 60, accuracy: 1.0, priority: 0, stab_applicable: true },
  'Dragon Rage': { type: 'Dragon', category: 'Special', power: 40, accuracy: 1.0, priority: 0, stab_applicable: false },
  'Seismic Toss': { type: 'Fighting', category: 'Physical', power: 50, accuracy: 1.0, priority: 0, stab_applicable: false },
  'Rapid Spin': { type: 'Normal', category: 'Physical', power: 20, accuracy: 1.0, priority: 0, stab_applicable: true },

  // Status moves
  'Poison Powder': { type: 'Poison', category: 'Status', power: 0, accuracy: 0.75, priority: 0, stab_applicable: false },
  'Sleep Powder': { type: 'Grass', category: 'Status', power: 0, accuracy: 0.75, priority: 0, stab_applicable: false },
  'Thunder Wave': { type: 'Electric', category: 'Status', power: 0, accuracy: 0.9, priority: 0, stab_applicable: false },
  'Toxic': { type: 'Poison', category: 'Status', power: 0, accuracy: 0.9, priority: 0, stab_applicable: false },
  'Growl': { type: 'Normal', category: 'Status', power: 0, accuracy: 1.0, priority: 0, stab_applicable: false },
  'Leer': { type: 'Normal', category: 'Status', power: 0, accuracy: 1.0, priority: 0, stab_applicable: false },
  'Tail Whip': { type: 'Normal', category: 'Status', power: 0, accuracy: 1.0, priority: 0, stab_applicable: false },
  'Withdraw': { type: 'Water', category: 'Status', power: 0, accuracy: 1.0, priority: 0, stab_applicable: false },
  'Protect': { type: 'Normal', category: 'Status', power: 0, accuracy: 1.0, priority: 4, stab_applicable: false },
  'Double Team': { type: 'Normal', category: 'Status', power: 0, accuracy: 1.0, priority: 0, stab_applicable: false },
  'Scary Face': { type: 'Normal', category: 'Status', power: 0, accuracy: 1.0, priority: 0, stab_applicable: false },

  // Fallback move
  'Struggle': { type: 'Normal', category: 'Physical', power: 50, accuracy: 1.0, priority: 0, stab_applicable: false }
};

export const TYPE_CHART: { [key: string]: { [key: string]: number } } = {
  Normal: {
    Rock: 0.5, Ghost: 0, Steel: 0.5
  },
  Fire: {
    Fire: 0.5, Water: 0.5, Grass: 2, Ice: 2, Bug: 2, Rock: 0.5, Dragon: 0.5, Steel: 2
  },
  Water: {
    Fire: 2, Water: 0.5, Grass: 0.5, Ground: 2, Rock: 2, Dragon: 0.5
  },
  Electric: {
    Water: 2, Electric: 0.5, Grass: 0.5, Ground: 0, Flying: 2, Dragon: 0.5
  },
  Grass: {
    Fire: 0.5, Water: 2, Grass: 0.5, Poison: 0.5, Flying: 0.5, Bug: 0.5, Rock: 2, Ground: 2, Dragon: 0.5, Steel: 0.5
  },
  Ice: {
    Fire: 0.5, Water: 0.5, Grass: 2, Ice: 0.5, Flying: 2, Ground: 2, Dragon: 2, Steel: 0.5
  },
  Fighting: {
    Normal: 2, Ice: 2, Poison: 0.5, Flying: 0.5, Psychic: 0.5, Bug: 0.5, Rock: 2, Ghost: 0, Dark: 2, Steel: 2, Fairy: 0.5
  },
  Poison: {
    Grass: 2, Poison: 0.5, Ground: 0.5, Rock: 0.5, Ghost: 0.5, Steel: 0, Fairy: 2
  },
  Ground: {
    Fire: 2, Electric: 2, Grass: 0.5, Poison: 2, Flying: 0, Bug: 0.5, Rock: 2, Steel: 2
  },
  Flying: {
    Electric: 0.5, Grass: 2, Ice: 0.5, Fighting: 2, Bug: 2, Rock: 0.5, Steel: 0.5
  },
  Psychic: {
    Fighting: 2, Poison: 2, Psychic: 0.5, Dark: 0, Steel: 0.5
  },
  Bug: {
    Fire: 0.5, Grass: 2, Fighting: 0.5, Poison: 0.5, Flying: 0.5, Psychic: 2, Ghost: 0.5, Dark: 2, Steel: 0.5, Fairy: 0.5
  },
  Rock: {
    Fire: 2, Ice: 2, Fighting: 0.5, Ground: 0.5, Flying: 2, Bug: 2, Steel: 0.5
  },
  Ghost: {
    Normal: 0, Psychic: 2, Ghost: 2, Dark: 0.5
  },
  Dragon: {
    Dragon: 2, Steel: 0.5, Fairy: 0
  },
  Dark: {
    Fighting: 0.5, Psychic: 2, Ghost: 2, Dark: 0.5, Fairy: 0.5
  },
  Steel: {
    Fire: 0.5, Water: 0.5, Electric: 0.5, Ice: 2, Rock: 2, Steel: 0.5, Fairy: 2
  },
  Fairy: {
    Fire: 0.5, Fighting: 2, Poison: 0.5, Dragon: 2, Dark: 2, Steel: 0.5
  }
};

// Fill in missing type effectiveness as 1x (normal damage)
Object.keys(TYPE_CHART).forEach(attackType => {
  const types = ['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 
                'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'];
  types.forEach(defendType => {
    if (TYPE_CHART[attackType][defendType] === undefined) {
      TYPE_CHART[attackType][defendType] = 1;
    }
  });
});