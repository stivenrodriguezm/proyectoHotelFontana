import React from 'react';
import './Rooms.css';
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/room3.jpg';
import room4 from '../assets/room4.jpg';
import room5 from '../assets/room5.jpg';
import room6 from '../assets/room6.jpg';

function Rooms() {
  return (
    <section id="rooms" className="rooms-section scroll-margin-top">
      <div className="rooms-container">
        <h4>Habitaciones excepcionales</h4>
        <h2>Experiencias personalizadas solo para usted.</h2>
        <p>
        Disfrute de servicios personalizados que atienden todas sus necesidades. Desde alta gastronomía hasta tratamientos exclusivos de spa, garantizamos una estancia memorable en el Hotel Fontana Bogotá.
        </p>
        <div className="rooms-grid">
          <div className="room-card">
            <img src={room1} alt="Luxurious accommodation" />
            <div className="room-info">
              <h3>Habitación tipo 1</h3>
              <p>Indulge in opulent living at our exquisite suites.</p>
            </div>
          </div>
          <div className="room-card">
            <img src={room2} alt="Gourmet dining" />
            <div className="room-info">
              <h3>Habitación tipo 2</h3>
              <p>Savor culinary delights at our fine dining restaurant.</p>
            </div>
          </div>
          <div className="room-card">
            <img src={room3} alt="Relaxing spa treatments" />
            <div className="room-info">
              <h3>Habitación tipo 3</h3>
              <p>Rejuvenate your senses at our tranquil spa oasis.</p>
            </div>
          </div>
          <div className="room-card">
            <img src={room5} alt="Event spaces" />
            <div className="room-info">
              <h3>Habitación tipo 4</h3>
              <p>Host memorable events in our versatile venues.</p>
            </div>
          </div>
          <div className="room-card">
            <img src={room6} alt="Concierge services" />
            <div className="room-info">
              <h3>Habitación tipo 5</h3>
              <p>Experience personalized assistance from our knowledgeable concierge team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
