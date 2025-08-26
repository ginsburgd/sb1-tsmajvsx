import { Pokemon, Move } from "../types/league";
import pokemonCsv from './pokemon_stats.csv?raw';
import pokemon_json from './base_stats.json';
import moves_json from './move_stats.json';


//const fileContent: string = fs.readFileSync('pokemon_stats.json', 'utf8');
export const POKEMON_DATA = pokemon_json;

console.log(POKEMON_DATA);

//const pokemonArray = parsedData.data;
//const POKEMON_DATA: { [key: string]: Pokemon } = {};

/*
pokemonArray.forEach((pokemon: any) => {
    // Parse complex fields like types and moves
    const types = pokemon.types.split(',').map((type: string) => type.trim());
    const default_moves = pokemon.default_moves.split(',').map((move: string) => move.trim());

    POKEMON_DATA[pokemon.name] = {
        name: pokemon.name,
        gen: parseInt(pokemon.gen),
        types: types,
        base_stats: {
            hp: parseInt(pokemon.hp),
            atk: parseInt(pokemon.attack),
            def: parseInt(pokemon.defense),
            spa: parseInt(pokemon.sp_attack),
            spd: parseInt(pokemon.sp_defense),
            spe: parseInt(pokemon.speed)
        },
        default_moves: default_moves
    };
});
*/

export const MOVE_DATA =  moves_json

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
