import { memo } from 'react';

import documentacion from '../assets/argbroker.png';

const PROYECTOS = [
  {
    id: 1,

    nombre: 'ARGBROKER',

    descripcion:
      'ArgBroker es una aplicación de consola desarrollada en Python y MySQL para la simulación de compra y venta de acciones. Permite gestionar operaciones bursátiles, consultar el historial completo de transacciones realizadas, administrar usuarios y visualizar la cartera de inversiones. El proyecto fue diseñado utilizando una base de datos relacional para garantizar la persistencia de la información y aplicar buenas prácticas de programación orientadas a la gestión eficiente de datos financieros.',

    imagen: documentacion,

    github: 'https://github.com/Fabricio-Agustin/ARGBroker',

    sitio: 'https://github.com/Fabricio-Agustin/ARGBroker',

    tecnologias: [
      {
        icono: 'fa-brands fa-python',
        nombre: 'Python'
      },
      {
        icono: 'fa-solid fa-database',
        nombre: 'MySQL'
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