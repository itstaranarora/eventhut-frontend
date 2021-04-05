import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useStateValue } from "states/StateProvider";
import {getJwt, loginUser, getUserAndPassword} from "api"

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    if(!user) {
      loginUser(getUserAndPassword()).then( res =>
        dispatch({
          type: "SET_USER",
          user: res.data.user
        })
      )
    }
  })

  return (
    <Route
      {...rest}
      render={(props) => {
        if (getJwt()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;