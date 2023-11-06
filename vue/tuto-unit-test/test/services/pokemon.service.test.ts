import { describe, it, vi, expect } from "vitest";
import { IHttpServices } from "../../src/models/http.models";
import { getPokemon } from "../../src/services/pokemon.service";
import { Pokemon } from "../../src/models/pokemon.models";

describe("PokemonService", () => {
  it("[PokemonService] getPokemon success", async () => {
    const httpService: IHttpServices = {
      get: vi.fn().mockResolvedValueOnce({
        name: "ditto",
        id: 132,
        sprites: {
          other: {
            "official-artwork": {
              front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
            },
          },
        },
      }),
    };
    const response: Pokemon = {
      name: "ditto",
      number: "132",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    };
    const service = await getPokemon(httpService, "ditto");

    expect(service).toMatchObject(response);
  });

  it("[PokemonService] getPokemon error", async () => {
    const httpService: IHttpServices = {
      get: vi.fn().mockRejectedValueOnce(new Error()),
    };
    await expect(getPokemon(httpService, "ditto")).rejects.toThrowError();
  })
});
