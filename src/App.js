import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import PokemonTable from './pages/PokemonTable'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={PokemonTable} />
      <Route exact path='/:pokemonId' component={Pokemon} />
    </Switch>
  )
}

export default App
