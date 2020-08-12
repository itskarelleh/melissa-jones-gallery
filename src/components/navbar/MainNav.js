import React from 'react';
import Head from './Heading';
import './Navbar.css';
import Menu from './Menu';
import Footer from './Footer';
const MainNav = ({ setToggle }) => {

    const toggleMenu = () => {
        setToggle({ display: 'block'});
    }

    return(
        <nav className="sidebar side-nav main-nav">
            <Head/>
            <div>
                <i onClick={toggleMenu} style={{ color: 'white' }}class="fas fa-bars hide-on-desktop show-on-mobile"></i>
            </div>
            <Menu/>
            <Footer />
        </nav>
    )
}

export default MainNav;