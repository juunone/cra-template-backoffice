import React from 'react'
import { Typography, Link } from '@material-ui/core'

const Footer = () => {
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/juunone" target="_blank">
        Juunone
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Footer
