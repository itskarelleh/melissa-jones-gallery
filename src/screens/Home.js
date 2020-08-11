import React from 'react';
const Home = () => {
    return(
        <header className="hero">
            <div className="hero-text">
                <h1>Hi! I'm Melissa Jones</h1>
                <p>and I love to take breathtaking photos</p>
            </div>
            <figure>
                <img src={require('../static/pexels-ena-marinkovic-3622632.jpg')} />
            </figure>
        </header>
    )
}

export default Home;