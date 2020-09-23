// import { DefaultTheme } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'
// import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

const theme = createMuiTheme({
  palette: {
    // primary: { //primary color change pallette
    //   light: blue[400],
    //   main: blue[500],
    //   dark: blue[600],
    //   contrastText: '#fff',
    // },
    secondary: {
      light: grey[400],
      main: grey[500],
      dark: grey[600],
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: `"Roboto", sans-serif`,
    fontSize: 12,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700,
  },
  overrides: {
    // Style sheet name ⚛️
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: 'normal',
      },
    },
    MuiButton: {
      text: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        textTransform: 'none',
      },
    },
  },
})

export default theme
