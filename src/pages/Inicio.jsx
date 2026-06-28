import React from 'react';
import { Helmet } from 'react-helmet-async';
import fotoPerfil from '../assets/foto.png';

function Inicio() {
  return (
    <>
      <Helmet>
        <title>Agustín Gibaut | Desarrollador Frontend React</title>

        <meta
          name="description"
          content="Portfolio de Agustín Gibaut, desarrollador frontend especializado en React, JavaScript, Vite y desarrollo web responsive."
        />

        <meta
          name="keywords"
          content="Agustín Gibaut, Fabricio Agustín Gibaut Carrizo, React Developer, Frontend Developer, JavaScript, Vite, Portfolio"
        />

        <meta name="author" content="Agustín Gibaut" />

        <meta property="og:title" content="Agustín Gibaut | Portfolio" />
        <meta
          property="og:description"
          content="Portfolio profesional de Agustín Gibaut."
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section id="inicio" className="Hero">

        <div className="Inicio">
          <header className="InicioHeader">
            <h1 className="Titulo">Agustín Gibaut</h1>

            <p className="Descripcion">
              Estudiante de Desarrollo de Software.
            </p>
          </header>

          <p className="Formacion">
            Próximo a recibirme como Técnico en Desarrollo de Software.
          </p>

          <address className="Email">
            Gmail:
            <a href="mailto:agustingibautcarrizo@gmail.com">
              agustingibautcarrizo@gmail.com
            </a>
          </address>

          <nav>
            <ul className="Redes">
              <li>
                <a
                  href="https://www.linkedin.com/in/fabricio-agustin-gibaut-carrizo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Fabricio-Agustin"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <figure className="FotoPerfil">
          <img
            src={fotoPerfil}
            alt="Foto de perfil de Agustín Gibaut"
          />
        </figure>

      </section>
    </>
  );
}

export default Inicio;