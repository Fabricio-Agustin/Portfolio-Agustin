import React from 'react';

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

function TarjetaTrabajo({
  puesto,
  periodo,
  descripcion
}) {
  return (
    <div className="Trabajo">

      <div className="TrabajoTop">

        <h3>{puesto}</h3>

        <span className="Fecha">
          {periodo}
        </span>

      </div>

      <p>{descripcion}</p>

    </div>
  );
}

function Experiencia() {
  return (
    <section className="Experiencia">

      <h2 className="Subtitulo">
        Experiencia
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
  );
}

export default Experiencia;