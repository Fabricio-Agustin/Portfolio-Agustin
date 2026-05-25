import { memo } from 'react';

import factsImg from '../assets/facts.png';

const PROYECTOS = [
  {
    id: 1,
    nombre: 'FACTS KODE',

    descripcion:
      'Landing page moderna desarrollada con HTML, CSS y JavaScript puro para una agencia digital enfocada en desarrollo web y soluciones tecnológicas. El proyecto cuenta con diseño responsive, estructura limpia, animaciones suaves y una identidad visual profesional orientada a negocios digitales.',

    imagen: factsImg,

    github: 'https://github.com/Fabricio-Agustin/web-facts',

    sitio: 'https://web-facts.vercel.app/',

    tecnologias: [
      {
        icono: 'fa-brands fa-html5',
        nombre: 'HTML5'
      },

      {
        icono: 'fa-brands fa-css3-alt',
        nombre: 'CSS3'
      },

      {
        icono: 'fa-brands fa-js',
        nombre: 'JavaScript'
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
            alt={nombre}
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

              Ver Código
            </a>

            <a
              href={sitio}
              target="_blank"
              rel="noopener noreferrer"
              className="BtnSitio"
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>

              Ver Sitio
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