import { memo } from 'react';

import documentacion from '../assets/argbroker.png';
import cerditoBank from '../assets/cerdito.png';

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
  },
  {
    id: 2,
    nombre: 'CERDITO BANK',
    descripcion:
      'Cerdito Bank es una aplicación web de simulación bancaria desarrollada con JavaScript. Fue creada con fines educativos para profundizar en conceptos fundamentales del desarrollo frontend, como el uso de LocalStorage para persistencia de datos, autenticación de usuarios, validaciones, manipulación del DOM, gestión de sesiones y buenas prácticas relacionadas con la seguridad en aplicaciones web. Permite realizar operaciones bancarias simuladas, consultar movimientos y administrar cuentas en un entorno de aprendizaje interactivo.',
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