import React from 'react';
import { Helmet } from 'react-helmet-async';

const CONFIG_EDUCACION = {
  urlBase: "https://portfolio-agustin-gibaut-ecru.vercel.app",
  ubicacion: "Córdoba, Argentina"
};

const EDUCACION = [
  {
    id: 1,
    puesto: "Tecnicatura Superior en Desarrollo de Software",
    periodo: "Actualidad", 
    descripcion:
      "Instituto Técnico Superior Politécnico Córdoba. Formación centrada en la programación, algoritmos, bases de datos, metodologías de desarrollo y construcción de sistemas de software."
  },
  {
    id: 2,
    puesto: "Educación Secundaria Completa",
    periodo: "2023",
    descripcion:
      "Formación académica general con título en economía secundario completo, sentando las bases analíticas y de resolución de problemas."
  }
];

function TarjetaEducacion({ puesto, periodo, descripcion }) {
  return (
    <article className="Trabajo"> 
      <div className="TrabajoTop">
        <h3>{puesto}</h3>
        <span className="Fecha">
          {periodo}
        </span>
      </div>
      <p>{descripcion}</p>
    </article>
  );
}

function Educacion() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Agustín Gibaut",
    "additionalName": "Fabricio Agustín Gibaut Carrizo",
    "jobTitle": "Frontend Developer",
    "url": `${CONFIG_EDUCACION.urlBase}/educacion`,
    "image": `${CONFIG_EDUCACION.urlBase}/assets/foto.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Córdoba",
      "addressCountry": "AR"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Instituto Técnico Superior Politécnico Córdoba"
      }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Tecnicatura Superior en Desarrollo de Software"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "high school",
        "name": "Educación Secundaria Completa con orientación en Economía"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Agustín Gibaut | Educación y Formación</title>
        <meta
          name="description"
          content={`Formación académica de Agustín Gibaut. Estudiante de Desarrollo de Software en el Instituto Técnico Superior Politécnico Córdoba y estudios secundarios completos en ${CONFIG_EDUCACION.ubicacion}.`}
        />
        <meta
          name="keywords"
          content="Agustín Gibaut, educación, estudios, Politécnico Córdoba, Desarrollo de Software, Frontend Developer, React, Córdoba"
        />
        <meta name="author" content="Agustín Gibaut" />
        <link rel="canonical" href={`${CONFIG_EDUCACION.urlBase}/educacion`} />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Córdoba" />

        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Agustín Gibaut | Educación y Formación" />
        <meta
          property="og:description"
          content="Conoce la trayectoria académica y estudios en desarrollo de software de Agustín Gibaut."
        />
        <meta property="og:url" content={`${CONFIG_EDUCACION.urlBase}/educacion`} />
        <meta property="og:site_name" content="Portfolio Agustín Gibaut" />
        <meta property="og:image" content={`${CONFIG_EDUCACION.urlBase}/assets/foto.png`} />
        <meta property="og:image:alt" content="Agustín Gibaut - Frontend Developer" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agustín Gibaut | Educación y Formación" />
        <meta name="twitter:description" content="Estudios académicos y formación en tecnología y software." />
        <meta name="twitter:image" content={`${CONFIG_EDUCACION.urlBase}/assets/foto.png`} />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <section className="Experiencia" aria-labelledby="educacion-titulo"> 
        <h2 id="educacion-titulo" className="Subtitulo">
          Educación y Formación
        </h2>

        {EDUCACION.map((estudio) => (
          <TarjetaEducacion
            key={estudio.id}
            puesto={estudio.puesto}
            periodo={estudio.periodo}
            descripcion={estudio.descripcion}
          />
        ))}
      </section>
    </>
  );
}

export default Educacion;