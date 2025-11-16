import '../styles/Impact.css';

export default function Impact() {
  return (
    <div className="chl-impact">
      <div className="section-head">
        <h2 className="section-title">Resultados & Impacto</h2>
        <p className="section-sub">Indicadores que importan al negocio y a las personas.</p>
      </div>

      <div className="chl-impact-grid">
        <div className="chl-impact-card">
          <strong>+40%</strong>
          <span>Mejora en tiempo de cobertura de vacantes</span>
        </div>
        <div className="chl-impact-card">
          <strong>90%</strong>
          <span>Onboarding satisfactorio 30-60-90</span>
        </div>
        <div className="chl-impact-card">
          <strong>-25%</strong>
          <span>Rotación en áreas críticas</span>
        </div>
        <div className="chl-impact-card">
          <strong>+30%</strong>
          <span>Participación en programas de bienestar</span>
        </div>
      </div>
    </div>
  );
}
