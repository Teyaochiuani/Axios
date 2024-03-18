import { Grid } from '@nextui-org/react';
import { FavoritePokemonCard } from './';

const FavoritePokemons = ({ pokemons }: { pokemons: number[] }) => {
	return (
		<Grid.Container gap={2} direction="row" justify="flex-start">
			{pokemons.map(id => (
				<FavoritePokemonCard id={id} key={id} />
			))}
		</Grid.Container>
	);
};

export default FavoritePokemons;
