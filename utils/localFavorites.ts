const toggleFavorite = (id: number) => {
	let favorites: number[] = JSON.parse(
		localStorage.getItem('favorites') || '[]'
	);

	if (favorites.includes(id)) {
		favorites = favorites.filter(pId => pId !== id);
	} else {
		favorites.push(id);
	}

	localStorage.setItem('favorites', JSON.stringify(favorites));
};

const isInFavorites = (id: number): boolean => {
	if (typeof window !== 'object') return false;

	const favorites: number[] = JSON.parse(
		localStorage.getItem('favorites') || '[]'
	);

	return favorites.includes(id);
};

const pokemons = (): number[] => {
	return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export const localFavorites = { toggleFavorite, isInFavorites, pokemons };
