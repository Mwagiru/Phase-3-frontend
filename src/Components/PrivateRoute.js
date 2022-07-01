import React, { useContext } from "react";
import {Route, Redirect, Router } from "react-router-dom";
import {AuthContext} from "./Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
return (
    <Route
    {...rest}
    render={routeProps => !!currentUser ? (<RouteComponent {...routeProps}/>
    ) : (
        <Redirect to={"/login"}/>
    )
}
/>
);
}
export default PrivateRoute