import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() => (
        props.loggedIn === true ? (<Component {...props} />) : (<Redirect to="/react-mesto-auth/sign-in" />)
      )}
    </Route>
  )
}

