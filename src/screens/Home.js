import React from 'react';
const Home = () => {
    return(
        <header className="hero">
            <div className="hero-text">
                <h1>Hi! I'm Melissa Jones</h1>
                <h3>and I love to take breathtaking photos</h3>
            </div>
            <figure>
                <img src={require('../static/pexels-ena-marinkovic-3622632.jpg')} />
            </figure>
        </header>
    )
}

export default Home;