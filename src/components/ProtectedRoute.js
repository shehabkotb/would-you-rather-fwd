import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({ children, ...rest }) => {
  const { authedUser } = useSelector((state) => state.authedUser)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authedUser ? children : <Redirect to="/login" />
      }
    />
  )
}

export default ProtectedRoute
