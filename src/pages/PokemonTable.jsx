import { CircularProgress, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react'
import { getPokemonData } from '../api/api'
import Header from '../components/Header'
import GetPokemonCard from '../components/TableCard'

const useStyles = makeStyles({
  pokeTableContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
})

const PokemonTable = (props) => {
  const classes = useStyles()
  const [pokemonData, setPokemonData] = useState()
  const [filter, setFilter] = useState()
  const handleSearchChange = (e) => {
    setFilter(e.target.value)
  }
  useEffect(() => {
    getPokemonData().then((response) => setPokemonData(response))
  }, [pokemonData])

  return (
    <>
      <Header handleSearchChange={handleSearchChange} />
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokeTableContainer}>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(filter) && (
                <GetPokemonCard
                  pokemonId={pokemonId}
                  pokemonData={pokemonData}
                  history={props.history}
                />
              )
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  )
}

export default PokemonTable
