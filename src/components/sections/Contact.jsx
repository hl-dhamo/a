import { SITE } from '../../config/site';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="panel reveal">
          <div>
            <span className="sec-tag">Let&apos;s Talk</span>
            <h2 className="sec-title">Get Your Quote Today</h2>
            <p className="sec-sub">
              Send us your requirement — size, grade and quantity — and our team will respond within hours.
            </p>

            <div className="contact-line">
              <div className="ic">📍</div>
              <div>
                <b>Visit Us</b> {SITE.location}
              </div>
            </div>
            <a className="contact-line" href="tel:+919574532655">
              <div className="ic">📞</div>
              <div>
                <b>Call</b>
                {SITE.phoneDisplay}
              </div>
            </a>
            <a className="contact-line" href={`mailto:${SITE.email}`}>
              <div className="ic">✉️</div>
              <div>
                <b>Email</b>
                {SITE.email}
              </div>
            </a>
            <div className="contact-line">
              <div className="ic">🕘</div>
              <div>
                <b>Hours</b>
                Mon – Sat, 10:00 AM – 7:00 PM IST
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <svg viewBox="0 0 200 200" style={{ width: 'min(230px,60%)', margin: '0 auto 26px' }}>
              <polygon points="100,12 178,56 178,144 100,188 22,144 22,56" fill="none" stroke="#FF6B3D" strokeWidth="5" />
              <polygon
                points="100,40 154,70 154,130 100,160 46,130 46,70"
                fill="none"
                stroke="#C8D2DE"
                strokeWidth="3"
                opacity=".6"
              />
              <circle cx="100" cy="100" r="26" fill="#C8D2DE" />
              <circle cx="100" cy="100" r="13" fill="#1A365D" />
            </svg>
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              💬 WhatsApp Us Now
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
