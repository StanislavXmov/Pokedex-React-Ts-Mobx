import { PokemonClient } from "pokenode-ts";

const api = new PokemonClient();
console.log(api);


export const getPokemonList = async (offset: number, limit: number) => {
    return await api.listPokemons(offset, limit)
        .then((data) => data);
}

export const getPokemonByName = async (name: string) => {
    return await api.getPokemonByName(name)
        .then((data) => data);
}