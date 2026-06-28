import React from 'react';
import { Helmet } from 'react-helmet-async';
import fotoPerfil from '../assets/foto.png';

const CONFIG_INICIO = {
  urlBase: "https://portfolio-agustin-gibaut-ecru.vercel.app",
  email: "agustingibautcarrizo@gmail.com",
  ubicacion: "Córdoba, Argentina",
  institucion: "Instituto Técnico Superior Politécnico Córdoba",
  redes: [
    { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/fabricio-agustin-gibaut-carrizo/" },
    { id: "github", label: "GitHub", url: "https://github.com/Fabricio-Agustin" }
  ]
};

function Inicio() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Agustín Gibaut",
    "additionalName": "Fabricio Agustín Gibaut Carrizo",
    "jobTitle": "Frontend Developer",
    "url": CONFIG_INICIO.urlBase,
    "image": `${CONFIG_INICIO.urlBase}/assets/foto.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Córdoba",
      "addressCountry": "AR"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": CONFIG_INICIO.institucion
    },
    "sameAs": CONFIG_INICIO.redes.map(red => red.url),
    "knowsAbout": [
      "React.js",
      "JavaScript",
      "Vite",
      "Frontend Development",
      "Software Development",
      "Responsive Web Design"
    ],
    "email": CONFIG_INICIO.email
  };

  return (
    <>
      <Helmet>
        <title>Agustín Gibaut | Desarrollador Frontend React</title>
        <meta
          name="description"
          content={`Portfolio profesional de Agustín Gibaut, Frontend Developer especialista en React, JavaScript y Vite. Técnico en Desarrollo de Software en ${CONFIG_INICIO.ubicacion}.`}
        />
        <meta
          name="keywords"
          content="Agustín Gibaut, Fabricio Agustín Gibaut Carrizo, desarrollador frontend, React developer Argentina, programador JavaScript Córdoba, Vite, software developer"
        />
        <meta name="author" content="Agustín Gibaut" />
        <link rel="canonical" href={CONFIG_INICIO.urlBase} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Córdoba" />

        <link rel="preload" as="image" href={fotoPerfil} />

        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agustín Gibaut | Desarrollador Frontend React" />
        <meta
          property="og:description"
          content="Explora los proyectos, formación y experiencia de Agustín Gibaut. Soluciones web modernas y eficientes con React y JavaScript."
        />
        <meta property="og:url" content={CONFIG_INICIO.urlBase} />
        <meta property="og:site_name" content="Portfolio Agustín Gibaut" />
        <meta property="og:image" content={`${CONFIG_INICIO.urlBase}/assets/foto.png`} />
        <meta property="og:image:alt" content="Agustín Gibaut - Frontend Developer" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agustín Gibaut | Frontend Developer" />
        <meta name="twitter:description" content="Portfolio profesional y proyectos de desarrollo frontend en React." />
        <meta name="twitter:image" content={`${CONFIG_INICIO.urlBase}/assets/foto.png`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section id="inicio" className="Hero">
        
        <div className="Inicio">
          <header className="InicioHeader">
            <h1 className="Titulo">Agustín Gibaut</h1>
            <p className="Descripcion">
              Estudiante de Desarrollo de Software.
            </p>
          </header>

          <p className="Formacion">
            Próximo a recibirme como <strong>Técnico en Desarrollo de Software</strong> en el <span>{CONFIG_INICIO.institucion}</span>.
          </p>

          <address className="Email">
            Gmail:
            <a href={`mailto:${CONFIG_INICIO.email}`}>
              {CONFIG_INICIO.email}
            </a>
          </address>

          <nav aria-label="Redes sociales profesionales">
            <ul className="Redes">
              {CONFIG_INICIO.redes.map((red) => (
                <li key={red.id}>
                  <a
                    href={red.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {red.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <figure className="FotoPerfil">
          <img
            src={fotoPerfil}
            alt="Foto de perfil profesional de Agustín Gibaut"
          />
        </figure>

      </section>
    </>
  );
}

export default Inicio;