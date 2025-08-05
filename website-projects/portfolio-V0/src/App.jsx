import React from 'react';
import Hero from './views/Hero';
import Skills from './views/Skills';
import About from './views/About';
import Repositories from './views/Repositories';
import Footer from './views/Footer';

function App() {
  return (
    <div className="scroll-smooth">
      <Hero />
      <Skills />
      <About />
      <Repositories />
      <Footer />
    </div>
  );
}

export default App;