'use client';

import Image, { StaticImageData } from 'next/image';
import '@/app/(portafolio)/landing/styles/FeatureMosaic.css';
import fotoPanoramica from '@/app/fotografias/f11.png';

type CardProps = {
  title: string;
  description: string;
  /** si pasas imageSrc, se pone overlay y texto claro; si no, usa bgColor y texto oscuro */
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  bgColor?: string; // ej: '#E8DCCB' o 'var(--bg)'
};

function BigCard({ title, description, imageSrc, imageAlt, bgColor }: CardProps) {
  const isImg = Boolean(imageSrc);
  return (
    <article className={isImg ? 'fm-card fm-big fm-has-img' : 'fm-card fm-big'} style={{ background: isImg ? undefined : (bgColor ?? '#FFF') }}>
      {isImg && (
        <div className="fm-media">
          <Image src={imageSrc!} alt={imageAlt ?? title} fill priority sizes="(max-width: 980px) 100vw, 70vw" />
          <div className="fm-overlay" />
        </div>
      )}
      <div className="fm-content">
        <h3 className="fm-title">{title}</h3>
        <p className="fm-desc">{description}</p>
      </div>
    </article>
  );
}

function SmallCard({ title, description, imageSrc, imageAlt, bgColor }: CardProps) {
  const isImg = Boolean(imageSrc);
  return (
    <article className={isImg ? 'fm-card fm-small fm-has-img' : 'fm-card fm-small'} style={{ background: isImg ? undefined : (bgColor ?? '#FFF') }}>
      {isImg && (
        <div className="fm-media">
          <Image src={imageSrc!} alt={imageAlt ?? title} fill sizes="(max-width: 980px) 100vw, 30vw" />
          <div className="fm-overlay" />
        </div>
      )}
      <div className="fm-content">
        <h3 className="fm-title">{title}</h3>
        <p className="fm-desc">{description}</p>
      </div>
    </article>
  );
}

/** Mosaico 70/30 en la fila 1 y 30/70 en la fila 2 */
export default function FeatureMosaic() {
  return (
    <section className="fm">
      <div className="container">
        <div className="fm-grid">
          {/* Fila 1: 70 / 30 */}
          <BigCard
            title="Chat de Equipo Integrado"
            description="Comunícate al instante dentro de los procesos—sin cambiar de aplicación."
            imageSrc="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1600"
            imageAlt="Equipo celebrando"
          />
          <SmallCard
            title="Asignación de Tareas"
            description="Crea, asigna y haz seguimiento para mantener a todos alineados."
            bgColor="#EFE6DA"
          />

          {/* Fila 2: 30 / 70 */}
          <SmallCard
            title="Agenda en Tiempo Real"
            description="Planifica reuniones, fija fechas límite y sincroniza calendarios."
            bgColor="#C9B9A2"
          />
          <BigCard
            title="Seguimiento del Progreso"
            description="Tableros que visualizan lo realizado y lo que sigue, con foco en resultados."
            imageSrc={fotoPanoramica}
            imageAlt="Profesional sonriendo"
          />
        </div>
      </div>
    </section>
  );
}
