import { Pokemon, PokemonAPI } from "src/models/pokemon.models";
import { IHttpServices } from "src/models/http.models";

const URL = "https://pokeapi.co/api/v2/pokemon";

function mapPokemon(pokemon: PokemonAPI): Pokemon {
  return {
    name: pokemon.name,
    number: pokemon.id.toString(),
    image: pokemon.sprites.other["official-artwork"].front_default,
  };
}

export async function getPokemon(
  httpService: IHttpServices | undefined,
  queryPokemon: string
) {
  const response = await httpService?.get({
    url: `${URL}/${queryPokemon}`,
  });

  return mapPokemon(response);
}
