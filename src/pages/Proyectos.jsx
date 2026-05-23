const PROYECTOS = [
  {
    id: 1,
    nombre: 'Pizarra',
    descripcion:
      'Aplicación web para crear anotaciones, organizar ideas y gestionar contenido de manera visual e intuitiva en tiempo real.',

      //imagen
    imagen: '/src/assets/pizarra.png',

    // repo de github / proceso
    github: '',

    // sitio web. / proceso
    sitio: '',

    tecnologias: [
      { icono: 'fa-brands fa-react', nombre: 'React' },
      { icono: 'fa-brands fa-js', nombre: 'JavaScript' },
    ]
  }
]

function TarjetaProyecto({
  nombre,
  descripcion,
  imagen,
  github,
  sitio,
  tecnologias
}) {
  return (
    <article className="ProyectoCard">

      <a href={sitio} target="_blank" rel="noopener noreferrer" className="ProyectoImagenLink">

        <div className="ProyectoImagen">
          <img src={imagen} alt={`Captura del proyecto ${nombre}`}/>
        </div>

      </a>

      <div className="ProyectoContenido">

        <h3>{nombre}</h3>

        <p>
          {descripcion}
        </p>

        <div className="ProyectoTech">

          {tecnologias.map((tech, index) => (
            <i
              key={index}
              className={tech.icono}
              title={tech.nombre}
              aria-label={tech.nombre}
            ></i>
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
  )
}

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
  )
}

export default Proyectos