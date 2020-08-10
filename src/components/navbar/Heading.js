import React from 'react';

const Heading = () => {
    return (
        <div className="head">
            <figure>
                <img className="profile" src={require('../../static/profile-pic-1x1.jpg')} alt="author-profile-pic" />                
            </figure>
            <h1 className="site-title">Melissa Jones</h1>
            <h6>Photographer</h6>
        </div>
    )
}

export default Heading;