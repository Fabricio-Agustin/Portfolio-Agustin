import React from 'react';
import { Helmet } from 'react-helmet-async';

const EXPERIENCIAS_LABORALES = [
  {
    id: 1,
    puesto: "Frontend Developer Freelance",
    periodo: "2024 - Actualidad",
    descripcion:
      "Desarrollo de interfaces web modernas y responsive para proyectos freelance, creación de componentes reutilizables en React, landing pages, mejoras visuales y optimización de experiencia de usuario."
  },
  {
    id: 2,
    puesto: "Atención al público - Rubro electrónica",
    periodo: "2019 - 2020",
    descripcion:
      "Atención al cliente, asesoramiento en productos electrónicos, gestión de ventas, control y reposición de stock, organización de mercadería y apoyo en tareas administrativas del local."
  }
];

function TarjetaTrabajo({ puesto, periodo, descripcion }) {
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

function Experiencia() {
  return (
    <>
      <Helmet>
        <title>Experiencia | Agustín Gibaut | Frontend Developer React</title>

        <meta
          name="description"
          content="Experiencia profesional de Agustín Gibaut como desarrollador Frontend especializado en React, JavaScript, desarrollo web responsive y proyectos freelance."
        />

        <meta
          name="keywords"
          content="Agustín Gibaut, experiencia, Frontend Developer, React, JavaScript, Freelance, Desarrollo Web"
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="Experiencia">
        <h2 className="Subtitulo">
          Experiencia Profesional
        </h2>

        {EXPERIENCIAS_LABORALES.map((trabajo) => (
          <TarjetaTrabajo
            key={trabajo.id}
            puesto={trabajo.puesto}
            periodo={trabajo.periodo}
            descripcion={trabajo.descripcion}
          />
        ))}
      </section>
    </>
  );
}

export default Experiencia;