import { memo } from 'react';

import documentacion from '../assets/docu.png';

const PROYECTOS = [
  {
    id: 1,

    nombre: 'BARBER LIFE',

    descripcion:
      'Barber Life es una plataforma web para la gestión integral de barberías desarrollada como proyecto académico. Permite administrar turnos, clientes, servicios y personal mediante una interfaz moderna construida con Angular y TypeScript. El backend fue desarrollado con Python y Django, implementando una arquitectura escalable y orientada a la administración eficiente del negocio. El proyecto fue gestionado mediante metodologías ágiles Scrum e incluye documentación funcional y técnica.',

    imagen: documentacion,

    github: 'https://github.com/Fabricio-Agustin/documentacion-abp',

    sitio: 'https://barber-life.vercel.app/',

    tecnologias: [
      {
        icono: 'fa-brands fa-angular',
        nombre: 'Angular'
      },
      {
        icono: 'fa-brands fa-python',
        nombre: 'Python'
      },
      {
        icono: 'fa-solid fa-server',
        nombre: 'Django'
      },
      {
        icono: 'fa-solid fa-code',
        nombre: 'TypeScript'
      }
    ]
  }
];

const TarjetaProyecto = memo(
  ({
    nombre,
    descripcion,
    imagen,
    github,
    sitio,
    tecnologias
  }) => {
    return (
      <article className="ProyectoCard">
        <a
          href={sitio}
          target="_blank"
          rel="noopener noreferrer"
          className="ProyectoImagen"
        >
          <img
            src={imagen}
            alt={`Proyecto ${nombre}`}
            loading="lazy"
          />
        </a>

        <div className="ProyectoContenido">
          <h3>{nombre}</h3>

          <p>{descripcion}</p>

          <div className="ProyectoTech">
            {tecnologias.map((tech) => (
              <div
                key={tech.nombre}
                className="TechItem"
              >
                <i
                  className={tech.icono}
                  title={tech.nombre}
                ></i>

                <span>{tech.nombre}</span>
              </div>
            ))}
          </div>

          <div className="ProyectoLinks">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="BtnGithub"
            >
              <i className="fa-brands fa-github"></i>
              Ver Repositorio
            </a>

            <a
              href={sitio}
              target="_blank"
              rel="noopener noreferrer"
              className="BtnSitio"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              Ver Proyecto
            </a>
          </div>
        </div>
      </article>
    );
  }
);

TarjetaProyecto.displayName = 'TarjetaProyecto';

function Proyectos() {
  return (
    <section
      id="proyectos"
      className="Proyectos"
    >
      <h2 className="Subtitulo">
        Proyectos
      </h2>

      <div className="ProyectosGrid">
        {PROYECTOS.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.id}
            {...proyecto}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;