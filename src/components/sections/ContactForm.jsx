import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE } from '../../config/site';
import { PRODUCT_TYPES, STEEL_GRADES } from '../../data/content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const INITIAL = {
  name: '',
  phone: '',
  email: '',
  productType: '',
  grade: '',
  quantity: '',
  message: '',
};

const PRODUCT_OPTIONS = PRODUCT_TYPES.filter((t) => t.id !== 'all');
const GRADE_OPTIONS = STEEL_GRADES.filter((g) => g.id !== 'all');

export default function ContactForm() {
  const rootRef = useRef(null);
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [sentName, setSentName] = useState('');

  useGSAP(
    () => {
      gsap.from('.contact-form-head > *', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 85%', once: true },
      });
      gsap.from('.form-field', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-form-card', start: 'top 88%', once: true },
      });
    },
    { scope: rootRef },
  );

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Quote Request — ${form.name}`,
          _template: 'table',
          _captcha: 'false',
          Name: form.name,
          Phone: form.phone,
          Email: form.email,
          'Product Type': form.productType || 'Not specified',
          Grade: form.grade || 'Not specified',
          Quantity: form.quantity || 'Not specified',
          Message: form.message,
        }),
      });

      if (!res.ok) throw new Error('Send failed');

      setSentName(form.name);
      setStatus('success');
      setForm(INITIAL);

      gsap.fromTo(
        '.form-success',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)' },
      );
    } catch {
      setStatus('error');
      gsap.fromTo('.form-error', { x: -8 }, { x: 0, duration: 0.4, ease: 'elastic.out(1,.6)' });
    }
  };

  return (
    <div className="contact-form-wrap" ref={rootRef}>
      <div className="contact-form-head">
        <span className="sec-tag">Contact Us</span>
        <h2 className="sec-title">Send Your Requirement</h2>
        <p className="sec-sub">
          Fill in the details below — we&apos;ll email you back with pricing within a few hours.
        </p>
      </div>

      <div className="contact-form-card">
        {status === 'success' ? (
          <div className="form-success">
            <div className="success-icon">
              <svg viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" stroke="#FF6B3D" strokeWidth="3" />
                <path d="M18 33 L28 43 L48 23" stroke="#FF6B3D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Message Sent!</h3>
            <p>Thank you, {sentName || 'there'}. Our team will reply to your email shortly.</p>
            <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>
              Send Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <label className="form-field">
                <span>Full Name *</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update('name')}
                  required
                  autoComplete="name"
                />
              </label>

              <label className="form-field">
                <span>Phone *</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={update('phone')}
                  required
                  autoComplete="tel"
                />
              </label>

              <label className="form-field form-field-full">
                <span>Email *</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={update('email')}
                  required
                  autoComplete="email"
                />
              </label>

              <label className="form-field">
                <span>Product Type</span>
                <select name="productType" value={form.productType} onChange={update('productType')}>
                  <option value="">Select product</option>
                  {PRODUCT_OPTIONS.map(({ id, label }) => (
                    <option key={id} value={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-field">
                <span>Steel Grade</span>
                <select name="grade" value={form.grade} onChange={update('grade')}>
                  <option value="">Select grade</option>
                  {GRADE_OPTIONS.map(({ id, label }) => (
                    <option key={id} value={label}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-field form-field-full">
                <span>Quantity / Size</span>
                <input
                  type="text"
                  name="quantity"
                  placeholder="e.g. M12 x 50mm — 500 pcs"
                  value={form.quantity}
                  onChange={update('quantity')}
                />
              </label>

              <label className="form-field form-field-full">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirement, delivery location, etc."
                  value={form.message}
                  onChange={update('message')}
                />
              </label>
            </div>

            {status === 'error' && (
              <p className="form-error">Something went wrong. Please try again or WhatsApp us directly.</p>
            )}

            <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <>
                  <span className="form-spinner" />
                  Sending…
                </>
              ) : (
                <>Send Inquiry →</>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
