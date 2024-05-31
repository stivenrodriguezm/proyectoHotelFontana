import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section scroll-margin-top">
      <div className="contact-container">
        <div className="contact-form">
          <h4>Contacto</h4>
          <h2>Estamos para ayudarte</h2>
          <p>
            Contáctenos para cualquier consulta o reserva. Nuestro equipo dedicado está disponible las 24 horas del día para hacer de su estancia en el Hotel Fontana Bogotá una experiencia excepcional.
          </p>
          <form>
            <label htmlFor="name">Nombre *</label>
            <input type="text" id="name" name="name" placeholder="Marco Sotelo" required />
            
            <label htmlFor="email">Correo electrónico *</label>
            <input type="email" id="email" name="email" placeholder="correo@sitioweb.com" required />
            
            <label htmlFor="phone">Número de teléfono *</label>
            <input type="tel" id="phone" name="phone" placeholder="57-312-254-8855" required />
            
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" placeholder="Tu mensaje"></textarea>
            
            <div className="form-check">
              <input type="checkbox" id="consent" name="consent" required />
              <label htmlFor="consent">
                Autorizo a este sitio web a almacenar mi envío para que puedan responder a mi consulta.
              </label>
            </div>
            
            <button type="submit" className="submit-btn">Enviar</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d360.81662371248007!2d-74.09306868532892!3d4.63064962084902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b5a5a095007%3A0x5d6c8ba788c0a860!2sHotel%20Fontana%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1717182934066!5m2!1ses!2sco" 
              width="500" 
              height="400" 
              style={{ border: 0 }} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">

            </iframe>
          </div>
          <div className="info-box">
            <h4>Contáctanos</h4>
            <p><a href="mailto:stivenrodriguez1996m@gmail.com">contacto@fontanabogota.com</a></p>
            <h4>Ubicación</h4>
            <p>Bogotá, DC CO</p>
            <h4>Horario:</h4>
            <ul>
              <li>Atención 24 horas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
