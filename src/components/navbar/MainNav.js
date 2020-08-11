import React, { useState } from 'react';
import Head from './Heading';
import './Navbar.css';
import Menu from './Menu';

const MainNav = ({ setToggle }) => {

    const toggleMenu = () => {
        setToggle({ display: 'block'});
    }

    return(
        <nav className="sidebar side-nav main-nav">
            <Head/>
            <div>
                <i onClick={toggleMenu} class="fas fa-bars hide-on-desktop show-on-mobile"></i>
            </div>
            <Menu/>
        </nav>
    )
}

export default MainNav;