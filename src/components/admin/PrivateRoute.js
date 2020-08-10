import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return(
        <Route {...rest} render={routeProps => !!currentUser ?
        (<RouteComponent {...routeProps} />) : 
        (<Redirect to={"/admin"} />)
    } />
    );
}

export default PrivateRoute;