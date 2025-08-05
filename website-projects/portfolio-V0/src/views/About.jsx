import React from 'react';

function About() {
  const projects = [
    {
      title: 'Monitoria de React no CEUB',
      description: 'Curso prático sobre HTML, CSS, JS e React para alunos de tecnologia.',
    },
    {
      title: 'Projeto de Inclusão Digital',
      description: 'Capacitação em informática para a terceira idade com foco em acessibilidade.',
    },
  ];

  return (
    <section className="h-screen bg-white flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:space-x-12">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Sobre mim</h2>
        <p className="text-lg">
          Sou estudante de Ciência da Computação no CEUB, apaixonado por desenvolvimento web e por compartilhar conhecimento. Atuo como monitor voluntário e tenho experiência com projetos de impacto social.
        </p>
      </div>
      <div className="md:w-1/2 overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-4">
          {projects.map((project, index) => (
            <div key={index} className="min-w-[250px] bg-gray-100 p-4 rounded shadow-md">
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;