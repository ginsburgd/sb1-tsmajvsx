import { Pokemon, Move } from "../types/league";

export const POKEMON_DATA: { [key: string]: Pokemon } = {
  'Bulbasaur': {
    name: 'Bulbasaur',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Ivysaur': {
    name: 'Ivysaur',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Venusaur': {
    name: 'Venusaur',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Charmander': {
    name: 'Charmander',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Charmeleon': {
    name: 'Charmeleon',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Charizard': {
    name: 'Charizard',
    gen: 1,
    types: ['Fire', 'Flying'],
    base_stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Squirtle': {
    name: 'Squirtle',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Wartortle': {
    name: 'Wartortle',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Blastoise': {
    name: 'Blastoise',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Caterpie': {
    name: 'Caterpie',
    gen: 1,
    types: ['Bug'],
    base_stats: { hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Metapod': {
    name: 'Metapod',
    gen: 1,
    types: ['Bug'],
    base_stats: { hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Butterfree': {
    name: 'Butterfree',
    gen: 1,
    types: ['Bug', 'Flying'],
    base_stats: { hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Weedle': {
    name: 'Weedle',
    gen: 1,
    types: ['Bug', 'Poison'],
    base_stats: { hp: 40, atk: 35, def: 30, spa: 20, spd: 20, spe: 50 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Kakuna': {
    name: 'Kakuna',
    gen: 1,
    types: ['Bug', 'Poison'],
    base_stats: { hp: 45, atk: 25, def: 50, spa: 25, spd: 25, spe: 35 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Beedrill': {
    name: 'Beedrill',
    gen: 1,
    types: ['Bug', 'Poison'],
    base_stats: { hp: 65, atk: 90, def: 40, spa: 45, spd: 80, spe: 75 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Pidgey': {
    name: 'Pidgey',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 40, atk: 45, def: 40, spa: 35, spd: 35, spe: 56 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Pidgeotto': {
    name: 'Pidgeotto',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 63, atk: 60, def: 55, spa: 50, spd: 50, spe: 71 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Pidgeot': {
    name: 'Pidgeot',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 101 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Rattata': {
    name: 'Rattata',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Raticate': {
    name: 'Raticate',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Spearow': {
    name: 'Spearow',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 40, atk: 60, def: 30, spa: 31, spd: 31, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Fearow': {
    name: 'Fearow',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 65, atk: 90, def: 65, spa: 61, spd: 61, spe: 100 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Ekans': {
    name: 'Ekans',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 35, atk: 60, def: 44, spa: 40, spd: 54, spe: 55 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Arbok': {
    name: 'Arbok',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 60, atk: 95, def: 69, spa: 65, spd: 79, spe: 80 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Pikachu': {
    name: 'Pikachu',
    gen: 1,
    types: ['Electric'],
    base_stats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Raichu': {
    name: 'Raichu',
    gen: 1,
    types: ['Electric'],
    base_stats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Sandshrew': {
    name: 'Sandshrew',
    gen: 1,
    types: ['Ground'],
    base_stats: { hp: 50, atk: 75, def: 85, spa: 20, spd: 30, spe: 40 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Sandslash': {
    name: 'Sandslash',
    gen: 1,
    types: ['Ground'],
    base_stats: { hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Nidoran♀': {
    name: 'Nidoran♀',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 55, atk: 47, def: 52, spa: 40, spd: 40, spe: 41 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Nidorina': {
    name: 'Nidorina',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 70, atk: 62, def: 67, spa: 55, spd: 55, spe: 56 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Nidoqueen': {
    name: 'Nidoqueen',
    gen: 1,
    types: ['Poison', 'Ground'],
    base_stats: { hp: 90, atk: 92, def: 87, spa: 75, spd: 85, spe: 76 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Nidoran♂': {
    name: 'Nidoran♂',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 46, atk: 57, def: 40, spa: 40, spd: 40, spe: 50 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Nidorino': {
    name: 'Nidorino',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 61, atk: 72, def: 57, spa: 55, spd: 55, spe: 65 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Nidoking': {
    name: 'Nidoking',
    gen: 1,
    types: ['Poison', 'Ground'],
    base_stats: { hp: 81, atk: 102, def: 77, spa: 85, spd: 75, spe: 85 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Clefairy': {
    name: 'Clefairy',
    gen: 1,
    types: ['Fairy'],
    base_stats: { hp: 70, atk: 45, def: 48, spa: 60, spd: 65, spe: 35 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Clefable': {
    name: 'Clefable',
    gen: 1,
    types: ['Fairy'],
    base_stats: { hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Vulpix': {
    name: 'Vulpix',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Ninetales': {
    name: 'Ninetales',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Jigglypuff': {
    name: 'Jigglypuff',
    gen: 1,
    types: ['Normal', 'Fairy'],
    base_stats: { hp: 115, atk: 45, def: 20, spa: 45, spd: 25, spe: 20 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Wigglytuff': {
    name: 'Wigglytuff',
    gen: 1,
    types: ['Normal', 'Fairy'],
    base_stats: { hp: 140, atk: 70, def: 45, spa: 85, spd: 50, spe: 45 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Zubat': {
    name: 'Zubat',
    gen: 1,
    types: ['Poison', 'Flying'],
    base_stats: { hp: 40, atk: 45, def: 35, spa: 30, spd: 40, spe: 55 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Golbat': {
    name: 'Golbat',
    gen: 1,
    types: ['Poison', 'Flying'],
    base_stats: { hp: 75, atk: 80, def: 70, spa: 65, spd: 75, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Oddish': {
    name: 'Oddish',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 45, atk: 50, def: 55, spa: 75, spd: 65, spe: 30 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Gloom': {
    name: 'Gloom',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 60, atk: 65, def: 70, spa: 85, spd: 75, spe: 40 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Vileplume': {
    name: 'Vileplume',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 75, atk: 80, def: 85, spa: 110, spd: 90, spe: 50 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Paras': {
    name: 'Paras',
    gen: 1,
    types: ['Bug', 'Grass'],
    base_stats: { hp: 35, atk: 70, def: 55, spa: 45, spd: 55, spe: 25 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Parasect': {
    name: 'Parasect',
    gen: 1,
    types: ['Bug', 'Grass'],
    base_stats: { hp: 60, atk: 95, def: 80, spa: 60, spd: 80, spe: 30 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Venonat': {
    name: 'Venonat',
    gen: 1,
    types: ['Bug', 'Poison'],
    base_stats: { hp: 60, atk: 55, def: 50, spa: 40, spd: 55, spe: 45 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Venomoth': {
    name: 'Venomoth',
    gen: 1,
    types: ['Bug', 'Poison'],
    base_stats: { hp: 70, atk: 65, def: 60, spa: 90, spd: 75, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Diglett': {
    name: 'Diglett',
    gen: 1,
    types: ['Ground'],
    base_stats: { hp: 10, atk: 55, def: 25, spa: 35, spd: 45, spe: 95 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Dugtrio': {
    name: 'Dugtrio',
    gen: 1,
    types: ['Ground'],
    base_stats: { hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Meowth': {
    name: 'Meowth',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 40, atk: 45, def: 35, spa: 40, spd: 40, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Persian': {
    name: 'Persian',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 65, atk: 70, def: 60, spa: 65, spd: 65, spe: 115 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Psyduck': {
    name: 'Psyduck',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 50, atk: 52, def: 48, spa: 65, spd: 50, spe: 55 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Golduck': {
    name: 'Golduck',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Mankey': {
    name: 'Mankey',
    gen: 1,
    types: ['Fighting'],
    base_stats: { hp: 40, atk: 80, def: 35, spa: 35, spd: 45, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Primeape': {
    name: 'Primeape',
    gen: 1,
    types: ['Fighting'],
    base_stats: { hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Growlithe': {
    name: 'Growlithe',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 55, atk: 70, def: 45, spa: 70, spd: 50, spe: 60 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Arcanine': {
    name: 'Arcanine',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Poliwag': {
    name: 'Poliwag',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 40, atk: 50, def: 40, spa: 40, spd: 40, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Poliwhirl': {
    name: 'Poliwhirl',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 65, atk: 65, def: 65, spa: 50, spd: 50, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Poliwrath': {
    name: 'Poliwrath',
    gen: 1,
    types: ['Water', 'Fighting'],
    base_stats: { hp: 90, atk: 95, def: 95, spa: 70, spd: 90, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Abra': {
    name: 'Abra',
    gen: 1,
    types: ['Psychic'],
    base_stats: { hp: 25, atk: 20, def: 15, spa: 105, spd: 55, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Kadabra': {
    name: 'Kadabra',
    gen: 1,
    types: ['Psychic'],
    base_stats: { hp: 40, atk: 35, def: 30, spa: 120, spd: 70, spe: 105 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Alakazam': {
    name: 'Alakazam',
    gen: 1,
    types: ['Psychic'],
    base_stats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Machop': {
    name: 'Machop',
    gen: 1,
    types: ['Fighting'],
    base_stats: { hp: 70, atk: 80, def: 50, spa: 35, spd: 35, spe: 35 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Machoke': {
    name: 'Machoke',
    gen: 1,
    types: ['Fighting'],
    base_stats: { hp: 80, atk: 100, def: 70, spa: 50, spd: 60, spe: 45 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Machamp': {
    name: 'Machamp',
    gen: 1,
    types: ['Fighting'],
    base_stats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Bellsprout': {
    name: 'Bellsprout',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 50, atk: 75, def: 35, spa: 70, spd: 30, spe: 40 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Weepinbell': {
    name: 'Weepinbell',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 65, atk: 90, def: 50, spa: 85, spd: 45, spe: 55 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Victreebel': {
    name: 'Victreebel',
    gen: 1,
    types: ['Grass', 'Poison'],
    base_stats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 70, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Tentacool': {
    name: 'Tentacool',
    gen: 1,
    types: ['Water', 'Poison'],
    base_stats: { hp: 40, atk: 40, def: 35, spa: 50, spd: 100, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Tentacruel': {
    name: 'Tentacruel',
    gen: 1,
    types: ['Water', 'Poison'],
    base_stats: { hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Geodude': {
    name: 'Geodude',
    gen: 1,
    types: ['Rock', 'Ground'],
    base_stats: { hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Graveler': {
    name: 'Graveler',
    gen: 1,
    types: ['Rock', 'Ground'],
    base_stats: { hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Golem': {
    name: 'Golem',
    gen: 1,
    types: ['Rock', 'Ground'],
    base_stats: { hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Ponyta': {
    name: 'Ponyta',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Rapidash': {
    name: 'Rapidash',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Slowpoke': {
    name: 'Slowpoke',
    gen: 1,
    types: ['Water', 'Psychic'],
    base_stats: { hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Slowbro': {
    name: 'Slowbro',
    gen: 1,
    types: ['Water', 'Psychic'],
    base_stats: { hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Magnemite': {
    name: 'Magnemite',
    gen: 1,
    types: ['Electric', 'Steel'],
    base_stats: { hp: 25, atk: 35, def: 70, spa: 95, spd: 55, spe: 45 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Magneton': {
    name: 'Magneton',
    gen: 1,
    types: ['Electric', 'Steel'],
    base_stats: { hp: 50, atk: 60, def: 95, spa: 120, spd: 70, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  "Farfetch'd": {
    name: 'Farfetch\'d',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Doduo': {
    name: 'Doduo',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 35, atk: 85, def: 45, spa: 35, spd: 35, spe: 75 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Dodrio': {
    name: 'Dodrio',
    gen: 1,
    types: ['Normal', 'Flying'],
    base_stats: { hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Seel': {
    name: 'Seel',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 65, atk: 45, def: 55, spa: 45, spd: 70, spe: 45 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Dewgong': {
    name: 'Dewgong',
    gen: 1,
    types: ['Water', 'Ice'],
    base_stats: { hp: 90, atk: 70, def: 80, spa: 70, spd: 95, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Grimer': {
    name: 'Grimer',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Muk': {
    name: 'Muk',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Shellder': {
    name: 'Shellder',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 30, atk: 65, def: 100, spa: 45, spd: 25, spe: 40 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Cloyster': {
    name: 'Cloyster',
    gen: 1,
    types: ['Water', 'Ice'],
    base_stats: { hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Gastly': {
    name: 'Gastly',
    gen: 1,
    types: ['Ghost', 'Poison'],
    base_stats: { hp: 30, atk: 35, def: 30, spa: 100, spd: 35, spe: 80 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Haunter': {
    name: 'Haunter',
    gen: 1,
    types: ['Ghost', 'Poison'],
    base_stats: { hp: 45, atk: 50, def: 45, spa: 115, spd: 55, spe: 95 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Gengar': {
    name: 'Gengar',
    gen: 1,
    types: ['Ghost', 'Poison'],
    base_stats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Onix': {
    name: 'Onix',
    gen: 1,
    types: ['Rock', 'Ground'],
    base_stats: { hp: 35, atk: 45, def: 160, spa: 30, spd: 45, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Drowzee': {
    name: 'Drowzee',
    gen: 1,
    types: ['Psychic'],
    base_stats: { hp: 60, atk: 48, def: 45, spa: 43, spd: 90, spe: 42 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Hypno': {
    name: 'Hypno',
    gen: 1,
    types: ['Psychic'],
    base_stats: { hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Krabby': {
    name: 'Krabby',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 30, atk: 105, def: 90, spa: 25, spd: 25, spe: 50 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Kingler': {
    name: 'Kingler',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Voltorb': {
    name: 'Voltorb',
    gen: 1,
    types: ['Electric'],
    base_stats: { hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Electrode': {
    name: 'Electrode',
    gen: 1,
    types: ['Electric'],
    base_stats: { hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Exeggcute': {
    name: 'Exeggcute',
    gen: 1,
    types: ['Grass', 'Psychic'],
    base_stats: { hp: 60, atk: 40, def: 80, spa: 60, spd: 45, spe: 40 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Exeggutor': {
    name: 'Exeggutor',
    gen: 1,
    types: ['Grass', 'Psychic'],
    base_stats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 75, spe: 55 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Cubone': {
    name: 'Cubone',
    gen: 1,
    types: ['Ground'],
    base_stats: { hp: 50, atk: 50, def: 95, spa: 40, spd: 50, spe: 35 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Marowak': {
    name: 'Marowak',
    gen: 1,
    types: ['Ground'],
    base_stats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Hitmonlee': {
    name: 'Hitmonlee',
    gen: 1,
    types: ['Fighting'],
    base_stats: { hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Hitmonchan': {
    name: 'Hitmonchan',
    gen: 1,
    types: ['Fighting'],
    base_stats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Lickitung': {
    name: 'Lickitung',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 90, atk: 55, def: 75, spa: 60, spd: 75, spe: 30 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Koffing': {
    name: 'Koffing',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 40, atk: 65, def: 95, spa: 60, spd: 45, spe: 35 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Weezing': {
    name: 'Weezing',
    gen: 1,
    types: ['Poison'],
    base_stats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Rhyhorn': {
    name: 'Rhyhorn',
    gen: 1,
    types: ['Ground', 'Rock'],
    base_stats: { hp: 80, atk: 85, def: 95, spa: 30, spd: 30, spe: 25 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Rhydon': {
    name: 'Rhydon',
    gen: 1,
    types: ['Ground', 'Rock'],
    base_stats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Chansey': {
    name: 'Chansey',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Tangela': {
    name: 'Tangela',
    gen: 1,
    types: ['Grass'],
    base_stats: { hp: 65, atk: 55, def: 115, spa: 100, spd: 40, spe: 60 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Kangaskhan': {
    name: 'Kangaskhan',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Horsea': {
    name: 'Horsea',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 30, atk: 40, def: 70, spa: 70, spd: 25, spe: 60 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Seadra': {
    name: 'Seadra',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 55, atk: 65, def: 95, spa: 95, spd: 45, spe: 85 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Goldeen': {
    name: 'Goldeen',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 45, atk: 67, def: 60, spa: 35, spd: 50, spe: 63 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Seaking': {
    name: 'Seaking',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 80, atk: 92, def: 65, spa: 65, spd: 80, spe: 68 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Staryu': {
    name: 'Staryu',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 30, atk: 45, def: 55, spa: 70, spd: 55, spe: 85 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Starmie': {
    name: 'Starmie',
    gen: 1,
    types: ['Water', 'Psychic'],
    base_stats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Mr. Mime': {
    name: 'Mr. Mime',
    gen: 1,
    types: ['Psychic', 'Fairy'],
    base_stats: { hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Scyther': {
    name: 'Scyther',
    gen: 1,
    types: ['Bug', 'Flying'],
    base_stats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Jynx': {
    name: 'Jynx',
    gen: 1,
    types: ['Ice', 'Psychic'],
    base_stats: { hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Electabuzz': {
    name: 'Electabuzz',
    gen: 1,
    types: ['Electric'],
    base_stats: { hp: 65, atk: 83, def: 57, spa: 95, spd: 85, spe: 105 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Magmar': {
    name: 'Magmar',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Pinsir': {
    name: 'Pinsir',
    gen: 1,
    types: ['Bug'],
    base_stats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Tauros': {
    name: 'Tauros',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Magikarp': {
    name: 'Magikarp',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Gyarados': {
    name: 'Gyarados',
    gen: 1,
    types: ['Water', 'Flying'],
    base_stats: { hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Lapras': {
    name: 'Lapras',
    gen: 1,
    types: ['Water', 'Ice'],
    base_stats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Ditto': {
    name: 'Ditto',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Eevee': {
    name: 'Eevee',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Vaporeon': {
    name: 'Vaporeon',
    gen: 1,
    types: ['Water'],
    base_stats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Jolteon': {
    name: 'Jolteon',
    gen: 1,
    types: ['Electric'],
    base_stats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Flareon': {
    name: 'Flareon',
    gen: 1,
    types: ['Fire'],
    base_stats: { hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Porygon': {
    name: 'Porygon',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Omanyte': {
    name: 'Omanyte',
    gen: 1,
    types: ['Rock', 'Water'],
    base_stats: { hp: 35, atk: 40, def: 100, spa: 90, spd: 55, spe: 35 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Omastar': {
    name: 'Omastar',
    gen: 1,
    types: ['Rock', 'Water'],
    base_stats: { hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Kabuto': {
    name: 'Kabuto',
    gen: 1,
    types: ['Rock', 'Water'],
    base_stats: { hp: 30, atk: 80, def: 90, spa: 55, spd: 45, spe: 55 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Kabutops': {
    name: 'Kabutops',
    gen: 1,
    types: ['Rock', 'Water'],
    base_stats: { hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Aerodactyl': {
    name: 'Aerodactyl',
    gen: 1,
    types: ['Rock', 'Flying'],
    base_stats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Snorlax': {
    name: 'Snorlax',
    gen: 1,
    types: ['Normal'],
    base_stats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Articuno': {
    name: 'Articuno',
    gen: 1,
    types: ['Ice', 'Flying'],
    base_stats: { hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Zapdos': {
    name: 'Zapdos',
    gen: 1,
    types: ['Electric', 'Flying'],
    base_stats: { hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Moltres': {
    name: 'Moltres',
    gen: 1,
    types: ['Fire', 'Flying'],
    base_stats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Dratini': {
    name: 'Dratini',
    gen: 1,
    types: ['Dragon'],
    base_stats: { hp: 41, atk: 64, def: 45, spa: 50, spd: 50, spe: 50 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Dragonair': {
    name: 'Dragonair',
    gen: 1,
    types: ['Dragon'],
    base_stats: { hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Dragonite': {
    name: 'Dragonite',
    gen: 1,
    types: ['Dragon', 'Flying'],
    base_stats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Mewtwo': {
    name: 'Mewtwo',
    gen: 1,
    types: ['Psychic'],
    base_stats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
  },
  'Mew': {
    name: 'Mew',
    gen: 1,
    types: ['Psychic'],
    base_stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    default_moves: ['Tackle', 'Growl', 'Tail Whip', 'Quick Attack']
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