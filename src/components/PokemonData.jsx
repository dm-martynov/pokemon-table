import { Link, Typography } from '@material-ui/core'
import React from 'react'
import { toFirstCharUppercase } from '../utils/toUpper'

const PokemonData = (props) => {
  const { name, id, species, height, weight, types, sprites } = props.pokemon
  const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  const { front_default } = sprites
  return (
    <>
      <Typography variant='h1'>
        {`${id}.`} {toFirstCharUppercase(name)}
        <img alt='' src={front_default} />
      </Typography>
      <img
        alt=''
        style={{ width: '300px', height: '300px' }}
        src={fullImageUrl}
      />
      <Typography variant='h3'>Pokemon Info</Typography>
      <Typography>
        {'Species: '}
        <Link href={species.url}>{species.name} </Link>
      </Typography>
      <Typography>Height: {height} </Typography>
      <Typography>Weight: {weight} </Typography>
      <Typography variant='h6'> Types:</Typography>
      {types.map((typeInfo) => {
        const { type } = typeInfo
        const { name } = type
        return <Typography key={name}> {`${name}`}</Typography>
      })}
    </>
  )
}

export default PokemonData
