import React from 'react';
import { Helmet } from 'react-helmet-async';

function Contacto() {
    return (
        <>
            <Helmet>
                <title>Contacto | Agustín Gibaut | Frontend Developer React</title>

                <meta
                    name="description"
                    content="Contactá a Agustín Gibaut para proyectos de desarrollo web, aplicaciones React, JavaScript, Node.js o colaboraciones profesionales."
                />

                <meta
                    name="keywords"
                    content="Contacto Agustín Gibaut, Frontend Developer, React Developer, JavaScript, Node.js, Desarrollo Web"
                />

                <meta name="robots" content="index, follow" />
            </Helmet>

            <section className="Contacto">

                <h2 className="Subtitulo">
                    Contacto
                </h2>

                <div className="ContactoInfo">

                    <div className="ContactoTop">
                        <h3>
                            ¿Hablamos sobre tu próximo proyecto?
                        </h3>
                    </div>

                    <p>
                        Si estás buscando un desarrollador frontend o querés
                        conversar sobre desarrollo web, React, JavaScript,
                        Node.js o nuevas oportunidades laborales, no dudes
                        en ponerte en contacto conmigo.
                    </p>

                    <ul className="LinksContacto">

                        <li>
                            <a href="mailto:agustingibautcarrizo@gmail.com">
                                agustingibautcarrizo@gmail.com
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://www.linkedin.com/in/fabricio-agustin-gibaut-carrizo/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://github.com/Fabricio-Agustin"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </li>

                    </ul>

                </div>

            </section>
        </>
    );
}

export default Contacto;