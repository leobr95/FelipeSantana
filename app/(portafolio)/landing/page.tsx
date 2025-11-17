import './styles/theme.css';

import NavBar from './../../components/NavBar';
import About from './sections/About';
import Activities from './sections/Activities';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Services from './sections/Services';

export const metadata = {
  title: 'Christian Felipe Meneses Santana · Psicólogo Organizacional',
  description:
    'Selección de talento, desarrollo humano y bienestar laboral en Cali, Colombia.',
};

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <section id="activities" className="section container">
          <Activities />
        </section>
        <section id="services" className="section container">
          <Services />
        </section>
        <section id="blog" className="section container">
          <Blog />
        </section>
        <section id="about" className="section">
  <About />
</section>
        <section id="contact" className="section container">
          <Contact />
        </section>
      </main>
      <footer className="chl-footer">
        <div className="container chl-footer-inner">
          <small>© {new Date().getFullYear()} Christian Felipe Meneses Santana</small>
          <nav className="chl-footer-links">
            <a href="#services">Servicios</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contacto</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
