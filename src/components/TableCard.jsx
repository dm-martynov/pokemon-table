import React from 'react'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { toFirstCharUppercase } from '../utils/toUpper'
const useStyles = makeStyles({
  cardMedia: {
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center',
  },
})

const GetPokemonCard = (props) => {
  const classes = useStyles()
  const { pokemonData, pokemonId, history } = props
  const { id, name, sprite } = pokemonData[pokemonId]
  return (
    <Grid key={pokemonId} item xs={12} sm={4}>
      <Card onClick={() => history.push(`/${pokemonId}`)}>
        <CardMedia
          className={classes.cardMedia}
          image={sprite}
          style={{ width: '130px', height: '130px' }}
        />
        <CardContent className={classes.cardContent}>
          <Typography>{`${id}.${toFirstCharUppercase(name)}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default GetPokemonCard
