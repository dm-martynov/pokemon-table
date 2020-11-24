import { AppBar, TextField, Toolbar } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: '5px',
  },
  searchInput: {
    width: '200px',
    margin: '5px',
  },
}))

const Header = (props) => {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar>
        <div className={classes.searchContainer}>
          <SearchIcon className={classes.searchIcon} />
          <TextField
            label='Pokemon'
            variant='standard'
            className={classes.searchInput}
            onChange={props.handleSearchChange}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
