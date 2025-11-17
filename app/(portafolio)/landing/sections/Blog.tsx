'use client';

import '../styles/Blog.css';
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

const SOCIALS = {
  tiktok: 'https://www.tiktok.com/@tuusuario',
  instagram: 'https://www.instagram.com/tuusuario',
  youtube: 'https://www.youtube.com/@tuusuario',
};

// Utilidad para embeber YouTube/Instagram
function toEmbedSrc(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.slice(1);
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes('instagram.com')) {
      return `https://www.instagram.com${u.pathname}embed`;
    }
    return url;
  } catch {
    return url;
  }
}

const VIDEOS = [
  {
    title: 'Tips rápidos para entrevistas',
    src: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    description: 'Preguntas por competencias y señales a observar en 60 segundos.',
  },
  {
    title: 'Bienestar sin postureo',
    src: 'https://youtu.be/dQw4w9WgXcQ',
    description: 'Diseña intervenciones con métricas y participación real del equipo.',
  },
  {
    title: 'Feedback que transforma',
    src: 'https://www.instagram.com/reel/Cw1234567ab/',
    description: 'Claves para preparar un 360° y convertirlo en acciones concretas.',
  },
];

const POSTS = [
  { title: 'Entrevistas por competencias: guía breve', excerpt: 'Cómo estructurar preguntas, evidencias conductuales y criterios objetivos.', href: '#' },
  { title: 'Bienestar sin postureo', excerpt: 'Diseñar programas con métricas y participación real.', href: '#' },
  { title: 'Feedback 360° que sí transforma', excerpt: 'Preparación, sesgos y planes de acción accionables.', href: '#' },
];

export default function Blog() {
  return (
    <div className="chl-blog">
      <div className="section-head">
        <h2 className="section-title">Blog</h2>
        <p className="section-sub">Ideas prácticas sobre talento y bienestar.</p>
      </div>

      {/* Videos verticales (sin tarjeta) */}
      <div className="chl-video-grid">
        {VIDEOS.map((v) => {
          const embed = toEmbedSrc(v.src);
          return (
            <article key={v.title} className="chl-video-item">
              <h3 className="chl-video-title">{v.title}</h3>
              <div className="chl-video-frame">
                <iframe
                  src={embed}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="chl-video-desc">{v.description}</p>
            </article>
          );
        })}
      </div>

      {/* Iconos centrados a redes */}
      <div className="chl-socials">
        <a
          className="chl-social-link tiktok"
          href={SOCIALS.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          title="TikTok"
        >
          <FaTiktok aria-hidden />
        </a>
        <a
          className="chl-social-link instagram"
          href={SOCIALS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram aria-hidden />
        </a>
        <a
          className="chl-social-link youtube"
          href={SOCIALS.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          title="YouTube"
        >
          <FaYoutube aria-hidden />
        </a>
      </div>

      {/* Artículos (opcional) */}
      <div className="chl-blog-grid">
        {POSTS.map((p) => (
          <article key={p.title} className="chl-post">
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <a className="chl-post-link" href={p.href}>
              Leer más →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
