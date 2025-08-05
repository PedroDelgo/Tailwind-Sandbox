import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white text-center py-6 space-y-4">
      <p>Feito por PedroDelgo</p>
      <div className="flex justify-center space-x-6 text-xl">
        <a href="https://github.com/PedroDelgo" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/pedrodelgo" target="_blank"><FaLinkedin /></a>
        <a href="mailto:pedro@email.com"><FaEnvelope /></a>
        <a href="tel:+5599999999999"><FaPhone /></a>
      </div>
    </footer>
  );
}

export default Footer;
