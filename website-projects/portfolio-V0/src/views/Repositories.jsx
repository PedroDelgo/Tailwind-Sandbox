import React from 'react';

const repos = [
  {
    title: 'Impossible Mission',
    description: 'Landing page com carrossel e animações inspiradas em Missão Impossível.',
    image: 'https://via.placeholder.com/300x180',
    link: 'https://github.com/PedroDelgo/Impossible-Mission'
  },
  {
    title: 'Kubo Frontend',
    description: 'Interface do sistema Kubo para gerenciamento de usuários.',
    image: 'https://via.placeholder.com/300x180',
    link: 'https://github.com/PedroDelgo/Kubo-Frontend'
  },
  {
    title: 'Tailwind Sandbox',
    description: 'Repositório de experimentos com componentes em Tailwind.',
    image: 'https://via.placeholder.com/300x180',
    link: 'https://github.com/PedroDelgo/Tailwind-Sandbox'
  },
  {
    title: 'Electronic Checkpoint',
    description: 'Sistema de controle eletrônico de presença com QR code.',
    image: 'https://via.placeholder.com/300x180',
    link: 'https://github.com/PedroDelgo/Electronic-Checkpoint'
  },
];

function Repositories() {
  return (
    <section className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Meus Repositórios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <img src={repo.image} alt={repo.title} className="mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">{repo.title}</h3>
            <p className="text-sm mb-4">{repo.description}</p>
            <a href={repo.link} target="_blank" className="text-blue-600 font-medium hover:underline">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Repositories;
