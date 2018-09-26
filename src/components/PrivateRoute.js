import React from 'react'
import {Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest, isAuthenticated }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: "/",
          state: {from: props.location}
        }} />
    }
  />
)

export default PrivateRoute