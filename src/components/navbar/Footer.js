import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <ul>
                <li>
                    <Link to="www.facebook.com">
                        <i class="fab fa-facebook-f"></i>
                    </Link>
                </li>
                <li>
                    <Link to="www.instagram.com">
                        <i class="fab fa-instagram"></i>  
                    </Link>
                </li>
                <li>
                    <Link to="www.twitter.com">
                        <i class="fab fa-twitter"></i> 
                    </Link>
                </li>
                <li>
                    <Link to="www.pinterest.com">
                        <i class="fab fa-pinterest"></i> 
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;