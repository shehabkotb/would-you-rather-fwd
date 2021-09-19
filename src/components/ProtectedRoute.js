import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({ authedUser, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authedUser ? <Component /> : <Redirect to="/login" />
      }
    />
  )
}

export default ProtectedRoute
