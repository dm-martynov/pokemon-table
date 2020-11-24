import axios from 'axios'

export const getPokemonData = async () => {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=807'
  )
  const newPokemonData = {}

  response.data.results.forEach((pokemon, index) => {
    newPokemonData[index + 1] = {
      id: index + 1,
      name: pokemon.name,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    }
  })

  return newPokemonData
}

export const getPokemonProfile = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

  return response.data
}
