import React from "react";
import { Redirect, Route } from "react-router";
import Loading from "../components/Loading";
import { useAppContext } from "../contexts/AppProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAppContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
