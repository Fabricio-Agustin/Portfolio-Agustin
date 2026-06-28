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
    <span className="TechTag" itemProp="itemListElement">
      <i className={icon} aria-hidden="true"></i>
      <span itemProp="name">{name}</span>
    </span>
  );
}

function Categoria({ categoria, tecnologias }) {
  return (
    <article 
      className="Categoria" 
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <h3 itemProp="name">{categoria}</h3>
      
      <meta itemProp="description" content={`Tecnologías de desarrollo enfocadas en ${categoria}`} />

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
  const todasLasTechs = DATA_HABILIDADES.flatMap(cat => cat.tecnologias.map(t => t.name));

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://tusitioweb.com/habilidades/#profilepage",
        "url": "https://tusitioweb.com/habilidades",
        "name": "Skills y Tecnologías de Agustín Gibaut",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://tusitioweb.com/#person",
          "name": "Agustín Gibaut",
          "jobTitle": "Frontend Developer",
          "knowsAbout": todasLasTechs 
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Skills y Stack Tecnológico | Agustín Gibaut | Frontend React</title>
        <meta
          name="description"
          content="Explora el stack tecnológico de Agustín Gibaut. Desarrollo frontend y backend especializado en React, JavaScript, TypeScript, Node.js, arquitecturas REST y bases de datos SQL/NoSQL."
        />
        <meta
          name="keywords"
          content="Agustín Gibaut, React Developer stack, JavaScript senior skills, TypeScript frontend, Node.js Express backend, PostgreSQL, MongoDB, Docker dev, git workflow, Córdoba programador"
        />
        <link rel="canonical" href="https://tusitioweb.com/habilidades" />
        <meta name="robots" content="index, follow, max-snippet:-1" />

        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stack Tecnológico y Competencias | Agustín Gibaut" />
        <meta
          property="og:description"
          content="Revisá las tecnologías, herramientas de diseño y entornos de desarrollo que utilizo para construir aplicaciones web eficientes."
        />
        <meta property="og:url" content="https://tusitioweb.com/habilidades" />
        <meta property="og:site_name" content="Portfolio Agustín Gibaut" />
        <meta property="og:image" content="https://tusitioweb.com/assets/foto.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Habilidades Técnicas | Agustín Gibaut" />
        <meta name="twitter:description" content="Especialización en entornos de desarrollo Frontend modernos con React, TypeScript y herramientas avanzadas." />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section id="habilidades" className="Habilidades" aria-labelledby="habilidades-titulo">
        <h2 id="habilidades-titulo" className="Subtitulo">Habilidades Técnicas</h2>

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