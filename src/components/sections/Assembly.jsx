import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSEMBLY_STEPS } from '../../data/content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Assembly() {
  const rootRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useGSAP(
    () => {
      gsap.set('#aWasher', { x: -340, opacity: 0 });
      gsap.set('#aSpring', { x: 340, opacity: 0 });
      gsap.set('#aBolt', { y: -500 });
      gsap.set('#aNut', { opacity: 0 });

      gsap
        .timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: '#assemblyStage',
            start: 'top top',
            end: () => `+=${window.innerWidth < 760 ? 2000 : 3200}`,
            invalidateOnRefresh: true,
            pin: true,
            scrub: 1,
            onUpdate(self) {
              setProgress(self.progress * 100);
              const p = self.progress;
              setActiveStep(p < 0.18 ? 0 : p < 0.32 ? 1 : p < 0.55 ? 2 : p < 0.85 ? 3 : 4);
            },
          },
        })
        .to('#aWasher', { x: 0, opacity: 1, duration: 1.4, ease: 'power2.out' })
        .to('#aSpring', { x: 0, opacity: 1, duration: 1.1, ease: 'power2.out' }, '+=.2')
        .to('#aBolt', { y: 204, duration: 2.4, ease: 'power1.inOut' }, '+=.3')
        .to('#assemblySvg', { x: 3, duration: 0.06, yoyo: true, repeat: 5, ease: 'none' })
        .to('#aNut', { opacity: 1, duration: 0.3 }, '+=.2')
        .to('#aNutBody', { attr: { transform: 'translate(0,374)' }, duration: 2.6, ease: 'power1.inOut' }, '<')
        .to('#aNutFacets g', { x: -150, duration: 2.6, ease: 'power1.inOut' }, '<')
        .to('#aNutFacets g', { x: -250, duration: 0.8, ease: 'power2.in' })
        .to('#assemblySvg', { rotation: 0.6, duration: 0.07, yoyo: true, repeat: 7, ease: 'none' }, '<')
        .to('#aFlash', { opacity: 1, duration: 0.35, ease: 'power2.out' })
        .fromTo(
          '#aFlash path',
          { scale: 0.4, transformOrigin: 'center' },
          { scale: 1, duration: 0.4, stagger: 0.05, ease: 'back.out(2)' },
          '<',
        )
        .to('#aBadge', { opacity: 1, y: -6, duration: 0.6, ease: 'power2.out' })
        .to('#aFlash', { opacity: 0, duration: 0.6 }, '+=.3');
    },
    { scope: rootRef },
  );

  return (
    <section id="assembly" ref={rootRef}>
      <div className="assembly-stage" id="assemblyStage">
        <div className="assembly-head">
          <span className="sec-tag">Precision in motion</span>
          <h2 className="sec-title">Watch It Come Together</h2>
        </div>

        <svg className="assembly-svg" viewBox="0 0 400 560" fill="none" id="assemblySvg">
          <defs>
            <linearGradient id="aSteel" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#5d6b7e" />
              <stop offset=".25" stopColor="#c8d2de" />
              <stop offset=".5" stopColor="#eef2f6" />
              <stop offset=".75" stopColor="#9aa7b6" />
              <stop offset="1" stopColor="#4A5568" />
            </linearGradient>
            <linearGradient id="aHead" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#3c4856" />
              <stop offset=".3" stopColor="#aeb9c7" />
              <stop offset=".55" stopColor="#dfe6ee" />
              <stop offset="1" stopColor="#55616f" />
            </linearGradient>
            <linearGradient id="aPlate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2a3a52" />
              <stop offset="1" stopColor="#1A365D" />
            </linearGradient>
            <clipPath id="nutClip">
              <path d="M130 0 L270 0 L296 30 L296 62 L270 92 L130 92 L104 62 L104 30 Z" />
            </clipPath>
          </defs>

          <g id="aPlates">
            <rect x="40" y="300" width="320" height="34" rx="5" fill="url(#aPlate)" stroke="#0d1d33" strokeWidth="2" />
            <rect x="40" y="338" width="320" height="34" rx="5" fill="#243a57" stroke="#0d1d33" strokeWidth="2" />
            <rect x="178" y="300" width="44" height="72" fill="#0d1d33" />
          </g>

          <g id="aWasher">
            <rect x="142" y="284" width="116" height="16" rx="6" fill="url(#aSteel)" stroke="#2c3744" strokeWidth="2" />
            <rect x="178" y="284" width="44" height="16" fill="#1c2733" opacity=".9" />
          </g>

          <g id="aSpring">
            <path d="M152 268 L248 268 L244 282 L156 282 Z" fill="#9aa7b6" stroke="#2c3744" strokeWidth="2" />
            <path d="M196 268 L204 282" stroke="#2c3744" strokeWidth="3" />
          </g>

          <g id="aBolt">
            <path d="M140 8 L260 8 L280 32 L280 60 L120 60 L120 32 Z" fill="url(#aHead)" stroke="#2c3744" strokeWidth="2" />
            <rect x="120" y="56" width="160" height="8" rx="3" fill="#39434f" />
            <rect x="178" y="62" width="44" height="204" rx="5" fill="url(#aSteel)" stroke="#2c3744" strokeWidth="2" />
            <g id="aBoltThreads" stroke="#39434f" strokeWidth="3.5" opacity=".75">
              <path d="M179 84 L221 92" />
              <path d="M179 104 L221 112" />
              <path d="M179 124 L221 132" />
              <path d="M179 144 L221 152" />
              <path d="M179 164 L221 172" />
              <path d="M179 184 L221 192" />
              <path d="M179 204 L221 212" />
              <path d="M179 224 L221 232" />
              <path d="M179 244 L221 252" />
            </g>
            <path d="M178 264 L200 278 L222 264 Z" fill="#76828f" stroke="#2c3744" strokeWidth="2" />
            <rect x="186" y="64" width="8" height="198" rx="4" fill="#fff" opacity=".35" />
          </g>

          <g id="aNut">
            <g id="aNutBody" transform="translate(0,580)">
              <path
                d="M130 0 L270 0 L296 30 L296 62 L270 92 L130 92 L104 62 L104 30 Z"
                fill="url(#aHead)"
                stroke="#2c3744"
                strokeWidth="2"
              />
              <g clipPath="url(#nutClip)" id="aNutFacets" opacity=".55">
                <g stroke="#39434f" strokeWidth="6">
                  <path d="M-40 0 L-40 92" />
                  <path d="M10 0 L10 92" />
                  <path d="M60 0 L60 92" />
                  <path d="M110 0 L110 92" />
                  <path d="M160 0 L160 92" />
                  <path d="M210 0 L210 92" />
                  <path d="M260 0 L260 92" />
                  <path d="M310 0 L310 92" />
                  <path d="M360 0 L360 92" />
                  <path d="M410 0 L410 92" />
                </g>
              </g>
              <rect x="104" y="40" width="192" height="12" rx="6" fill="#fff" opacity=".18" />
            </g>
          </g>

          <g id="aFlash" opacity="0">
            <path d="M86 392 L60 380" stroke="#FF6B3D" strokeWidth="5" strokeLinecap="round" />
            <path d="M80 416 L48 416" stroke="#FF6B3D" strokeWidth="5" strokeLinecap="round" />
            <path d="M86 440 L60 452" stroke="#FF6B3D" strokeWidth="5" strokeLinecap="round" />
            <path d="M314 392 L340 380" stroke="#FF6B3D" strokeWidth="5" strokeLinecap="round" />
            <path d="M320 416 L352 416" stroke="#FF6B3D" strokeWidth="5" strokeLinecap="round" />
            <path d="M314 440 L340 452" stroke="#FF6B3D" strokeWidth="5" strokeLinecap="round" />
          </g>

          <g id="aBadge" opacity="0">
            <rect x="118" y="510" width="164" height="40" rx="20" fill="rgba(255,107,61,.15)" stroke="#FF6B3D" strokeWidth="2" />
            <text
              x="200"
              y="536"
              textAnchor="middle"
              fill="#FF8A63"
              fontFamily="Oswald, sans-serif"
              fontSize="19"
              fontWeight="700"
              letterSpacing="3"
            >
              TIGHTENED ✓
            </text>
          </g>
        </svg>

        <div className="assembly-caption" id="assemblyCaption">
          {ASSEMBLY_STEPS.map((step, i) => (
            <div key={step} className={`step${activeStep === i ? ' active' : ''}`} data-step={i}>
              <b>{String(i + 1).padStart(2, '0')}</b> — {step}
            </div>
          ))}
        </div>
        <div className="assembly-progress">
          <div className="bar" id="assemblyBar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </section>
  );
}
