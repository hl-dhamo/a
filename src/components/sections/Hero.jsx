import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE } from '../../config/site';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FLOATERS = [
  { speed: 0.4, style: { top: '18%', left: '6%', width: 54 }, type: 'hex' },
  { speed: 0.7, style: { top: '65%', left: '12%', width: 38 }, type: 'ring-orange' },
  { speed: 0.55, style: { top: '24%', right: '8%', width: 46 }, type: 'hex-light' },
  { speed: 0.9, style: { bottom: '14%', right: '16%', width: 60 }, type: 'ring-steel' },
];

const STATS = [
  { count: 25, label: 'Years Experience' },
  { count: 500, label: 'Product Sizes' },
  { count: 1200, label: 'Happy Clients' },
];

export default function Hero() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('#heroTag', { y: 30, opacity: 0, duration: 0.7 })
        .from('#heroTitle', { y: 50, opacity: 0, duration: 0.9 }, '-=.4')
        .from('#heroLead', { y: 40, opacity: 0, duration: 0.8 }, '-=.55')
        .from('#heroBtns .btn', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12 }, '-=.5')
        .from('#heroStats .stat', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12 }, '-=.4')
        .from('#heroBolt', { x: 120, opacity: 0, rotation: 8, duration: 1.1, ease: 'power2.out' }, '-=1');

      rootRef.current.querySelectorAll('[data-count]').forEach((el) => {
        const target = +el.dataset.count;
        gsap.to(el, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power1.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });

      gsap.to('#heroBolt', { y: -18, duration: 2.6, yoyo: true, repeat: -1, ease: 'sine.inOut' });

      gsap.matchMedia().add('(hover: hover) and (pointer: fine)', () => {
        const heroVisual = rootRef.current.querySelector('.hero-visual');
        const move = (e) => {
          const r = heroVisual.getBoundingClientRect();
          const rx = ((e.clientY - r.top) / r.height - 0.5) * -16;
          const ry = ((e.clientX - r.left) / r.width - 0.5) * 20;
          gsap.to('#heroBolt', { rotationX: rx, rotationY: ry, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
        };
        const leave = () =>
          gsap.to('#heroBolt', { rotationX: 0, rotationY: 0, duration: 0.8, ease: 'elastic.out(1,.5)' });
        heroVisual.addEventListener('mousemove', move);
        heroVisual.addEventListener('mouseleave', leave);
        return () => {
          heroVisual.removeEventListener('mousemove', move);
          heroVisual.removeEventListener('mouseleave', leave);
        };
      });

      rootRef.current.querySelectorAll('.float-fastener').forEach((el) => {
        gsap.to(el, { rotation: 360, duration: gsap.utils.random(14, 26), repeat: -1, ease: 'none' });
        gsap.to(el, {
          y: () => -160 * +el.dataset.speed,
          ease: 'none',
          scrollTrigger: { trigger: 'header', start: 'top top', end: 'bottom top', scrub: true },
        });
      });
    },
    { scope: rootRef },
  );

  return (
    <header id="top" ref={rootRef}>
      {FLOATERS.map(({ speed, style, type }) => (
        <svg
          key={type}
          className="float-fastener"
          data-speed={speed}
          style={style}
          viewBox="0 0 40 40"
        >
          {type === 'hex' && (
            <>
              <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="none" stroke="#8B97A8" strokeWidth="2.5" />
              <circle cx="20" cy="20" r="6" fill="none" stroke="#8B97A8" strokeWidth="2" />
            </>
          )}
          {type === 'ring-orange' && (
            <>
              <circle cx="20" cy="20" r="16" fill="none" stroke="#FF6B3D" strokeWidth="2.5" />
              <circle cx="20" cy="20" r="7" fill="none" stroke="#FF6B3D" strokeWidth="2.5" />
            </>
          )}
          {type === 'hex-light' && (
            <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="none" stroke="#C8D2DE" strokeWidth="2.5" />
          )}
          {type === 'ring-steel' && (
            <>
              <circle cx="20" cy="20" r="15" fill="none" stroke="#4A5568" strokeWidth="3" />
              <circle cx="20" cy="20" r="6" fill="none" stroke="#4A5568" strokeWidth="3" />
            </>
          )}
        </svg>
      ))}

      <div className="container hero-grid hero">
        <div>
          <span className="hero-tag" id="heroTag">
            ⬡ ahmedabad • India • Since {SITE.foundingYear}
          </span>
          <h1 id="heroTitle">
            <span className="grad">Engineered to</span>
            <br />
            <span className="accent">Hold.</span>
            <span className="grad">Built to</span>
            <span className="accent">Last.</span>
          </h1>
          <p className="lead" id="heroLead">
            Premium stainless steel bolts, nuts, washers, spring washers &amp; rods in 202, 201, 304 &amp; 316
            grades — manufactured with precision in ahmedabad and trusted by industries across India.
          </p>
          <div className="hero-btns" id="heroBtns">
            <a href="#products" className="btn btn-primary">
              Explore Products →
            </a>
            <a href="#assembly" className="btn btn-ghost">
              ▶ See It Fit
            </a>
          </div>
          <div className="hero-stats" id="heroStats">
            {STATS.map(({ count, label }) => (
              <div className="stat" key={label}>
                <div className="num">
                  <span data-count={count}>0</span>
                  <small>+</small>
                </div>
                <div className="lbl">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />
          <div className="hero-bolt-wrap" id="heroBolt">
            <svg width="290" height="420" viewBox="0 0 290 420" fill="none">
              <defs>
                <linearGradient id="steelV" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#5d6b7e" />
                  <stop offset=".25" stopColor="#c8d2de" />
                  <stop offset=".5" stopColor="#eef2f6" />
                  <stop offset=".75" stopColor="#9aa7b6" />
                  <stop offset="1" stopColor="#4A5568" />
                </linearGradient>
                <linearGradient id="headV" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#3c4856" />
                  <stop offset=".3" stopColor="#aeb9c7" />
                  <stop offset=".55" stopColor="#dfe6ee" />
                  <stop offset="1" stopColor="#55616f" />
                </linearGradient>
              </defs>
              <path d="M75 30 L215 30 L240 60 L240 96 L50 96 L50 60 Z" fill="url(#headV)" stroke="#2c3744" strokeWidth="2" />
              <rect x="50" y="92" width="190" height="10" rx="4" fill="#39434f" />
              <rect x="103" y="100" width="84" height="290" rx="8" fill="url(#steelV)" stroke="#2c3744" strokeWidth="2" />
              <g stroke="#39434f" strokeWidth="5" opacity=".75">
                <path d="M104 130 L186 142" />
                <path d="M104 154 L186 166" />
                <path d="M104 178 L186 190" />
                <path d="M104 202 L186 214" />
                <path d="M104 226 L186 238" />
                <path d="M104 250 L186 262" />
                <path d="M104 274 L186 286" />
                <path d="M104 298 L186 310" />
                <path d="M104 322 L186 334" />
                <path d="M104 346 L186 358" />
              </g>
              <path d="M103 388 L145 412 L187 388 Z" fill="#76828f" stroke="#2c3744" strokeWidth="2" />
              <rect x="118" y="104" width="14" height="282" rx="7" fill="#ffffff" opacity=".35" />
            </svg>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="mouse" />
        <span>Scroll to assemble</span>
      </div>
    </header>
  );
}
