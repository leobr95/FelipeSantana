'use client';

import '../styles/Blog.css';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

/** Perfiles (ajústalos a los reales) */
const SOCIALS = {
  instagram: 'https://www.instagram.com/tuusuario',
  youtube: 'https://www.youtube.com/@tuusuario',
};

/** Añade/actualiza un parámetro en la URL de forma segura */
function addParam(urlStr: string, key: string, val: string): string {
  try {
    const u = new URL(urlStr);
    u.searchParams.set(key, val);
    return u.toString();
  } catch {
    const hasQ = urlStr.includes('?');
    const hasHash = urlStr.includes('#');
    const [base, hash = ''] = urlStr.split('#');
    const sep = hasQ ? '&' : '?';
    return `${base}${sep}${key}=${encodeURIComponent(val)}${hasHash ? `#${hash}` : ''}`;
  }
}

/** Normaliza enlaces de YouTube a <iframe> embebible y fuerza autoplay=0 */
function toYouTubeEmbed(url: string): string {
  try {
    const u = new URL(url);

    // https://www.youtube.com/watch?v=ID
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v');
      if (id) {
        let src = `https://www.youtube.com/embed/${id}`;
        src = addParam(src, 'rel', '0');
        src = addParam(src, 'modestbranding', '1');
        src = addParam(src, 'autoplay', '0');
        src = addParam(src, 'playsinline', '1');
        return src;
      }

      // Shorts: https://www.youtube.com/shorts/ID
      const parts = u.pathname.split('/').filter(Boolean); // ["shorts","ID"]
      if (parts[0] === 'shorts' && parts[1]) {
        let src = `https://www.youtube.com/embed/${parts[1]}`;
        src = addParam(src, 'rel', '0');
        src = addParam(src, 'modestbranding', '1');
        src = addParam(src, 'autoplay', '0');
        src = addParam(src, 'playsinline', '1');
        return src;
      }
    }

    // https://youtu.be/ID
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.slice(1);
      if (id) {
        let src = `https://www.youtube.com/embed/${id}`;
        src = addParam(src, 'rel', '0');
        src = addParam(src, 'modestbranding', '1');
        src = addParam(src, 'autoplay', '0');
        src = addParam(src, 'playsinline', '1');
        return src;
      }
    }

    // Si no es reconocible, lo devolvemos igual (con autoplay=0 por si acaso)
    return addParam(url, 'autoplay', '0');
  } catch {
    return addParam(url, 'autoplay', '0');
  }
}

const VIDEOS = [
  {
    title: 'Selección por competencias en 60s',
    // ejemplo YouTube (video normal):
    src: 'https://www.youtube.com/shorts/bhTQO8AhAVA?feature=share',
    description: 'Cómo preparar preguntas basadas en conductas observables.',
  },
  {
    title: 'Bienestar sin postureo (Short)',
    // ejemplo YouTube Shorts:
    src: 'https://www.youtube.com/shorts/aqz-KE-bpKQ',
    description: 'Intervenciones con métricas reales y participación del equipo.',
  },
  {
    title: 'Feedback que transforma',
    // ejemplo YouTube corto:
    src: 'https://youtu.be/9bZkp7q19f0',
    description: 'Claves para un 360° que se convierte en acciones concretas.',
  },
];

export default function Blog() {
  return (
    <div className="chl-blog">
      <div className="section-head">
        <h2 className="section-title">Blog</h2>
        <p className="section-sub">Ideas prácticas sobre talento y bienestar.</p>
      </div>

      {/* Videos verticales (YouTube only) */}
      <div className="chl-video-grid">
        {VIDEOS.map((v) => {
          const embed = toYouTubeEmbed(v.src);
          return (
            <article key={v.title} className="chl-video-item">
              <h3 className="chl-video-title">{v.title}</h3>

              <div className="chl-video-frame">
                <iframe
                  src={embed}
                  title={v.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <p className="chl-video-desc">{v.description}</p>
            </article>
          );
        })}
      </div>

      {/* Iconos a redes (centrados) */}
      <div className="chl-socials">
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
    </div>
  );
}
