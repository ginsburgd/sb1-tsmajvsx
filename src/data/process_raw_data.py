import pandas as pd
import json
import numpy as np

moves_df = pd.read_csv('raw_data/pokemon_moves.csv')
pokemon_df = pd.read_csv('raw_data/pokemon.csv')
move_names_df = pd.read_csv('raw_data/moves.csv')
type_names_df = pd.read_csv('raw_data/type_names.csv')

def save_json(json_object, file_name):
    with open(file_name, "w") as outfile:
        json.dump(json_object, outfile, indent = 2)


def filter_moves_for_group_id(moves_df, group_id):
  new_moves_df = moves_df[moves_df['version_group_id'] == group_id].reset_index(drop=True)
  return new_moves_df


def replace_move_id_with_move_name(moves_df, moves_name_df):
  move_id_to_name = {}
  for i in range(len(moves_name_df)):
    move_id = int(moves_name_df['id'][i])
    #print('move_id type', type(move_id))
    move_id_to_name[move_id] = moves_name_df['identifier'][i].title()
  new_names = []
  for move_id in moves_df['move_id']:
    #print('move_id type', type(move_id))
    new_names.append(move_id_to_name[move_id])
  moves_df = moves_df.drop('move_id', axis=1)
  moves_df['move_name'] = new_names
  return moves_df




def generate_base_stats_json(pokemon_df, new_moves_df):
  pokemon_json = {}
  id_to_base_moves = {}

  for i in range(len(new_moves_df)):
    if new_moves_df['level'][i] == 1:
      pokedex_id = new_moves_df['pokemon_id'][i]
      if pokedex_id in id_to_base_moves:
        id_to_base_moves[new_moves_df['pokemon_id'][i]].append(new_moves_df['move_name'][i])
      else:
        id_to_base_moves[new_moves_df['pokemon_id'][i]] =  [new_moves_df['move_name'][i]]
      if pokedex_id == 1:
        print('pokedex id 1')



  pokedex_numbers = pokemon_df['pokedex_number']
  for i in range(len(pokemon_df['pokedex_number'])):
    pokedex_n = pokemon_df['pokedex_number'][i]
    if pokedex_n > 151:
      break
    entry = {}
    pokemon_name =  pokemon_df['name'][i]
    entry['name'] = pokemon_name
    entry['pokedex_number'] = int(pokedex_n)
    entry['gen'] = int(pokemon_df['generation'][i])
    entry['types'] = [pokemon_df['type1'][i].title()]
    if type(pokemon_df['type2'][i]) != float:
      entry['types'].append(pokemon_df['type2'][i].title())

    entry['base_stats'] = { "hp": int(pokemon_df['hp'][i]), "atk":  int(pokemon_df['attack'][i]), "def":  int(pokemon_df['defense'][i]), 
      "spa":  int(pokemon_df['sp_attack'][i]), "spd":  int(pokemon_df['sp_defense'][i]), "spe": int(pokemon_df['speed'][i]) }
    entry['default_moves'] = id_to_base_moves[pokedex_n]
    pokemon_json[pokemon_name] = entry
  save_json(pokemon_json, 'base_stats.json')

def get_id_to_type(type_names_df):
  id_to_type = {}
  type_names_df_eng = type_names_df[type_names_df['local_language_id'] == 9].reset_index(drop=True)
  for i in range(len(type_names_df_eng)):
    type_id = type_names_df_eng['type_id'][i]
    id_to_type[type_id] = type_names_df_eng['name'][i]
  return id_to_type

def id_to_damage_class(damage_id):
  if damage_id == 1:
    return 'status'
  elif damage_id == 2:
    return 'physical'
  else:
    return 'special'




def stat_to_int(stat):
  if np.isnan(stat):
    return 0
  return int(stat)


def generate_move_stats_json(move_names_df, type_names_df):
  move_json = {}
  id_to_type = get_id_to_type(type_names_df)
  for i in range(len(move_names_df)):
    move_entry = {}
    move_name = move_names_df['identifier'][i].title()
    move_entry['type'] = id_to_type[move_names_df['type_id'][i]]
    move_entry['category'] = id_to_damage_class(move_names_df['damage_class_id'][i]).title()
    move_entry['power'] = stat_to_int(move_names_df['power'][i])
    move_entry['accuracy'] = stat_to_int(move_names_df['accuracy'][i])
    move_entry['priority'] = stat_to_int(move_names_df['priority'][i])
    move_json[move_name] = move_entry
  save_json(move_json, 'move_stats.json')




group_name = 'red-blue'
new_moves_df = filter_moves_for_group_id(moves_df, 1)
new_moves_df = replace_move_id_with_move_name(new_moves_df, move_names_df)
new_moves_df.to_csv(group_name + '_pokemon_moves.csv')
generate_base_stats_json(pokemon_df, new_moves_df)
generate_move_stats_json(move_names_df, type_names_df)








