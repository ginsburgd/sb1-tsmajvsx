import os
import json




def open_cache_dict(file_name):
    if os.path.exists(file_name):
        with open(file_name, 'r') as file:
            file_data_dict = json.load(file)
    else:
        file_data_dict = {}

    return file_data_dict

def get_pokedex_number_to_name():
	pokedex_number_to_name = {}
	pokemon_stats = open_cache_dict('../../../src/data/base_stats.json')
	for name in pokemon_stats:
		pokedex_number = pokemon_stats[name]['pokedex_number']
		pokedex_number_to_name[pokedex_number] = name
	return pokedex_number_to_name

def rename_images(folder_path):
	pokedex_number_to_name = get_pokedex_number_to_name()
	print(pokedex_number_to_name)
	if 1 in pokedex_number_to_name:
		print('true')
	else:
		print('false')

	for i, old_name in enumerate(files, 1):
		print('old_name is', old_name)
		old_file_path = os.path.join(folder_path, old_name)
		try:
			pokedex_number = int(old_name.split('.')[0])
		except ValueError:
			continue
		print('pokedex_number is', pokedex_number)
		if pokedex_number not in pokedex_number_to_name:
			continue
		new_name = pokedex_number_to_name[pokedex_number] + '.png'
		new_file_path = os.path.join(folder_path, new_name)
		print('new_file_path is', new_file_path)
		print()
		os.rename(old_file_path, new_file_path)

folder_path = 'pokemon'
files = os.listdir(folder_path)
rename_images(folder_path)