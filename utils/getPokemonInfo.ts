import { pokeapi } from '../api';
import { PokemonComplete } from '../interfaces/pokemon-complete';

export const getPokemonInfo = async (nameOrID: string) => {
	const { data } = await pokeapi.get<PokemonComplete>(`/pokemon/${nameOrID}`);

	return {
		id: data.id,
		name: data.name,
		sprites: data.sprites,
	};
};
