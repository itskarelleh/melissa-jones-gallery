import React from 'react';
import Heading from './Heading';
import Menu from './Menu';
const MobileMenu = () => {
    return(
        <aside className="mobile hide-on-desktop">
            <div className="container">
                <Heading />
                <Menu className="mobile-menu"/>
            </div>
        </aside>
    )
}

export default MobileMenu;