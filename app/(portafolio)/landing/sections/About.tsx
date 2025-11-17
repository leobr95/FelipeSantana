'use client';

import Image from 'next/image';
import '../styles/About.css';

// Foto usada antes en Hero
import fotoCentral from '@/app/fotografias/f7.jpg';
// Logo (ruta con espacios está bien si el archivo existe)
import logo from '@/app/fotografias/LOGO FELIPE SANTANA  (1).png';

export default function About() {
  return (
    <section id="about" className="chl-about">
      <div className="chl-about-fullbleed">
        <div className="container chl-about-inner">

          {/* Fila 1: Texto (izq) + Foto (der) */}
          <div className="chl-about-row">
            <div className="chl-about-col text">
              <h2 className="chl-about-title">Sobre mí</h2>
              <p className="chl-about-lead">
                Soy <strong>Christian Felipe Meneses Santana</strong>, Psicólogo Organizacional con enfoque en
                <strong> selección de talento</strong>, <strong>desarrollo humano</strong> y <strong>bienestar laboral</strong>.
                Trabajo con una mirada crítica y humana de la salud mental en el trabajo, integrando prácticas
                basadas en evidencia con una comunicación clara y cercana para acompañar personas, equipos y líderes.
              </p>
              <p className="chl-about-body">
                Diseño procesos de reclutamiento por competencias, planes de formación y estrategias de clima
                y cultura con métricas accionables. Mi objetivo es alinear las iniciativas de talento con los
                objetivos del negocio, promoviendo experiencias laborales más sanas, productivas y sostenibles.
              </p>
            </div>

            <div className="chl-about-col media">
              <div className="chl-about-mediaBox">
                <Image
                  src={fotoCentral}
                  alt="Christian Felipe Meneses Santana"
                  sizes="(max-width: 980px) 88vw, 520px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Fila 2 invertida: Logo (izq) + Texto (der) */}
          <div className="chl-about-row row-invert">
            <div className="chl-about-col media">
              <div className="chl-about-mediaBox logo-box">
                <Image
                  src={logo}
                  alt="Logo de la práctica"
                  sizes="(max-width: 980px) 88vw, 520px"
                  priority
                />
              </div>
            </div>

            <div className="chl-about-col text">
              <h3 className="chl-about-subtitle">Sobre la práctica</h3>
              <p className="chl-about-body">
                Acompaño a organizaciones y personas en procesos de talento end-to-end:
                mapeo de perfiles, entrevistas por competencias, assessment, bienestar y
                prevención del riesgo psicosocial. Los servicios son modulares y se ajustan
                al nivel de madurez de cada empresa, con <em>KPI</em> y seguimiento por hitos.
              </p>
              <p className="chl-about-body">
                Trabajo con acuerdos claros, cronogramas realistas y comunicación continua.
                Mi foco está en crear impacto medible: atracción y retención, clima y cultura,
                y crecimiento del talento que impulsa resultados de negocio.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
