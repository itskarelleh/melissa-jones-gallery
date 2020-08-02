import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    )
}

export default Menu;