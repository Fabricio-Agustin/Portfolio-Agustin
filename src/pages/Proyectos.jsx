import { memo } from 'react';
import pizarraImg from '../assets/pizarra.png';

const PROYECTOS = [
  {
    id: 1,
    nombre: 'Pizarra',
    descripcion: 'Aplicación web para crear anotaciones, organizar ideas y gestionar contenido de manera visual e intuitiva en tiempo real.',
    imagen: pizarraImg,
    github: '#', 
    sitio: '#',  
    tecnologias: [
      { icono: 'fa-brands fa-react', nombre: 'React' },
      { icono: 'fa-brands fa-js', nombre: 'JavaScript' }
    ]
  }
];

const TarjetaProyecto = memo(({ nombre, descripcion, imagen, github, sitio, tecnologias }) => {
  const tieneSitio = sitio && sitio !== '#';
  const tieneGithub = github && github !== '#';

  const ImagenProyecto = (
    <div className="ProyectoImagen">
      <img 
        src={imagen} 
        alt={`Captura del proyecto ${nombre}`} 
        loading="lazy" 
        decoding="async"
      />
    </div>
  );

  return (
    <article className="ProyectoCard">
      {tieneSitio ? (
        <a 
          href={sitio} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ProyectoImagenLink"
        >
          {ImagenProyecto}
        </a>
      ) : (
        ImagenProyecto
      )}

      <div className="ProyectoContenido">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>

        <div className="ProyectoTech">
          {tecnologias.map((tech, index) => (
            <i 
              key={`${tech.nombre}-${index}`} // Llave única y descriptiva
              className={tech.icono} 
              title={tech.nombre}
              aria-label={tech.nombre}
            ></i>
          ))}
        </div>

        <div className="ProyectoLinks">
          {tieneGithub && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="BtnGithub"
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
              Ver Código
            </a>
          )}

          {tieneSitio && (
            <a 
              href={sitio} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="BtnSitio"
            >
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              Ver Sitio
            </a>
          )}
        </div>
      </div>
    </article>
  );
});

TarjetaProyecto.displayName = 'TarjetaProyecto';

function Proyectos() {
  return (
    <section id="proyectos" className="Proyectos">
      <h2 className="Subtitulo">Proyectos</h2>
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