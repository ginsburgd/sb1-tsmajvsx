import { Pokemon, Move } from "../types/league";

export const POKEMON_DATA: { [key: string]: Pokemon } = {
  'Bulbasaur': {
    name: 'Bulbasaur',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
    default_moves: ['Vine Whip', 'Leech Seed', 'Poison Powder', 'Sleep Powder']
  },
  'Ivysaur': {
    name: 'Ivysaur',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
    default_moves: ['Razor Leaf', 'Leech Seed', 'Sleep Powder', 'Toxic']
  },
  'Venusaur': {
    name: 'Venusaur',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    default_moves: ['Petal Dance', 'Sludge Bomb', 'Leech Seed', 'Protect']
  },
  'Charmander': {
    name: 'Charmander',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
    default_moves: ['Ember', 'Scratch', 'Leer', 'Quick Attack']
  },
  'Charmeleon': {
    name: 'Charmeleon',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
    default_moves: ['Flamethrower', 'Slash', 'Scary Face', 'Quick Attack']
  },
  'Charizard': {
    name: 'Charizard',
    gen: 1,
    types: ['Fire', 'Flying'],
    base_stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    default_moves: ['Fire Blast', 'Wing Attack', 'Dragon Claw', 'Protect']
  },
  'Squirtle': {
    name: 'Squirtle',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 },
    default_moves: ['Water Gun', 'Withdraw', 'Bite', 'Rapid Spin']
  },
  'Wartortle': {
    name: 'Wartortle',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58 },
    default_moves: ['Water Pulse', 'Bite', 'Protect', 'Ice Beam']
  },
  'Blastoise': {
    name: 'Blastoise',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
    default_moves: ['Hydro Pump', 'Ice Beam', 'Surf', 'Protect']
  },
  'Caterpie': {
    name: 'Caterpie',
    gen: 1,
    types: ['Bug'],
    base_stats: { hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45 },
    default_moves: ['Tackle', 'Growl', 'Double Team', 'Protect']
  },
  'Metapod': {
    name: 'Metapod',
    gen: 1,
    types: ['Bug'],
    base_stats: { hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30 },
    default_moves: ['Tackle', 'Protect', 'Double Team', 'Scary Face']
  },
  'Butterfree': {
    name: 'Butterfree',
    gen: 1,
    types: ['Bug', 'Flying'],
    base_stats: { hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70 },
    default_moves: ['Sleep Powder', 'Psychic', 'Wing Attack', 'Protect']
  },
  'Weedle': {
    name: 'Weedle',
    gen: 1,
    types: ['Bug', 'Poison'],
    base_stats: { hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50 },
    default_moves: ['Tackle', 'Poison Powder', 'Leer', 'Double Team']
  },
  'Kakuna': {
    name: 'Kakuna',
    gen: 1,
    types: ['Bug', 'Poison'],
    base_stats: { hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35 },
    default_moves: ['Tackle', 'Protect', 'Poison Powder', 'Scary Face']
  },
  'Beedrill': {
    name: 'Beedrill',
    gen: 1,
    types: ['Bug', 'Poison'],
    base_stats: { hp: 65, atk: 90, def: 40, spa: 45, spd: 80, spe: 75 },
    default_moves: ['Slash', 'Sludge Bomb', 'Double Team', 'Wing Attack']
  },
  'Pidgey': {
    name: 'Pidgey',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56 },
    default_moves: ['Quick Attack', 'Wing Attack', 'Leer', 'Double Team']
  },
  'Pidgeotto': {
    name: 'Pidgeotto',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71 },
    default_moves: ['Wing Attack', 'Quick Attack', 'Scary Face', 'Steel Wing']
  },
  'Pidgeot': {
    name: 'Pidgeot',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 101 },
    default_moves: ['Drill Peck', 'Body Slam', 'Steel Wing', 'Double Team']
  },
  'Rattata': {
    name: 'Rattata',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72 },
    default_moves: ['Quick Attack', 'Bite', 'Tail Whip', 'Leer']
  },
  'Raticate': {
    name: 'Raticate',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97 },
    default_moves: ['Slash', 'Crunch', 'Protect', 'Quick Attack']
  },
  'Spearow': {
    name: 'Spearow',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70 },
    default_moves: ['Drill Peck', 'Quick Attack', 'Leer', 'Double Team']
  },
  'Fearow': {
    name: 'Fearow',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100 },
    default_moves: ['Drill Peck', 'Slash', 'Steel Wing', 'Scary Face']
  },
  'Ekans': {
    name: 'Ekans',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55 },
    default_moves: ['Bite', 'Sludge Bomb', 'Leer', 'Toxic']
  },
  'Arbok': {
    name: 'Arbok',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 60, atk: 95, def: 69, spa: 65, spd: 79, spe: 80 },
    default_moves: ['Crunch', 'Sludge Bomb', 'Scary Face', 'Protect']
  },
  'Pikachu': {
    name: 'Pikachu',
    gen: 1,
    types: ['Electric'],
    base_stats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
    default_moves: ['Thunderbolt', 'Quick Attack', 'Thunder Wave', 'Double Team']
  },
  'Raichu': {
    name: 'Raichu',
    gen: 1,
    types: ['Electric'],
    base_stats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110 },
    default_moves: ['Thunder', 'Body Slam', 'Thunder Wave', 'Protect']
  },
  'Sandshrew': {
    name: 'Sandshrew',
    gen: 1,
    types: ['Ground'],
    base_stats: { hp: 50, atk: 75, def: 85, spa: 20, spd: 30, spe: 40 },
    default_moves: ['Slash', 'Earthquake', 'Double Team', 'Protect']
  },
  'Sandslash': {
    name: 'Sandslash',
    gen: 1,
    types: ['Ground'],
    base_stats: { hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65 },
    default_moves: ['Earthquake', 'Rock Slide', 'Slash', 'Protect']
  },
  'Nidorano': {
    name: 'Nidorano',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41 },
    default_moves: ['Poison Powder', 'Double Team', 'Tackle', 'Toxic']
  },
  'Nidorina': {
    name: 'Nidorina',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56 },
    default_moves: ['Sludge Bomb', 'Bite', 'Scary Face', 'Protect']
  },
  'Nidoqueen': {
    name: 'Nidoqueen',
    gen: 1,
    types: ['Poison', 'Ground'],
    base_stats: { hp: 90, atk: 92, def: 87, spa: 75, spd: 85, spe: 76 },
    default_moves: ['Earthquake', 'Sludge Bomb', 'Ice Beam', 'Protect']
  },
  'Nidoran♂': {
    name: 'Nidoran♂',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50 },
    default_moves: ['Poison Powder', 'Leer', 'Tackle', 'Double Team']
  },
  'Nidorino': {
    name: 'Nidorino',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65 },
    default_moves: ['Sludge Bomb', 'Bite', 'Scary Face', 'Protect']
  },
  'Nidoking': {
    name: 'Nidoking',
    gen: 1,
    types: ['Poison', 'Ground'],
    base_stats: { hp: 81, atk: 102, def: 77, spa: 85, spd: 75, spe: 85 },
    default_moves: ['Earthquake', 'Sludge Bomb', 'Thunderbolt', 'Rock Slide']
  },
  'Clefairy': {
    name: 'Clefairy',
    gen: 1,
    types: ['Fairy'],
    base_stats: { hp: 70, atk: 45, def: 48, spa: 60, spd: 65, spe: 35 },
    default_moves: ['Body Slam', 'Psychic', 'Double Team', 'Protect']
  },
  'Clefable': {
    name: 'Clefable',
    gen: 1,
    types: ['Fairy'],
    base_stats: { hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60 },
    default_moves: ['Psychic', 'Thunderbolt', 'Ice Beam', 'Protect']
  },
  'Vulpix': {
    name: 'Vulpix',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65 },
    default_moves: ['Ember', 'Quick Attack', 'Double Team', 'Toxic']
  },
  'Ninetales': {
    name: 'Ninetales',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100 },
    default_moves: ['Flamethrower', 'Fire Blast', 'Quick Attack', 'Protect']
  },
  'Jigglypuff': {
    name: 'Jigglypuff',
    gen: 1,
    types: ['Normal', 'Fairy'],
    base_stats: { hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20 },
    default_moves: ['Body Slam', 'Double Team', 'Growl', 'Protect']
  },
  'Wigglytuff': {
    name: 'Wigglytuff',
    gen: 1,
    types: ['Normal', 'Fairy'],
    base_stats: { hp: 140, atk: 70, def: 45, spa: 85, spd: 50, spe: 45 },
    default_moves: ['Body Slam', 'Ice Beam', 'Thunderbolt', 'Protect']
  },
  'Zubat': {
    name: 'Zubat',
    gen: 1,
    types: ['Poison', 'Flying'],
    base_stats: { hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55 },
    default_moves: ['Wing Attack', 'Bite', 'Double Team', 'Toxic']
  },
  'Golbat': {
    name: 'Golbat',
    gen: 1,
    types: ['Poison', 'Flying'],
    base_stats: { hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90 },
    default_moves: ['Wing Attack', 'Crunch', 'Sludge Bomb', 'Protect']
  },
  'Oddish': {
    name: 'Oddish',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30 },
    default_moves: ['Razor Leaf', 'Sleep Powder', 'Leech Seed', 'Poison Powder']
  },
  'Gloom': {
    name: 'Gloom',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40 },
    default_moves: ['Sludge Bomb', 'Petal Dance', 'Sleep Powder', 'Leech Seed']
  },
  'Vileplume': {
    name: 'Vileplume',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 75, atk: 80, def: 85, spa: 110, spd: 90, spe: 50 },
    default_moves: ['Leaf Blade', 'Sludge Bomb', 'Sleep Powder', 'Toxic']
  },
  'Paras': {
    name: 'Paras',
    gen: 1,
    types: ['Bug', 'Grass'],
    base_stats: { hp: 35, atk: 70, def: 55, spa: 45, spd: 55, spe: 25 },
    default_moves: ['Vine Whip', 'Poison Powder', 'Leech Seed', 'Scratch']
  },
  'Parasect': {
    name: 'Parasect',
    gen: 1,
    types: ['Bug', 'Grass'],
    base_stats: { hp: 60, atk: 95, def: 80, spa: 60, spd: 80, spe: 30 },
    default_moves: ['Leaf Blade', 'Sludge Bomb', 'Sleep Powder', 'Protect']
  },
  'Venonat': {
    name: 'Venonat',
    gen: 1,
    types: ['Bug', 'Poison'],
    base_stats: { hp: 60, atk: 55, def: 50, spa: 40, spd: 55, spe: 45 },
    default_moves: ['Tackle', 'Poison Powder', 'Psychic', 'Double Team']
  },
  'Venomoth': {
    name: 'Venomoth',
    gen: 1,
    types: ['Bug', 'Poison'],
    base_stats: { hp: 70, atk: 65, def: 60, spa: 90, spd: 75, spe: 90 },
    default_moves: ['Psychic', 'Sludge Bomb', 'Sleep Powder', 'Wing Attack']
  },
  'Diglett': {
    name: 'Diglett',
    gen: 1,
    types: ['Ground'],
    base_stats: { hp: 10, atk: 55, def: 25, spa: 35, spd: 45, spe: 95 },
    default_moves: ['Earthquake', 'Rock Slide', 'Quick Attack', 'Protect']
  },
    'Dugtrio': { name: 'Dugtrio', gen: 1, types: ['Ground'], base_stats: { hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120 }, default_moves: ['Earthquake', 'Rock Slide', 'Substitute', 'Toxic'] },
  'Meowth': { name: 'Meowth', gen: 1, types: ['Normal'], base_stats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 }, default_moves: ['Slash', 'Bite', 'Fake Out', 'Double Team'] },
  'Persian': { name: 'Persian', gen: 1, types: ['Normal'], base_stats: { hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115 }, default_moves: ['Hyper Beam', 'Bite', 'Double Team', 'Protect'] },
  'Psyduck': { name: 'Psyduck', gen: 1, types: ['Water'], base_stats: { hp: 50, atk: 52, def: 48, spa: 65, spd: 50, spe: 55 }, default_moves: ['Water Pulse', 'Confusion', 'Disable', 'Protect'] },
  'Golduck': { name: 'Golduck', gen: 1, types: ['Water'], base_stats: { hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85 }, default_moves: ['Surf', 'Ice Beam', 'Psychic', 'Protect'] },
  'Mankey': { name: 'Mankey', gen: 1, types: ['Fighting'], base_stats: { hp: 40, atk: 80, def: 35, spa: 35, spd: 45, spe: 70 }, default_moves: ['Karate Chop', 'Low Kick', 'Seismic Toss', 'Leer'] },
  'Primeape': { name: 'Primeape', gen: 1, types: ['Fighting'], base_stats: { hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95 }, default_moves: ['Cross Chop', 'Rock Slide', 'Focus Energy', 'Protect'] },
  'Growlithe': { name: 'Growlithe', gen: 1, types: ['Fire'], base_stats: { hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60 }, default_moves: ['Flamethrower', 'Bite', 'Agility', 'Roar'] },
  'Arcanine': { name: 'Arcanine', gen: 1, types: ['Fire'], base_stats: { hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95 }, default_moves: ['Fire Blast', 'Extreme Speed', 'Crunch', 'Protect'] },
  'Poliwag': { name: 'Poliwag', gen: 1, types: ['Water'], base_stats: { hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90 }, default_moves: ['Water Gun', 'Hypnosis', 'Body Slam', 'Double Team'] },
  'Poliwhirl': { name: 'Poliwhirl', gen: 1, types: ['Water'], base_stats: { hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90 }, default_moves: ['Surf', 'Hypnosis', 'Ice Punch', 'Protect'] },
  'Poliwrath': { name: 'Poliwrath', gen: 1, types: ['Water', 'Fighting'], base_stats: { hp: 90, atk: 95, def: 95, spa: 70, spd: 90, spe: 70 }, default_moves: ['Hydro Pump', 'Dynamic Punch', 'Ice Beam', 'Protect'] },
  'Abra': { name: 'Abra', gen: 1, types: ['Psychic'], base_stats: { hp: 25, atk: 20, def: 15, spa: 105, spd: 55, spe: 90 }, default_moves: ['Psychic', 'Teleport', 'Reflect', 'Substitute'] },
  'Kadabra': { name: 'Kadabra', gen: 1, types: ['Psychic'], base_stats: { hp: 40, atk: 35, def: 30, spa: 120, spd: 70, spe: 105 }, default_moves: ['Psychic', 'Recover', 'Reflect', 'Thunder Wave'] },
  'Alakazam': { name: 'Alakazam', gen: 1, types: ['Psychic'], base_stats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120 }, default_moves: ['Psychic', 'Calm Mind', 'Focus Blast', 'Protect'] },
  'Machop': { name: 'Machop', gen: 1, types: ['Fighting'], base_stats: { hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35 }, default_moves: ['Karate Chop', 'Low Sweep', 'Bulk Up', 'Protect'] },
  'Machoke': { name: 'Machoke', gen: 1, types: ['Fighting'], base_stats: { hp: 80, atk: 100, def: 70, spa: 50, spd: 60, spe: 45 }, default_moves: ['Cross Chop', 'Rock Slide', 'Bulk Up', 'Protect'] },
  'Machamp': { name: 'Machamp', gen: 1, types: ['Fighting'], base_stats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 }, default_moves: ['Dynamic Punch', 'Stone Edge', 'Bulk Up', 'Protect'] },
  'Bellsprout': { name: 'Bellsprout', gen: 1, types: ['Grass', 'Poison'], base_stats: { hp: 50, atk: 75, def: 35, spa: 70, spd: 30, spe: 40 }, default_moves: ['Vine Whip', 'Poison Powder', 'Sleep Powder', 'Growth'] },
  'Weepinbell': { name: 'Weepinbell', gen: 1, types: ['Grass', 'Poison'], base_stats: { hp: 65, atk: 90, def: 50, spa: 85, spd: 45, spe: 55 }, default_moves: ['Razor Leaf', 'Stun Spore', 'Sludge Bomb', 'Growth'] },
  'Victreebel': { name: 'Victreebel', gen: 1, types: ['Grass', 'Poison'], base_stats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 60, spe: 70 }, default_moves: ['Leaf Blade', 'Sludge Bomb', 'Sleep Powder', 'Swords Dance'] },
  'Tentacool': { name: 'Tentacool', gen: 1, types: ['Water', 'Poison'], base_stats: { hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70 }, default_moves: ['Surf', 'Toxic', 'Barrier', 'Protect'] },
  'Tentacruel': { name: 'Tentacruel', gen: 1, types: ['Water', 'Poison'], base_stats: { hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100 }, default_moves: ['Hydro Pump', 'Sludge Bomb', 'Ice Beam', 'Protect'] },
  'Geodude': { name: 'Geodude', gen: 1, types: ['Rock', 'Ground'], base_stats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 }, default_moves: ['Rock Throw', 'Earthquake', 'Explosion', 'Defense Curl'] },
  'Graveler': { name: 'Graveler', gen: 1, types: ['Rock', 'Ground'], base_stats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 }, default_moves: ['Rock Slide', 'Earthquake', 'Explosion', 'Substitute'] },
  'Golem': { name: 'Golem', gen: 1, types: ['Rock', 'Ground'], base_stats: { hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45 }, default_moves: ['Stone Edge', 'Earthquake', 'Explosion', 'Protect'] },
  'Ponyta': { name: 'Ponyta', gen: 1, types: ['Fire'], base_stats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 }, default_moves: ['Flame Wheel', 'Stomp', 'Agility', 'Protect'] },
  'Rapidash': { name: 'Rapidash', gen: 1, types: ['Fire'], base_stats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 }, default_moves: ['Fire Blast', 'Megahorn', 'Agility', 'Protect'] },
  'Slowpoke': { name: 'Slowpoke', gen: 1, types: ['Water', 'Psychic'], base_stats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 }, default_moves: ['Surf', 'Psychic', 'Amnesia', 'Yawn'] },
  'Slowbro': { name: 'Slowbro', gen: 1, types: ['Water', 'Psychic'], base_stats: { hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30 }, default_moves: ['Surf', 'Psychic', 'Calm Mind', 'Slack Off'] },
  'Magnemite': { name: 'Magnemite', gen: 1, types: ['Electric', 'Steel'], base_stats: { hp: 25, atk: 35, def: 70, spa: 95, spd: 55, spe: 45 }, default_moves: ['Thunderbolt', 'Flash Cannon', 'Thunder Wave', 'Protect'] },
  'Magneton': { name: 'Magneton', gen: 1, types: ['Electric', 'Steel'], base_stats: { hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 70 }, default_moves: ['Thunderbolt', 'Flash Cannon', 'Tri Attack', 'Protect'] },
  'Farfetchd': { name: 'Farfetchd', gen: 1, types: ['Normal', 'Flying'], base_stats: { hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60 }, default_moves: ['Slash', 'Brave Bird', 'Swords Dance', 'Knock Off'] },
  'Doduo': { name: 'Doduo', gen: 1, types: ['Normal', 'Flying'], base_stats: { hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75 }, default_moves: ['Drill Peck', 'Quick Attack', 'Agility', 'Protect'] },
  'Dodrio': { name: 'Dodrio', gen: 1, types: ['Normal', 'Flying'], base_stats: { hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 100 }, default_moves: ['Drill Peck', 'Double-Edge', 'Agility', 'Protect'] },
  'Seel': { name: 'Seel', gen: 1, types: ['Water'], base_stats: { hp: 65, atk: 45, def: 55, spa: 45, spd: 70, spe: 45 }, default_moves: ['Surf', 'Ice Shard', 'Encore', 'Protect'] },
  'Dewgong': { name: 'Dewgong', gen: 1, types: ['Water', 'Ice'], base_stats: { hp: 90, atk: 70, def: 80, spa: 70, spd: 95, spe: 70 }, default_moves: ['Surf', 'Ice Beam', 'Encore', 'Protect'] },
  'Grimer': { name: 'Grimer', gen: 1, types: ['Poison'], base_stats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25 }, default_moves: ['Sludge Bomb', 'Minimize', 'Shadow Punch', 'Protect'] },
  'Muk': { name: 'Muk', gen: 1, types: ['Poison'], base_stats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50 }, default_moves: ['Sludge Bomb', 'Shadow Punch', 'Curse', 'Protect'] },
  'Shellder': { name: 'Shellder', gen: 1, types: ['Water'], base_stats: { hp: 30, atk: 65, def: 100, spa: 45, spd: 25, spe: 40 }, default_moves: ['Surf', 'Ice Shard', 'Clamp', 'Protect'] },
  'Cloyster': { name: 'Cloyster', gen: 1, types: ['Water', 'Ice'], base_stats: { hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70 }, default_moves: ['Surf', 'Ice Beam', 'Explosion', 'Protect'] },
  'Gastly': { name: 'Gastly', gen: 1, types: ['Ghost', 'Poison'], base_stats: { hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80 }, default_moves: ['Shadow Ball', 'Sludge Bomb', 'Hypnosis', 'Protect'] },
  'Haunter': { name: 'Haunter', gen: 1, types: ['Ghost', 'Poison'], base_stats: { hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95 }, default_moves: ['Shadow Ball', 'Sludge Bomb', 'Hypnosis', 'Protect'] },
  'Gengar': { name: 'Gengar', gen: 1, types: ['Ghost', 'Poison'], base_stats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 }, default_moves: ['Shadow Ball', 'Sludge Bomb', 'Focus Blast', 'Protect'] },
  'Onix': { name: 'Onix', gen: 1, types: ['Rock', 'Ground'], base_stats: { hp: 35, atk: 45, def: 160, spa: 30, spd: 45, spe: 70 }, default_moves: ['Rock Slide', 'Earthquake', 'Explosion', 'Protect'] },
  'Drowzee': { name: 'Drowzee', gen: 1, types: ['Psychic'], base_stats: { hp: 60, atk: 48, def: 45, spa: 43, spd: 90, spe: 42 }, default_moves: ['Psychic', 'Hypnosis', 'Disable', 'Protect'] },
  'Hypno': { name: 'Hypno', gen: 1, types: ['Psychic'], base_stats: { hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67 }, default_moves: ['Psychic', 'Hypnosis', 'Calm Mind', 'Protect'] },
  'Krabby': { name: 'Krabby', gen: 1, types: ['Water'], base_stats: { hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50 }, default_moves: ['Crabhammer', 'Rock Slide', 'Agility', 'Protect'] },
  'Kingler': { name: 'Kingler', gen: 1, types: ['Water'], base_stats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 }, default_moves: ['Crabhammer', 'Rock Slide', 'Swords Dance', 'Protect'] },
  'Voltorb': { name: 'Voltorb', gen: 1, types: ['Electric'], base_stats: { hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100 }, default_moves: ['Thunderbolt', 'Thunder', 'Double Team', 'Protect'] },
   'Electrode': { name: 'Electrode', gen: 1, types: ['Electric'], base_stats: { hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150 }, default_moves: ['Thunderbolt', 'Explosion', 'Light Screen', 'Protect'] },
  'Exeggcute': { name: 'Exeggcute', gen: 1, types: ['Grass', 'Psychic'], base_stats: { hp: 60, atk: 40, def: 80, spa: 60, spd: 45, spe: 40 }, default_moves: ['Psychic', 'Leech Seed', 'Sleep Powder', 'Explosion'] },
  'Exeggutor': { name: 'Exeggutor', gen: 1, types: ['Grass', 'Psychic'], base_stats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 75, spe: 55 }, default_moves: ['Psychic', 'Solar Beam', 'Sleep Powder', 'Explosion'] },
  'Cubone': { name: 'Cubone', gen: 1, types: ['Ground'], base_stats: { hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35 }, default_moves: ['Bone Club', 'Earthquake', 'Double-Edge', 'Protect'] },
  'Marowak': { name: 'Marowak', gen: 1, types: ['Ground'], base_stats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 }, default_moves: ['Bonemerang', 'Earthquake', 'Rock Slide', 'Protect'] },
  'Hitmonlee': { name: 'Hitmonlee', gen: 1, types: ['Fighting'], base_stats: { hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87 }, default_moves: ['High Jump Kick', 'Body Slam', 'Counter', 'Protect'] },
  'Hitmonchan': { name: 'Hitmonchan', gen: 1, types: ['Fighting'], base_stats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 }, default_moves: ['Sky Uppercut', 'Fire Punch', 'Ice Punch', 'Thunder Punch'] },
  'Lickitung': { name: 'Lickitung', gen: 1, types: ['Normal'], base_stats: { hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30 }, default_moves: ['Body Slam', 'Swords Dance', 'Earthquake', 'Protect'] },
  'Koffing': { name: 'Koffing', gen: 1, types: ['Poison'], base_stats: { hp: 40, atk: 65, def: 95, spa: 60, spd: 45, spe: 35 }, default_moves: ['Sludge Bomb', 'Explosion', 'Haze', 'Protect'] },
  'Weezing': { name: 'Weezing', gen: 1, types: ['Poison'], base_stats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 }, default_moves: ['Sludge Bomb', 'Explosion', 'Will-O-Wisp', 'Protect'] },
  'Rhyhorn': { name: 'Rhyhorn', gen: 1, types: ['Ground', 'Rock'], base_stats: { hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25 }, default_moves: ['Earthquake', 'Rock Blast', 'Horn Attack', 'Protect'] },
  'Rhydon': { name: 'Rhydon', gen: 1, types: ['Ground', 'Rock'], base_stats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 }, default_moves: ['Earthquake', 'Stone Edge', 'Megahorn', 'Protect'] },
  'Chansey': { name: 'Chansey', gen: 1, types: ['Normal'], base_stats: { hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50 }, default_moves: ['Soft-Boiled', 'Thunder Wave', 'Seismic Toss', 'Protect'] },
  'Tangela': { name: 'Tangela', gen: 1, types: ['Grass'], base_stats: { hp: 65, atk: 55, def: 115, spa: 100, spd: 40, spe: 60 }, default_moves: ['Giga Drain', 'Stun Spore', 'Sleep Powder', 'Protect'] },
  'Kangaskhan': { name: 'Kangaskhan', gen: 1, types: ['Normal'], base_stats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90 }, default_moves: ['Body Slam', 'Earthquake', 'Substitute', 'Protect'] },
  'Horsea': { name: 'Horsea', gen: 1, types: ['Water'], base_stats: { hp: 30, atk: 40, def: 70, spa: 70, spd: 25, spe: 60 }, default_moves: ['Surf', 'Smokescreen', 'Ice Beam', 'Protect'] },
  'Seadra': { name: 'Seadra', gen: 1, types: ['Water'], base_stats: { hp: 55, atk: 65, def: 95, spa: 95, spd: 45, spe: 85 }, default_moves: ['Surf', 'Ice Beam', 'Agility', 'Protect'] },
  'Goldeen': { name: 'Goldeen', gen: 1, types: ['Water'], base_stats: { hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63 }, default_moves: ['Waterfall', 'Horn Drill', 'Agility', 'Protect'] },
  'Seaking': { name: 'Seaking', gen: 1, types: ['Water'], base_stats: { hp: 80, atk: 92, def: 65, spa: 65, spd: 80, spe: 68 }, default_moves: ['Waterfall', 'Megahorn', 'Ice Beam', 'Protect'] },
  'Staryu': { name: 'Staryu', gen: 1, types: ['Water'], base_stats: { hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85 }, default_moves: ['Surf', 'Thunderbolt', 'Recover', 'Protect'] },
  'Starmie': { name: 'Starmie', gen: 1, types: ['Water', 'Psychic'], base_stats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115 }, default_moves: ['Surf', 'Psychic', 'Thunderbolt', 'Recover'] },
  'Mr. Mime': { name: 'Mr. Mime', gen: 1, types: ['Psychic', 'Fairy'], base_stats: { hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90 }, default_moves: ['Psychic', 'Barrier', 'Thunder Wave', 'Protect'] },
  'Scyther': { name: 'Scyther', gen: 1, types: ['Bug', 'Flying'], base_stats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105 }, default_moves: ['Slash', 'Wing Attack', 'Swords Dance', 'Protect'] },
  'Jynx': { name: 'Jynx', gen: 1, types: ['Ice', 'Psychic'], base_stats: { hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95 }, default_moves: ['Ice Beam', 'Psychic', 'Lovely Kiss', 'Protect'] },
  'Electabuzz': { name: 'Electabuzz', gen: 1, types: ['Electric'], base_stats: { hp: 65, atk: 83, def: 57, spa: 95, spd: 85, spe: 105 }, default_moves: ['Thunderbolt', 'Thunder Punch', 'Light Screen', 'Protect'] },
  'Magmar': { name: 'Magmar', gen: 1, types: ['Fire'], base_stats: { hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93 }, default_moves: ['Flamethrower', 'Fire Punch', 'Smokescreen', 'Protect'] },
  'Pinsir': { name: 'Pinsir', gen: 1, types: ['Bug'], base_stats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85 }, default_moves: ['X-Scissor', 'Submission', 'Swords Dance', 'Protect'] },
  'Tauros': { name: 'Tauros', gen: 1, types: ['Normal'], base_stats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 }, default_moves: ['Body Slam', 'Earthquake', 'Hyper Beam', 'Protect'] },
  'Magikarp': { name: 'Magikarp', gen: 1, types: ['Water'], base_stats: { hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80 }, default_moves: ['Splash', 'Tackle', 'Flail', 'Protect'] },
  'Gyarados': { name: 'Gyarados', gen: 1, types: ['Water', 'Flying'], base_stats: { hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81 }, default_moves: ['Hyper Beam', 'Surf', 'Dragon Dance', 'Protect'] },
  'Lapras': { name: 'Lapras', gen: 1, types: ['Water', 'Ice'], base_stats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 }, default_moves: ['Ice Beam', 'Surf', 'Thunderbolt', 'Protect'] },
  'Ditto': { name: 'Ditto', gen: 1, types: ['Normal'], base_stats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 }, default_moves: ['Transform', 'Protect', 'Double Team', 'Rest'] },
  'Eevee': { name: 'Eevee', gen: 1, types: ['Normal'], base_stats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 }, default_moves: ['Quick Attack', 'Bite', 'Sand Attack', 'Protect'] },
  'Vaporeon': { name: 'Vaporeon', gen: 1, types: ['Water'], base_stats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65 }, default_moves: ['Surf', 'Ice Beam', 'Acid Armor', 'Protect'] },
  'Jolteon': { name: 'Jolteon', gen: 1, types: ['Electric'], base_stats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130 }, default_moves: ['Thunderbolt', 'Double Kick', 'Agility', 'Protect'] },
  'Flareon': { name: 'Flareon', gen: 1, types: ['Fire'], base_stats: { hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65 }, default_moves: ['Flamethrower', 'Quick Attack', 'Body Slam', 'Protect'] },
  'Porygon': { name: 'Porygon', gen: 1, types: ['Normal'], base_stats: { hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40 }, default_moves: ['Tri Attack', 'Psychic', 'Agility', 'Protect'] },
  'Omanyte': { name: 'Omanyte', gen: 1, types: ['Rock', 'Water'], base_stats: { hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35 }, default_moves: ['Surf', 'Ancient Power', 'Ice Beam', 'Protect'] },
  'Omastar': { name: 'Omastar', gen: 1, types: ['Rock', 'Water'], base_stats: { hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55 }, default_moves: ['Surf', 'Ancient Power', 'Earth Power', 'Protect'] },
  'Kabuto': { name: 'Kabuto', gen: 1, types: ['Rock', 'Water'], base_stats: { hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55 }, default_moves: ['Rock Slide', 'Waterfall', 'Leech Life', 'Protect'] },
  'Kabutops': { name: 'Kabutops', gen: 1, types: ['Rock', 'Water'], base_stats: { hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80 }, default_moves: ['Waterfall', 'Stone Edge', 'Swords Dance', 'Protect'] },
  'Aerodactyl': { name: 'Aerodactyl', gen: 1, types: ['Rock', 'Flying'], base_stats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130 }, default_moves: ['Rock Slide', 'Hyper Beam', 'Earthquake', 'Protect'] },
  'Snorlax': { name: 'Snorlax', gen: 1, types: ['Normal'], base_stats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 }, default_moves: ['Body Slam', 'Rest', 'Earthquake', 'Protect'] },
  'Articuno': { name: 'Articuno', gen: 1, types: ['Ice', 'Flying'], base_stats: { hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85 }, default_moves: ['Ice Beam', 'Agility', 'Roost', 'Protect'] },
  'Zapdos': { name: 'Zapdos', gen: 1, types: ['Electric', 'Flying'], base_stats: { hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100 }, default_moves: ['Thunderbolt', 'Drill Peck', 'Agility', 'Protect'] },
  'Moltres': { name: 'Moltres', gen: 1, types: ['Fire', 'Flying'], base_stats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90 }, default_moves: ['Flamethrower', 'Sky Attack', 'Agility', 'Protect'] },
  'Dratini': { name: 'Dratini', gen: 1, types: ['Dragon'], base_stats: { hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50 }, default_moves: ['Dragon Rage', 'Thunder Wave', 'Agility', 'Protect'] },
  'Dragonair': { name: 'Dragonair', gen: 1, types: ['Dragon'], base_stats: { hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70 }, default_moves: ['Dragon Rage', 'Thunder Wave', 'Ice Beam', 'Protect'] },
  'Dragonite': { name: 'Dragonite', gen: 1, types: ['Dragon', 'Flying'], base_stats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 }, default_moves: ['Outrage', 'Earthquake', 'Fire Punch', 'Protect'] },
  'Mewtwo': { name: 'Mewtwo', gen: 1, types: ['Psychic'], base_stats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130 }, default_moves: ['Psychic', 'Ice Beam', 'Thunderbolt', 'Recover'] },
  'Mew': { name: 'Mew', gen: 1, types: ['Psychic'], base_stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 }, default_moves: ['Psychic', 'Earthquake', 'Soft-Boiled', 'Protect'] },

};

