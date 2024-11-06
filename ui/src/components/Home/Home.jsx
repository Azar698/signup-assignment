import React from 'react';

import {Link} from 'react-router-dom'

import './index.css'; 

const Home = () => {
  return (
    <div className='home-section'>
      <nav className="navbar">
        <h2 className='brand-name'>MY APP</h2>
        <div className="nav-buttons">
          <Link to="/"><button className="login-btn">Login</button></Link>
          <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
        </div>
      </nav>
      <section className="hero">
        <h1 className="heading">Hello, User!</h1>
        <p className='greet-text'>We're glad to have you here. Explore our features and enjoy your stay!</p>
      </section>
    </div>
  );
}

export default Home;
