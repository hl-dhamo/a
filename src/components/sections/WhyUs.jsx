import { WHY_US } from '../../data/content';

export default function WhyUs() {
  return (
    <section id="why">
      <div className="container">
        <span className="sec-tag reveal">The S.S. Advantage</span>
        <h2 className="sec-title reveal">Why Industries Choose Us</h2>

        <div className="why-grid">
          {WHY_US.map(({ icon, title, description }) => (
            <div key={title} className="why-item reveal">
              <div className="dot">{icon}</div>
              <div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
