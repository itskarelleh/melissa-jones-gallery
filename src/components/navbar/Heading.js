import React from 'react';

const Heading = () => {
    return (
        <div className="head">
            <figure>
                <img className="profile" src={require('../../static/profile-pic.jpg')} alt="author-profile-pic" />                
            </figure>
            <h1 style={{ color: "var(--text-light)"}}>Melissa Jones</h1>
            <h6>Photographer and Haiku Writer</h6>
        </div>
    )
}

export default Heading;