import React from 'react';
import './About.css';
import aboutImage from '../assets/about-image.png';

function About() {
  return (
    <section id="about" className="about-section scroll-margin-top">
      <div className="about-content">
        <div className="text-content">
          <h4>Un Refugio de Tranquilidad en el Corazón de Bogotá</h4>
          <h2>Descubre la combinación perfecta de lujo y comodidad en Hotel Fontana Bogotá</h2>
          <p>
            En Hotel Fontana Bogotá, te ofrecemos una experiencia única de hospitalidad en el vibrante centro de la ciudad. 
            Nuestras habitaciones elegantes y acogedoras están diseñadas para proporcionarte el máximo confort durante tu estancia. 
            Ya sea que estés aquí por negocios o por placer, nuestro dedicado equipo está comprometido a hacer de tu visita una experiencia inolvidable. 
            Disfruta de nuestros servicios de alta calidad, que incluyen un gimnasio moderno, un restaurante gourmet y un spa relajante. 
            ¡Ven y vive la diferencia en Hotel Fontana Bogotá, donde cada detalle está pensado para tu bienestar!
          </p>
          <a href="#contact" className="contact-link">Nuestros servicios</a>  
        </div>
        <div className="image-content">
          <img src={aboutImage} alt="Hotel Fontana Bogotá" />
        </div>
      </div>
    </section>
  );
}

export default About;
