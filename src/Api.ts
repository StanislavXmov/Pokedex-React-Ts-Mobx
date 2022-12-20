import { PokemonClient } from "pokenode-ts";

const api = new PokemonClient();

export const getPokemonList = async (offset: number, limit: number) => {
    return await api.listPokemons(offset, limit)
        .then((data) => data);
}