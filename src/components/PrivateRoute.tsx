import React, { Suspense } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

interface PrivateRouteProps {
  component: any
  isAuthenticated?: boolean
  path: string
  exact?: boolean
}

const PrivateRoute = ({
  component: Component,
  isAuthenticated = false,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated ? (
          <Suspense fallback={<div>1231</div>}>
            <Component {...props} />
          </Suspense>
        ) : (
          <Redirect
            to={{ pathname: '/auth/signin', state: { from: props.location } }}
          />
        )
      }}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  isAuthenticated: PropTypes.bool,
  path: PropTypes.string,
  exact: PropTypes.bool,
  location: PropTypes.object,
}

export default PrivateRoute
