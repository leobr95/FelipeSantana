import '../styles/Blog.css';

const POSTS = [
  {
    title: 'Entrevistas por competencias: guía breve',
    excerpt: 'Cómo estructurar preguntas, evidencias conductuales y criterios objetivos.',
    href: '#',
  },
  {
    title: 'Bienestar sin postureo',
    excerpt: 'Diseñar programas con métricas y participación real.',
    href: '#',
  },
  {
    title: 'Feedback 360° que sí transforma',
    excerpt: 'Preparación, sesgos y planes de acción accionables.',
    href: '#',
  },
];

export default function Blog() {
  return (
    <div className="chl-blog">
      <div className="section-head">
        <h2 className="section-title">Blog</h2>
        <p className="section-sub">Ideas prácticas sobre talento y bienestar.</p>
      </div>

      <div className="chl-blog-grid">
        {POSTS.map(p => (
          <article key={p.title} className="chl-post">
            <h3>{p.title}</h3>
            <p>{p.excerpt}</p>
            <a className="chl-post-link" href={p.href}>Leer más →</a>
          </article>
        ))}
      </div>
    </div>
  );
}
