import '../styles/Services.css';

const SERVICES = [
  {
    title: 'Procesos de Selección',
    desc: 'Perfilación, hunting, entrevistas por competencias y pruebas psicométricas.',
    tag: 'Talento',
  },
  {
    title: 'Evaluación & Potencial',
    desc: 'Assessment center, feedback 360° y mapas de sucesión.',
    tag: 'Desarrollo',
  },
  {
    title: 'Bienestar & Cultura',
    desc: 'Programas de bienestar, clima organizacional y prevención psicosocial.',
    tag: 'Bienestar',
  },
  {
    title: 'Onboarding & Retención',
    desc: 'Acompañamiento a ingreso, seguimiento por hitos y plan de retención.',
    tag: 'People Ops',
  },
  {
    title: 'Consultoría a Medida',
    desc: 'Diagnóstico, KPI de talento y plan de acción alineado al negocio.',
    tag: 'Consultoría',
  },
  {
    title: 'Formación Soft Skills',
    desc: 'Comunicación, liderazgo, trabajo en equipo y manejo del cambio.',
    tag: 'Capacitación',
  },
];

export default function Services() {
  return (
    <div className="chl-services">
      <div className="section-head">
        <h2 className="section-title">Servicios</h2>
        <p className="section-sub">Tarjetas con estilo cristal, modernas y legibles.</p>
      </div>

      <div className="chl-services-grid">
        {SERVICES.map(s => (
          <article key={s.title} className="chl-service-card">
            <header>
              <span className="chl-pill">{s.tag}</span>
              <h3>{s.title}</h3>
            </header>
            <p>{s.desc}</p>
            <div className="chl-service-actions">
              <a href="#contact" className="btn btn-primary btn-sm">Solicitar</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
