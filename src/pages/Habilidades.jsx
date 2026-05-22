import React from 'react';

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
      <i className={icon}></i>
      {name}
    </span>
  );
}

function Categoria({ categoria, tecnologias }) {
  return (
    <div className="Categoria">
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
    </div>
  );
}

function Habilidades() {
  return (
    <section id="habilidades" className="Habilidades">

      <h2 className="Subtitulo">
        Habilidades
      </h2>

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
  );
}

export default Habilidades;