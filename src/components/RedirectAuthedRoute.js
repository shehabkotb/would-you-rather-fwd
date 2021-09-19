import React from 'react'
import { Redirect, Route } from 'react-router'

const RedirectAuthedRoute = ({ authedUser, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authedUser ? <Redirect to="/" /> : <Component />
      }
    />
  )
}

export default RedirectAuthedRoute
