import React from 'react';
import { motion } from 'framer-motion';

const Login = () => {
    return(
        <div className="login">
            <form>
                <label>
                    <input type="email" />
                    <input type="password" />
                </label> 
            </form>
        </div>
    )
}

export default Login;