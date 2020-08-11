import React from 'react';
import Heading from './Heading';
import Menu from './Menu';

const MobileMenu = ({ toggle, setToggle }) => {

    const handleClick = (e) => {
        const menu = document.getElementById('mobile');
        if(menu.classList.contains('mobile')) {
            setToggle({ display: 'none' });
        }
    }
    return(
        <aside style={toggle} id="mobile" className="mobile hide-on-desktop show-on-mobile">
            <div className="container">
                <button className="close-menu" onClick={handleClick}>X</button>
                <div className="wrapper">
                    <Heading />
                    <Menu className="mobile-menu"/>
                </div>
            </div>
        </aside>
    )
}

export default MobileMenu;