import React from 'react';
import { Helmet } from 'react-helmet-async';

const DATA_HABILIDADES = [
  {
    id: 1,
    categoria: "Frontend",
    tecnologias: [
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "TypeScript", icon: "fa-solid fa-code" },
      { name: "React", icon: "fa-brands fa-react" }
    ]
  },
  {
    id: 2,
    categoria: "Backend",
    tecnologias: [
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "Express", icon: "fa-solid fa-server" },
      { name: "Python", icon: "fa-brands fa-python" }
    ]
  },
  {
    id: 3,
    categoria: "Base de datos",
    tecnologias: [
      { name: "PostgreSQL", icon: "fa-solid fa-database" },
      { name: "Firebase", icon: "fa-solid fa-fire" },
      { name: "MongoDB", icon: "fa-solid fa-leaf" }
    ]
  },
  {
    id: 4,
    categoria: "Herramientas",
    tecnologias: [
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "Docker", icon: "fa-brands fa-docker" }
    ]
  }
];

function TechTag({ name, icon }) {
  return (
    <span className="TechTag">
      <i className={icon} aria-hidden="true"></i>
      {name}
    </span>
  );
}

function Categoria({ categoria, tecnologias }) {
  return (
    <article className="Categoria">
      <h3>{categoria}</h3>

      <div className="TecnologiasList">
        {tecnologias.map((tech) => (
          <TechTag
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
          />
        ))}
      </div>
    </article>
  );
}

function Habilidades() {
  return (
    <>
      <Helmet>
        <title>Habilidades | Agustín Gibaut | Frontend Developer React</title>

        <meta
          name="description"
          content="Conocé las habilidades técnicas de Agustín Gibaut como desarrollador frontend. Experiencia en React, JavaScript, TypeScript, Node.js, Express, Python, PostgreSQL, MongoDB, Firebase, Git, GitHub, Docker y Figma."
        />

        <meta
          name="keywords"
          content="Agustín Gibaut, React, JavaScript, TypeScript, Node.js, Express, Python, PostgreSQL, MongoDB, Firebase, Git, Docker, Frontend Developer"
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <section id="habilidades" className="Habilidades">
        <h2 className="Subtitulo">Habilidades Técnicas</h2>

        <div className="GridHabilidades">
          {DATA_HABILIDADES.map((item) => (
            <Categoria
              key={item.id}
              categoria={item.categoria}
              tecnologias={item.tecnologias}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Habilidades;