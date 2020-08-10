import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <div className="menu">
            <ul style={{ textAlign: "center" }}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/gallery">Gallery</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;