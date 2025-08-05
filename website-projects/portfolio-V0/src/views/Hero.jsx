import React from 'react';

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <h1 className="text-5xl font-bold mb-4 z-10">Pedro Delgado</h1>
      <h2 className="text-2xl font-light z-10">Desenvolvedor Frontend</h2>
      <div className="absolute inset-0 z-0 animate-pulse opacity-10">
        {/* Exemplo de formas geométricas animadas */}
        <div className="w-32 h-32 bg-white rounded-full absolute top-10 left-10 animate-bounce"></div>
        <div className="w-48 h-48 border-4 border-white rounded-full absolute bottom-20 right-20 animate-spin-slow"></div>
      </div>
    </section>
  );
}

export default Hero;