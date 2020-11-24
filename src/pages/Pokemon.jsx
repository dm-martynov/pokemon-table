import { Button, CircularProgress, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getPokemonProfile } from '../api/api'
import PokemonData from '../components/PokemonData'

const Pokemon = (props) => {
  const { match } = props
  const { params } = match
  const { pokemonId } = params
  const [pokemonProfile, setPokemonProfile] = useState(undefined)

  let history = useHistory()

  useEffect(() => {
    getPokemonProfile(pokemonId)
      .then((response) => setPokemonProfile(response))
      .catch((err) => setPokemonProfile(false))
  }, [pokemonProfile, pokemonId])
  return (
    <>
      {pokemonProfile === undefined && <CircularProgress />}
      {pokemonProfile !== undefined && pokemonProfile && (
        <PokemonData pokemon={pokemonProfile} />
      )}
      {pokemonProfile === false && <Typography> Pokemon not found</Typography>}
      {pokemonProfile !== undefined && (
        <Button variant='contained' onClick={() => history.push('/')}>
          back home
        </Button>
      )}
    </>
  )
}

export default Pokemon
