import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { renderPrivatRouterProps } from '@/compiler/types'
import PrivateRoute from '@/components/PrivateRoute'
import { SignIn, SignUp, NotFound } from '@/pages'
import { ErrorFallback } from './ErrorBoundary'
import theme from './theme'

const shortid = require('shortid')
const routes = [
  {
    id: shortid.generate(),
    path: '/',
    exact: true,
    component: () => <Redirect to="/auth/signin" />,
  },
  {
    id: shortid.generate(),
    path: '/catalog',
    exact: true,
    component: lazy(() => import('@/pages/Catalog')),
  },
]

const renderPrivatRouter = () => {
  return routes.map(
    ({ id, component, path, exact }: renderPrivatRouterProps) => {
      return (
        <PrivateRoute
          key={id}
          component={component}
          path={path}
          exact={exact}
          isAuthenticated={true}
        />
      )
    }
  )
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        return <Redirect to="/auth/signin" />
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/auth/signin" component={SignIn} />
            <Route path="/auth/signup" component={SignUp} />
            {renderPrivatRouter()}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
