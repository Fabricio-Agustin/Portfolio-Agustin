import React from 'react';
import { Helmet } from 'react-helmet-async';

// Configuración centralizada de datos (Mejor práctica en React para mantenimiento)
const CONFIG_CONTACTO = {
    urlBase: "https://portfolio-agustin-gibaut-ecru.vercel.app",
    email: "agustingibautcarrizo@gmail.com",
    ubicacion: "Córdoba, Argentina",
    redes: [
        { 
            id: "linkedin", 
            label: "LinkedIn", 
            url: "https://www.linkedin.com/in/fabricio-agustin-gibaut-carrizo/" 
        },
        { 
            id: "github", 
            label: "GitHub", 
            url: "https://github.com/Fabricio-Agustin" 
        }
    ]
};

function Contacto() {
    // Estructura JSON-LD basada puramente en el esquema 'Person'
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Agustín Gibaut",
        "additionalName": "Fabricio Agustín Gibaut Carrizo",
        "jobTitle": "Frontend Developer",
        "url": `${CONFIG_CONTACTO.urlBase}/contacto`,
        "image": `${CONFIG_CONTACTO.urlBase}/assets/foto.png`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Córdoba",
            "addressCountry": "AR"
        },
        "sameAs": CONFIG_CONTACTO.redes.map(red => red.url),
        "knowsAbout": [
            "React.js",
            "JavaScript",
            "Frontend Development",
            "Node.js",
            "Web Development"
        ],
        "email": CONFIG_CONTACTO.email
    };

    return (
        <>
            <Helmet>
                {/* --- SEO BÁSICO EN EL HELMET --- */}
                <title>Agustín Gibaut | Frontend Developer React</title>
                <meta 
                    name="description" 
                    content={`Portfolio profesional de Agustín Gibaut. Contacto para desarrollo de aplicaciones web con React, JavaScript y Node.js en ${CONFIG_CONTACTO.ubicacion}.`} 
                />
                <meta 
                    name="keywords" 
                    content="Agustín Gibaut, React developer Córdoba, JavaScript, desarrollador frontend, programador freelance Argentina, Node.js, Web Vitals, Single Page Application SEO" 
                />
                <meta name="author" content="Agustín Gibaut" />
                <link rel="canonical" href={`${CONFIG_CONTACTO.urlBase}/contacto`} />
                
                {/* --- METAS MODERNAS Y GEOLOCALIZACIÓN --- */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
                <meta name="geo.region" content="AR-X" />
                <meta name="geo.placename" content="Córdoba" />

                {/* --- OPEN GRAPH (FACEBOOK / LINKEDIN) --- */}
                <meta property="og:locale" content="es_AR" />
                <meta property="og:type" content="profile" />
                <meta property="og:title" content="Agustín Gibaut | Frontend Developer React" />
                <meta property="og:description" content="Desarrollo de interfaces modernas, escalables y optimizadas. ¿Hablamos sobre tu próximo proyecto?" />
                <meta property="og:url" content={`${CONFIG_CONTACTO.urlBase}/contacto`} />
                <meta property="og:site_name" content="Portfolio Agustín Gibaut" />
                <meta property="og:image" content={`${CONFIG_CONTACTO.urlBase}/assets/foto.png`} />
                <meta property="og:image:alt" content="Agustín Gibaut - Frontend Developer" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* --- TWITTER CARDS --- */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Agustín Gibaut | Frontend Developer" />
                <meta name="twitter:description" content="Escribime para incorporar un desarrollador React a tu equipo o llevar adelante tu proyecto web." />
                <meta name="twitter:image" content={`${CONFIG_CONTACTO.urlBase}/assets/foto.png`} />

                {/* --- INYECCIÓN DE DATOS ESTRUCTURADOS --- */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            {/* --- HTML SEMÁNTICO LIMPIO Y OPTIMIZADO EN REACT --- */}
            <section className="Contacto" aria-labelledby="contacto-titulo">
                <h2 id="contacto-titulo" className="Subtitulo">
                    Contacto
                </h2>

                <div className="ContactoInfo">
                    <div className="ContactoTop">
                        <h3>¿Hablamos sobre tu próximo proyecto?</h3>
                    </div>

                    <p>
                        Si estás buscando un <strong>desarrollador frontend</strong> o querés
                        conversar sobre desarrollo web con <strong>React</strong>, <strong>JavaScript</strong>,
                        <strong>Node.js</strong> o nuevas oportunidades laborales, no dudes
                        en ponerte en contacto conmigo.
                    </p>

                    <p className="Ubicacion">
                        Ubicación actual: <span>{CONFIG_CONTACTO.ubicacion}</span>
                    </p>

                    <ul className="LinksContacto">
                        {/* Enlace estático para el Mailto */}
                        <li>
                            <a href={`mailto:${CONFIG_CONTACTO.email}`}>
                                {CONFIG_CONTACTO.email}
                            </a>
                        </li>

                        {/* Renderizado dinámico de redes mediante .map() con buenas prácticas */}
                        {CONFIG_CONTACTO.redes.map((red) => (
                            <li key={red.id}>
                                <a
                                    href={red.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {red.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Contacto;