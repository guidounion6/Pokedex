//https://pokeapi.co/api/v2/pokemon/ditto

import { PokemonDetail } from "../models/pokemonModel"
import { formatName } from "../utils/utills"



const fetchPokemon = async (name: string): Promise<PokemonDetail> => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${formatName(name)}`)


    if (!response) throw new Error(`Error fetching ${name}`)
    const result = await response.json()
    const Pokemon = {
        name: result.name,
        id: result.id,
        img: result.sprites.front_default,
        hp: result.stats[0].base_stat,
        attack: result.stats[1].base_stat,
        defense: result.stats[2].base_stat,
        spAttack: result.stats[3].base_stat,
        spDefense: result.stats[4].base_stat,
        speed: result.stats[5].base_stat,
    }
    return Pokemon
}

export default fetchPokemon