import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const NotFound = () => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="lg">
      <Grid container className={classes.gridContainer}>
        <Grid item xs>
          <Typography
            variant="h1"
            component="h2"
            style={{ fontWeight: 'bold' }}
          >
            404
          </Typography>
          <Typography variant="h4" component="h2">
            Look like you're lost
          </Typography>
          <Typography variant="subtitle1" component="h5" paragraph>
            The page you visited does not exist
          </Typography>
          <Link to="/" className={classes.link}>
            <Button variant="contained" color="primary">
              Go Home
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  },
}))

export default NotFound
