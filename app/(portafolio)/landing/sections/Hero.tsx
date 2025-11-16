import Image from 'next/image';

import '../styles/Hero.css';
import fotoCentral from '@/app/fotografias/f9.jpg';

export default function Hero() {
  return (
    <section id="hero" className="chl-hero">
      <div className="container chl-hero-inner">
        {/* Heading centrado */}
        <header className="chl-hero-heading" aria-label="Presentación">
          {/* <p className="chl-hero-kicker">Psicólogo Organizacional</p> */}

          {/* Título en dos líneas con dos familias tipográficas */}
          <h1 className="chl-hero-title">
            <span className="thin">Psicólogo</span>
            <span className="bold">Christian Felipe Meneses Santana</span>
          </h1>

          <p className="chl-hero-sub">
            Selección de talento, desarrollo humano y bienestar laboral con una mirada
            crítica y humana de la salud mental. Con base en Cali, Colombia.
          </p>

          <div className="chl-hero-cta">
            <a href="#contact" className="btn btn-primary">Solicitar consulta</a>
          </div>
        </header>

        {/* Imagen centrada */}
        <figure className="chl-hero-figure">
          <div className="img-frame">
            <Image
              src={fotoCentral}
              alt="Christian Felipe Meneses Santana"
              priority
              sizes="(max-width: 768px) 88vw, 560px"
            />
          </div>
   
        </figure>
        <section className="chl-hero-focus" aria-label="Enfoques principales">
          <article className="focus-item">
            <h3 className='sub'>Selección de Talento</h3>
            <p>Procesos de reclutamiento, entrevistas por competencias y ajuste al perfil.</p>
          </article>

          <article className="focus-item">
            <h3 className='sub'>Desarrollo Humano</h3>
            <p>Planes de formación, clima y cultura; acompañamiento a equipos y líderes.</p>
          </article>

          <article className="focus-item">
            <h3 className='sub'>Bienestar Laboral</h3>
            <p>Intervenciones con enfoque humano en salud mental y prevención del riesgo psicosocial.</p>
          </article>
        </section>
      </div>
    </section>
  );
}
