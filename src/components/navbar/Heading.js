import React from 'react';
import { Link } from 'react-router-dom';
const Heading = () => {
    return (
        <div className="head">
            <figure className="hide-on-mobile">
                <img className="profile" src={require('../../static/profile-pic-1x1.jpg')} alt="author-profile-pic" />                
            </figure>
            <Link to="/" style={{ textDecoration: 'none'}}>
                <h1 className="site-title">Melissa Jones</h1>
            </Link>
            <h6 className="hide-on-mobile">Photographer</h6>
        </div>
    )
}

export default Heading;