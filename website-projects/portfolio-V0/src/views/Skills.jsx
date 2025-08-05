import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    });

    document.querySelectorAll('.skill-card').forEach(el => observer.observe(el));
  }, []);

  const skills = ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React'];

  return (
    <section className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold mb-8">Ferramentas que domino</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {skills.map(skill => (
          <div
            key={skill}
            className="skill-card opacity-0 translate-y-4 transition-all duration-700 transform text-center p-4 bg-white rounded shadow"
          >
            <p className="text-xl font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;