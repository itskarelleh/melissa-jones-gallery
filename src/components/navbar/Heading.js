import React from 'react';

const Heading = () => {
    return (
        <div className="head">
            <figure>
                <img className="profile" src={require('../../static/profile-pic.jpg')} alt="author-profile-pic" />                
            </figure>
            <h1>Melissa Jones</h1>
            <p>Photographer and Haiku Writer</p>
        </div>
    )
}

export default Heading;