import './App.css';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Inicio from './pages/Inicio.jsx';
import Habilidades from './pages/Habilidades.jsx';
import Experiencia from './pages/Experiencia.jsx';
import Proyectos from './pages/Proyectos.jsx';
import Contacto from './pages/Contacto.jsx';

function App() {
  return (
    <>
      <Navbar />

      <main>

        <section id="inicio">
          <Inicio />
        </section>

        <div className="Divisor"></div>

        <section id="habilidades">
          <Habilidades />
        </section>

        <div className="Divisor"></div>

        <section id="experiencia">
          <Experiencia />
        </section>

        <div className="Divisor"></div>

        <section id="proyectos">
          <Proyectos />
        </section>

        <div className="Divisor"></div>

        <section id="contacto">
          <Contacto />
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;