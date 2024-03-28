import { useNavigate, useParams } from "react-router-dom"
import Pokeball from '../../assets/pokeball.png'
import Footer from "../../components/Footer/FooterComponent"
import styles from './Pokemon.module.css'
import { useEffect, useState } from "react"
import { PokemonDetail } from "../../models/pokemonModel"
import fetchPokemon from "../../api/fetchPokemon"
import LoadingScreen from "../LoadingScreen/LoadingScreen"


const Pokemon = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pokemon, setPokemon] = useState<PokemonDetail>()
  const { name } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getPokemon = async () => {
      setIsLoading(true)
      const newPokemon = await fetchPokemon(name as string)
      setPokemon(newPokemon)
      setIsLoading(false)
    }
    getPokemon()
  }, [name])

if (isLoading || !pokemon) return <LoadingScreen/>

  return (
    <>
      <button onClick={() => navigate('/')} className={styles.pokeballButton}>
        <img src={Pokeball} alt="Pokeball" className={styles.pokeballImage} />Go Back
      </button>
      <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
          <span className={styles.pokemonTitle}>{name?.toUpperCase()}</span>
          <img
            src={pokemon?.img}
            alt={pokemon?.name}
            className={styles.pokemonImage}
          />
          <span>Number: {pokemon?.id}</span>
          <span>HP: {pokemon?.hp}</span>
          <span>Attack: {pokemon?.attack}</span>
          <span>Defense: {pokemon?.defense}</span>
          <span>Special Attack: {pokemon?.spAttack}</span>
          <span>Special Defense: {pokemon?.spDefense}</span>
          <span>Speed: {pokemon?.speed}</span>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Pokemon