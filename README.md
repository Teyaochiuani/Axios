This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

##Integración de Axios en Next.js con API de Pokémon
Este proyecto utiliza Axios para realizar solicitudes a la API de Pokémon en una aplicación Next.js. Sigue estos pasos para integrarlo en tu proyecto:

Paso 1: Instalar Axios
Asegúrate de tener Axios instalado en tu proyecto. Si no lo has hecho aún, puedes instalarlo utilizando npm:

bash
Copy code
npm install axios
Paso 2: Crear una función de utilidad para hacer solicitudes a la API de Pokémon
Crea un archivo pokemonApi.js en tu directorio de utilidades (por ejemplo, utils o lib) y define una función que utilice Axios para hacer solicitudes a la API de Pokémon:

javascript
Copy code
import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2';

const pokemonApi = axios.create({
  baseURL,
});

export const getPokemon = async (pokemonName) => {
  try {
    const response = await pokemonApi.get(`/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    throw error;
  }
};
Paso 3: Hacer uso de la función de utilidad en tus componentes
Puedes importar y utilizar la función getPokemon en tus componentes de Next.js para hacer solicitudes a la API de Pokémon. Aquí tienes un ejemplo básico de cómo hacerlo:

javascript
Copy code
import { useEffect, useState } from 'react';
import { getPokemon } from '../utils/pokemonApi';

export default function PokemonPage() {
  const [pokemonData, setPokemonData] = useState(null);
  const pokemonName = 'pikachu'; // Nombre del Pokémon que deseas buscar

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const data = await getPokemon(pokemonName);
        setPokemonData(data);
      } catch (error) {
        // Manejar errores
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div>
      {pokemonData ? (
        <div>
          <h1>{pokemonData.name}</h1>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          {/* Agrega más detalles del Pokémon según lo necesites */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