export const MOVE_DATA: { [key: string]: Move } = {
'Struggle': { type: 'Normal', category: 'Physical', power: 50, accuracy: 100, priority: 0, stab_applicable: false },
'Acid Armor': { type: 'Poison', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Agility': { type: 'Psychic', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Amnesia': { type: 'Psychic', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Ancient Power': { type: 'Rock', category: 'Special', power: 60, accuracy: 100, priority: 0, stab_applicable: true },
'Barrier': { type: 'Psychic', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Bite': { type: 'Dark', category: 'Physical', power: 60, accuracy: 100, priority: 0, stab_applicable: true },
'Body Slam': { type: 'Normal', category: 'Physical', power: 85, accuracy: 100, priority: 0, stab_applicable: true },
'Bonemerang': { type: 'Ground', category: 'Physical', power: 50, accuracy: 90, priority: 0, stab_applicable: true },
'Bone Club': { type: 'Ground', category: 'Physical', power: 65, accuracy: 85, priority: 0, stab_applicable: true },
'Brave Bird': { type: 'Flying', category: 'Physical', power: 120, accuracy: 100, priority: 0, stab_applicable: true },
'Bulk Up': { type: 'Fighting', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Calm Mind': { type: 'Psychic', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Clamp': { type: 'Water', category: 'Physical', power: 35, accuracy: 85, priority: 0, stab_applicable: true },
'Confusion': { type: 'Psychic', category: 'Special', power: 50, accuracy: 100, priority: 0, stab_applicable: true },
'Confuse Ray': { type: 'Ghost', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Counter': { type: 'Fighting', category: 'Physical', power: 0, accuracy: 100, priority: -5, stab_applicable: false },
'Crabhammer': { type: 'Water', category: 'Physical', power: 100, accuracy: 90, priority: 0, stab_applicable: true },
'Crunch': { type: 'Dark', category: 'Physical', power: 80, accuracy: 100, priority: 0, stab_applicable: true },
'Curse': { type: 'Ghost', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Defense Curl': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Disable': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Double-Edge': { type: 'Normal', category: 'Physical', power: 120, accuracy: 100, priority: 0, stab_applicable: true },
'Double Team': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Dragon Dance': { type: 'Dragon', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Drill Peck': { type: 'Flying', category: 'Physical', power: 80, accuracy: 100, priority: 0, stab_applicable: true },
'Dream Eater': { type: 'Psychic', category: 'Special', power: 100, accuracy: 100, priority: 0, stab_applicable: true },
'Ember': { type: 'Fire', category: 'Special', power: 40, accuracy: 100, priority: 0, stab_applicable: true },
'Encore': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Explosion': { type: 'Normal', category: 'Physical', power: 250, accuracy: 100, priority: 0, stab_applicable: true },
'Extreme Speed': { type: 'Normal', category: 'Physical', power: 80, accuracy: 100, priority: 2, stab_applicable: true },
'Flash': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Flash Cannon': { type: 'Steel', category: 'Special', power: 80, accuracy: 100, priority: 0, stab_applicable: true },
'Flame Wheel': { type: 'Fire', category: 'Physical', power: 60, accuracy: 100, priority: 0, stab_applicable: true },
'Focus Blast': { type: 'Fighting', category: 'Special', power: 120, accuracy: 70, priority: 0, stab_applicable: true },
'Focus Energy': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Focus Punch': { type: 'Fighting', category: 'Physical', power: 150, accuracy: 100, priority: -3, stab_applicable: true },
'Giga Drain': { type: 'Grass', category: 'Special', power: 75, accuracy: 100, priority: 0, stab_applicable: true },
'Growl': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Harden': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Haze': { type: 'Ice', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Hypnosis': { type: 'Psychic', category: 'Status', power: 0, accuracy: 60, priority: 0, stab_applicable: false },
'Ice Beam': { type: 'Ice', category: 'Special', power: 90, accuracy: 100, priority: 0, stab_applicable: true },
'Ice Punch': { type: 'Ice', category: 'Physical', power: 75, accuracy: 100, priority: 0, stab_applicable: true },
'Ice Shard': { type: 'Ice', category: 'Physical', power: 40, accuracy: 100, priority: 1, stab_applicable: true },
'Karate Chop': { type: 'Fighting', category: 'Physical', power: 50, accuracy: 100, priority: 0, stab_applicable: true },
'Knock Off': { type: 'Dark', category: 'Physical', power: 65, accuracy: 100, priority: 0, stab_applicable: true },
'Leech Life': { type: 'Bug', category: 'Physical', power: 80, accuracy: 100, priority: 0, stab_applicable: true },
'Leech Seed': { type: 'Grass', category: 'Status', power: 0, accuracy: 90, priority: 0, stab_applicable: false },
'Light Screen': { type: 'Psychic', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Lovely Kiss': { type: 'Normal', category: 'Status', power: 0, accuracy: 75, priority: 0, stab_applicable: false },
'Low Kick': { type: 'Fighting', category: 'Physical', power: 50, accuracy: 100, priority: 0, stab_applicable: true },
'Low Sweep': { type: 'Fighting', category: 'Physical', power: 65, accuracy: 100, priority: 0, stab_applicable: true },
'Megahorn': { type: 'Bug', category: 'Physical', power: 120, accuracy: 85, priority: 0, stab_applicable: true },
'Minimize': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Night Shade': { type: 'Ghost', category: 'Special', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Outrage': { type: 'Dragon', category: 'Physical', power: 120, accuracy: 100, priority: 0, stab_applicable: true },
'Protect': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 4, stab_applicable: false },
'Psychic': { type: 'Psychic', category: 'Special', power: 90, accuracy: 100, priority: 0, stab_applicable: true },
'Quick Attack': { type: 'Normal', category: 'Physical', power: 40, accuracy: 100, priority: 1, stab_applicable: true },
'Recover': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Rest': { type: 'Psychic', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Rock Blast': { type: 'Rock', category: 'Physical', power: 25, accuracy: 90, priority: 0, stab_applicable: true },
'Rock Slide': { type: 'Rock', category: 'Physical', power: 75, accuracy: 90, priority: 0, stab_applicable: true },
'Rock Throw': { type: 'Rock', category: 'Physical', power: 50, accuracy: 90, priority: 0, stab_applicable: true },
'Roar': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: -6, stab_applicable: false },
'Roost': { type: 'Flying', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Sand Attack': { type: 'Ground', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Scratch': { type: 'Normal', category: 'Physical', power: 40, accuracy: 100, priority: 0, stab_applicable: true },
'Seismic Toss': { type: 'Fighting', category: 'Physical', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Shadow Ball': { type: 'Ghost', category: 'Special', power: 80, accuracy: 100, priority: 0, stab_applicable: true },
'Shadow Punch': { type: 'Ghost', category: 'Physical', power: 60, accuracy: 100, priority: 0, stab_applicable: true },
'Slack Off': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Sludge Bomb': { type: 'Poison', category: 'Special', power: 90, accuracy: 100, priority: 0, stab_applicable: true },
'Soft-Boiled': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Splash': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Stomp': { type: 'Normal', category: 'Physical', power: 65, accuracy: 100, priority: 0, stab_applicable: true },
'Stone Edge': { type: 'Rock', category: 'Physical', power: 100, accuracy: 80, priority: 0, stab_applicable: true },
'Swords Dance': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Submission': { type: 'Fighting', category: 'Physical', power: 80, accuracy: 80, priority: 0, stab_applicable: true },
'Substitute': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Surf': { type: 'Water', category: 'Special', power: 90, accuracy: 100, priority: 0, stab_applicable: true },
'Thunder': { type: 'Electric', category: 'Special', power: 110, accuracy: 70, priority: 0, stab_applicable: true },
'Thunder Wave': { type: 'Electric', category: 'Status', power: 0, accuracy: 90, priority: 0, stab_applicable: false },
'Thunderbolt': { type: 'Electric', category: 'Special', power: 90, accuracy: 100, priority: 0, stab_applicable: true },
'Thunder Punch': { type: 'Electric', category: 'Physical', power: 75, accuracy: 100, priority: 0, stab_applicable: true },
'Tri Attack': { type: 'Normal', category: 'Special', power: 80, accuracy: 100, priority: 0, stab_applicable: true },
'Teleport': { type: 'Psychic', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Wing Attack': { type: 'Flying', category: 'Physical', power: 60, accuracy: 100, priority: 0, stab_applicable: true },
'X-Scissor': { type: 'Bug', category: 'Physical', power: 80, accuracy: 100, priority: 0, stab_applicable: true },
'Yawn': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Earth Power': { type: 'Ground', category: 'Special', power: 90, accuracy: 100, priority: 0, stab_applicable: true },
'Steel Wing': { type: 'Steel', category: 'Physical', power: 70, accuracy: 90, priority: 0, stab_applicable: true },
'Tail Whip': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Water Gun': { type: 'Water', category: 'Special', power: 40, accuracy: 100, priority: 0, stab_applicable: true },
'Sleep Powder': { type: 'Grass', category: 'Status', power: 0, accuracy: 75, priority: 0, stab_applicable: false },
'Solar Beam': { type: 'Grass', category: 'Special', power: 120, accuracy: 100, priority: 0, stab_applicable: true },
'Earthquake': { type: 'Ground', category: 'Physical', power: 100, accuracy: 100, priority: 0, stab_applicable: true },
'High Jump Kick': { type: 'Fighting', category: 'Physical', power: 130, accuracy: 90, priority: 0, stab_applicable: true },
'Sky Uppercut': { type: 'Fighting', category: 'Physical', power: 85, accuracy: 90, priority: 0, stab_applicable: true },
'Fire Punch': { type: 'Fire', category: 'Physical', power: 75, accuracy: 100, priority: 0, stab_applicable: true },
'Will-O-Wisp': { type: 'Fire', category: 'Status', power: 0, accuracy: 85, priority: 0, stab_applicable: false },
'Stun Spore': { type: 'Grass', category: 'Status', power: 0, accuracy: 75, priority: 0, stab_applicable: false },
'Waterfall': { type: 'Water', category: 'Physical', power: 80, accuracy: 100, priority: 0, stab_applicable: true },
'Transform': { type: 'Normal', category: 'Status', power: 0, accuracy: 100, priority: 0, stab_applicable: false },
'Hydro Pump': { type: 'Water', category: 'Special', power: 110, accuracy: 80, priority: 0, stab_applicable: true },
'Hyper Beam': { type: 'Normal', category: 'Special', power: 150, accuracy: 90, priority: 0, stab_applicable: true },
'Flail': { type: 'Normal', category: 'Physical', power: 0, accuracy: 100, priority: 0, stab_applicable: true },
'Sky Attack': { type: 'Flying', category: 'Physical', power: 140, accuracy: 90, priority: 0, stab_applicable: true },
'Horn Attack': { type: 'Normal', category: 'Physical', power: 65, accuracy: 100, priority: 0, stab_applicable: true },
'Horn Drill': { type: 'Normal', category: 'Physical', power: 0, accuracy: 30, priority: 0, stab_applicable: false }
};

export const TYPE_CHART: { [key: string]: { [key: string]: number } } = {
  Normal: { Rock: 0.5, Ghost: 0, Steel: 0.5 },
  Fire: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 2, Bug: 2, Rock: 0.5, Dragon: 0.5, Steel: 2 },
  Water: { Fire: 2, Water: 0.5, Grass: 0.5, Ground: 2, Rock: 2, Dragon: 0.5 },
  Electric: { Water: 2, Electric: 0.5, Grass: 0.5, Ground: 0, Flying: 2, Dragon: 0.5 },
  Grass: { Fire: 0.5, Water: 2, Grass: 0.5, Poison: 0.5, Flying: 0.5, Bug: 0.5, Rock: 2, Ground: 2, Dragon: 0.5, Steel: 0.5 },
  Ice: { Fire: 0.5, Water: 0.5, Grass: 2, Ice: 0.5, Flying: 2, Ground: 2, Dragon: 2, Steel: 0.5 },
  Fighting: { Normal: 2, Ice: 2, Poison: 0.5, Flying: 0.5, Psychic: 0.5, Bug: 0.5, Rock: 2, Ghost: 0, Dark: 2, Steel: 2, Fairy: 0.5 },
  Poison: { Grass: 2, Poison: 0.5, Ground: 0.5, Rock: 0.5, Ghost: 0.5, Steel: 0, Fairy: 2 },
  Ground: { Fire: 2, Electric: 2, Grass: 0.5, Poison: 2, Flying: 0, Bug: 0.5, Rock: 2, Steel: 2 },
  Flying: { Electric: 0.5, Grass: 2, Ice: 0.5, Fighting: 2, Bug: 2, Rock: 0.5, Steel: 0.5 },
  Psychic: { Fighting: 2, Poison: 2, Psychic: 0.5, Dark: 0, Steel: 0.5 },
  Bug: { Fire: 0.5, Grass: 2, Fighting: 0.5, Poison: 0.5, Flying: 0.5, Psychic: 2, Ghost: 0.5, Dark: 2, Steel: 0.5, Fairy: 0.5 },
  Rock: { Fire: 2, Ice: 2, Fighting: 0.5, Ground: 0.5, Flying: 2, Bug: 2, Steel: 0.5 },
  Ghost: { Normal: 0, Psychic: 2, Ghost: 2, Dark: 0.5 },
  Dragon: { Dragon: 2, Steel: 0.5, Fairy: 0 },
  Dark: { Fighting: 0.5, Psychic: 2, Ghost: 2, Dark: 0.5, Fairy: 0.5 },
  Steel: { Fire: 0.5, Water: 0.5, Electric: 0.5, Ice: 2, Rock: 2, Steel: 0.5, Fairy: 2 },
  Fairy: { Fire: 0.5, Fighting: 2, Poison: 0.5, Dragon: 2, Dark: 2, Steel: 0.5 }
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
