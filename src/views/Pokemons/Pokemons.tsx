import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import Footer from "../../components/Footer/FooterComponent"
import Header from "../../components/Header/HeaderComponent"
import styles from './Pokemons.module.css'

import { fetchPokemons } from "../../api/fetchPokemons";
import { Pokemon } from "../../models/pokemonModel";
import LoadingScreen from "../LoadingScreen/LoadingScreen";


const Pokemons = () => {

  const [query, setQuery] = useState("");
  const [ isLoading, setIsLoading] = useState(false)
  const [ pokemons, setPokemons ] = useState<Pokemon[]>([])

  useEffect(()=>{
    const fetchAllPokemons = async ()=>{
      setIsLoading(true)
      const allPokemons = await fetchPokemons()
      setPokemons(allPokemons)
      setIsLoading(false)
    }
     fetchAllPokemons()
  },[])

  if (isLoading || !pokemons ) return <LoadingScreen/> 

  const filteredPokemons = pokemons?.slice(0, 151).filter((pokemon)=>{
  return pokemon.name.toLowerCase().match(query.toLowerCase())
  })

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav className={styles.nav}>
          {filteredPokemons?.slice(0, 151).map((pokemon) => (
          <Link to={`/pokemons/${pokemon.name.toLowerCase()}`} className={styles.listItem} key={pokemon.id}>
            <img 
            className={styles.listItemIcon}
            src={pokemon.img}
            alt={pokemon.name}
            />
            <div className={styles.listItemText}>
              <span>{pokemon.name}</span>
              <span>{pokemon.id}</span>
            </div>
          </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  )
}

export default Pokemons