import React, { useState } from 'react';
import Login from '../components/admin/Login';
import { motion } from 'framer-motion';

const Admin = () => {
    return(
        <div>
            <h1 className="page-header">Admin</h1>
            <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: "center"}}>Login</motion.h2>
            <Login />
        </div>
    )
}

export default Admin;