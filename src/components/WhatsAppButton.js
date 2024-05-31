import React from 'react';
import './WhatsAppButton.css';
import whatsappLogo from '../assets/whatsapp-logo.png';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappLogo} alt="Chat on WhatsApp" />
    </a>
  );
}

export default WhatsAppButton;
