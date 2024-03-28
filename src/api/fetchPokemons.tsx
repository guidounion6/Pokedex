import { Pokemon } from "../models/pokemonModel";
import { formatName } from "../utils/utills";


export const fetchPokemons = async () :Promise<Pokemon[]> => {
    const response = await fetch("https://www.unpkg.com/pokemons@1.1.0/pokemons.json");

    if (!response) {
        throw new Error("Failed to fetch")
    }

    const results = await response.json();

    const pokemons = results.results.map((pokemon: any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        img:`https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(pokemon.name.toLowerCase())}.gif`
        // img: `https://img.pokemondb.net/sprites/scarlet-violet/normal/${formatName(pokemon.name.toLowerCase())}.png`
    }))
    const uniquePokemons = pokemons.filter((pokemon: any, index: any) =>
        pokemons.findIndex((other: any) => other.id === pokemon.id) === index)
    return uniquePokemons
}


