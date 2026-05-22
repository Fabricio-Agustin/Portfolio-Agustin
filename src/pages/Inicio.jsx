import React from 'react';
import fotoPerfil from '../assets/foto.png'; 

function Inicio() {
  return (
    <section id="inicio" className="Hero">

      <div className="Inicio">
        <header className="InicioHeader">
          <h1 className="Titulo">Agustín Gibaut.</h1>
          <p className="Descripcion">
            Estudiante de Desarrollo de Software.
          </p>
        </header>

        <p className="Formacion">
          Próximo a recibirme como Técnico en Desarrollo de Software.
        </p>

        <address className="Email">
          Gmail: <a href="mailto:agustingibautcarrizo@gmail.com">agustingibautcarrizo@gmail.com</a>
        </address>

        <nav>
          <ul className="Redes">
            <li>
              <a href="https://www.linkedin.com/in/fabricio-agustin-gibaut-carrizo/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Fabricio-Agustin" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <figure className="FotoPerfil">
        <img src={fotoPerfil} alt="Foto de perfil de Agustín Gibaut"/>
      </figure>

    </section>
  );
}

export default Inicio;