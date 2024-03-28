import { Route, Routes } from 'react-router-dom'
import './App.css'
import Items from './views/Items/Items'
import Pokemon from './views/Pokemon/Pokemon'
import Pokemons from './views/Pokemons/Pokemons'

function App() {

  return (

    <Routes>
      <Route path="/" element={<Pokemons />} />
      <Route path="/pokemons" element={<Pokemons />} />
      <Route path="/pokemons/:name" element={<Pokemon />} />
      <Route path="/items" element={<Items />} />
    </Routes>

  )
}

export default App
