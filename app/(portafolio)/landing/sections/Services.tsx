import '../styles/Services.css';

type Service = { title: string; desc: string; tag?: string };

const PERSONAL: Service[] = [
  { title: 'Procesos de Selección', desc: 'Perfilación, hunting, entrevistas por competencias y pruebas psicométricas.', tag: 'Talento' },
  { title: 'Evaluación & Potencial', desc: 'Assessment center breve, retroalimentación y plan de desarrollo.', tag: 'Desarrollo' },
  { title: 'Bienestar & Hábitos', desc: 'Rutinas de autocuidado, manejo del estrés y prevención psicosocial.', tag: 'Bienestar' },
  { title: 'Coaching Individual', desc: 'Objetivos profesionales, habilidades de comunicación y toma de decisiones.' },
];

const EMPRESAS: Service[] = [
  { title: 'Selección por Competencias', desc: 'Perfiles, entrevistas estructuradas, pruebas y verificación.', tag: 'Talento' },
  { title: 'Clima, Cultura y Bienestar', desc: 'Diagnóstico, plan de acción y métricas de impacto.', tag: 'People' },
  { title: 'Onboarding & Retención', desc: 'Hitos de ingreso, acompañamiento y reducción de rotación.', tag: 'People Ops' },
  { title: 'Consultoría a Medida', desc: 'KPIs de talento, diseño de procesos y acompañamiento ejecutivo.', tag: 'Consultoría' },
];

function Cards({
  items,
  variant, // "persona" | "empresa"
}: {
  items: Service[];
  variant: 'persona' | 'empresa';
}) {
  return (
    <>
      <div className="chl-services-cards" role="list">
        {items.slice(0, 3).map((s) => (
          <article
            key={s.title}
            className={`serv-card ${variant === 'persona' ? 'card-persona' : 'card-empresa'}`}
            role="listitem"
          >
            {s.tag && <span className="serv-pill">{s.tag}</span>}
            <h3 className="serv-title">{s.title}</h3>
            <p className="serv-desc">{s.desc}</p>
          </article>
        ))}
      </div>


    </>
  );
}

export default function Services() {
  return (
    <section className="chl-services-green">
      <div className="container">
        <header className="section-head light">
          <h2 className="section-title">Servicios</h2>
          <p className="section-sub">Soluciones para personas y empresas, planas y legibles.</p>
        </header>

        {/* Fila 1: label izquierda (centrada) · tarjetas derecha (PERSONAS) */}
        <div className="serv-row">
          <div className="serv-col serv-label">
            <h3 className="serv-side-title">Para personas</h3>
            <p className="serv-side-sub">
              Acompañamiento individual en selección, desarrollo y bienestar.
            </p>
          </div>
          <div className="serv-col serv-col-cards">
            <Cards items={PERSONAL} variant="persona" />
          </div>
        </div>

        {/* Fila 2 invertida: tarjetas izquierda · label derecha (centrada) (EMPRESAS) */}
        <div className="serv-row serv-row-invert">
          <div className="serv-col serv-col-cards">
            <Cards items={EMPRESAS} variant="empresa" />
          </div>
          <div className="serv-col serv-label">
            <h3 className="serv-side-title">Para empresas</h3>
            <p className="serv-side-sub">
              Procesos de talento, cultura y people ops con métricas y foco humano.
            </p>
          </div>
        </div><br />
                  <div className="chl-hero-cta">
            <a href="#contact" className="btn btn-primary">Solicitar servicio</a>
          </div>
      </div>
      
    </section>
  );
}
