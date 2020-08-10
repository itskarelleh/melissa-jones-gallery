import React, { useState, useEffect, useRef, useCallback, useContext} from 'react';
import { withRouter, Redirect } from 'react-router';
import config from '../../firebase/config';
import { AuthContext } from './AuthProvider';
import { motion } from 'framer-motion';

const Login = ({ history }) => {
    const { currentUser } = useContext(AuthContext);
    
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await config
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/dashboard");
            } catch( error ) {
                alert(error);
            }
        }, [history]
    );

    if (currentUser) {
        return <Redirect to="/dashboard" />;
    }

    return(
        <div className="login" id="login">
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label> 
                    <input name="email" type="email" />
                </div>
                <br />
                <div className="form-group">
                    <label>Password</label> 
                    <input name="password" type="password" />
                </div>
                <br />
                <button id="admin-signin-btn" type="submit" value="Log In">Log In</button>
            </form> 
        </div>
    )
}

export default withRouter(Login);