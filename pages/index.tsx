import type { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layouts';
import { pokeapi } from '../api';
import { Pokemon, PokemonListResponse } from '../interfaces';
import { PokemonCard } from '../components/pokemon';
import { Grid } from '@nextui-org/react';

interface Props {
	pokemons: Pokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
	return (
		<Layout>
			<Grid.Container gap={2} justify="flex-start">
				{pokemons.map((pokemon: Pokemon) => (
					<PokemonCard {...pokemon} key={pokemon.id} />
				))}
			</Grid.Container>
		</Layout>
	);
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ctx => {
	const { data } = await pokeapi.get<PokemonListResponse>('/pokemon?limit=100');

	const pokemons: Pokemon[] = data.results.map((p, i) => ({
		...p,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			i + 1
		}.svg`,
	}));

	return {
		props: {
			pokemons,
		},
	};
};
