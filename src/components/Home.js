import React from 'react';
import Button from './Button';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="overlay"></div>
      <div className="home-content">
        <h2>Hotel Fontana Bogotá</h2>
        <p>Acogedor y moderno alojamiento en Bogotá</p>
        <Button>VIEW SERVICES</Button>
      </div>
    </section>
  );
}

export default Home;
