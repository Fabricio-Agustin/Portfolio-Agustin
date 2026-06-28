import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import documentacion from '../assets/argbroker.png';
import cerditoBank from '../assets/cerdito.png';

const PROYECTOS = [
  {
    id: 1,
    nombre: 'ARGBROKER',
    descripcion:
    'ArgBroker es una aplicación de consola desarrollada en Python y MySQL para la simulación de compra y venta de acciones. Permite gestionar operaciones bursátiles, consultar el historial de transacciones, administrar usuarios y visualizar la cartera de inversiones.',
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
  },
  {
    id: 2,
    nombre: 'CERDITO BANK',
    descripcion:
      'Cerdito Bank es una aplicación web desarrollada con JavaScript que simula operaciones bancarias utilizando LocalStorage, autenticación de usuarios, validaciones, manejo del DOM y gestión de sesiones.',
    imagen: cerditoBank,
    github: 'https://github.com/Fabricio-Agustin/Cerdito-banck',
    sitio: 'https://cerdito-banck.vercel.app/',
    tecnologias: [
      {
        icono: 'fa-brands fa-js',
        nombre: 'JavaScript'
      },
      {
        icono: 'fa-solid fa-hard-drive',
        nombre: 'LocalStorage'
      },
      {
        icono: 'fa-brands fa-html5',
        nombre: 'HTML5'
      },
      {
        icono: 'fa-brands fa-css3-alt',
        nombre: 'CSS3'
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
          aria-label={`Ver proyecto ${nombre}`}
        >
          <img
            src={imagen}
            alt={`Captura del proyecto ${nombre}`}
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
                  aria-hidden="true"
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
              <i
                className="fa-brands fa-github"
                aria-hidden="true"
              ></i>
              Ver Repositorio
            </a>

            <a
              href={sitio}
              target="_blank"
              rel="noopener noreferrer"
              className="BtnSitio"
            >
              <i
                className="fa-solid fa-arrow-up-right-from-square"
                aria-hidden="true"
              ></i>
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
    <>
      <Helmet>
        <title>Proyectos | Agustín Gibaut | Frontend Developer React</title>

        <meta
          name="description"
          content="Portfolio de proyectos desarrollados por Agustín Gibaut utilizando React, JavaScript, Python, Node.js, MySQL, HTML5 y CSS3."
        />

        <meta
          name="keywords"
          content="Agustín Gibaut, Portfolio, React, JavaScript, Python, MySQL, Node.js, Proyectos Web, Frontend Developer"
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <section
        id="proyectos"
        className="Proyectos"
      >
        <h2 className="Subtitulo">
          Proyectos Destacados
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
    </>
  );
}

export default Proyectos;