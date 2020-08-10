import React, { useState } from 'react';
import Head from './Heading';
import './Navbar.css';
import Menu from './Menu';

const MainNav = () => {
    return(
        <nav className="sidebar side-nav main-nav">
            <Head/>
            <div style={{ width: '25%' }}>
                <i class="fas fa-bars hide-on-desktop"></i>
            </div>
            <Menu/>
        </nav>
    )
}

export default MainNav;