import '../styles/Activities.css';
import FeatureMosaic from './FeatureMosaic';

export default function Activities() {
  return (
    <div className="chl-activities">
      <div className="section-head">
        <h2 className="section-title">Acerca de</h2>
        <p className="section-sub">
          Enfoque integral: atracción de talento, crecimiento profesional y cultura saludable.
        </p>
      </div>
<section id="activities" className="section">
  <FeatureMosaic />
</section>

    </div>
  );
}
