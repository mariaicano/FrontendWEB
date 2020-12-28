import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; Nombre de la página - Todos los derechos reservados {new Date().getFullYear()}</p>
    </footer>
  ); 
}

export default Footer;