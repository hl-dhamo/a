import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCTS } from '../../data/products.jsx';
import { PRODUCT_TYPES, STEEL_GRADES } from '../../data/content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Products() {
  const rootRef = useRef(null);
  const [activeType, setActiveType] = useState('all');
  const [activeGrade, setActiveGrade] = useState('all');

  const filtered = PRODUCTS.filter((product) => {
    const okType = activeType === 'all' || product.type === activeType;
    const okGrade = activeGrade === 'all' || product.grades.includes(activeGrade);
    return okType && okGrade;
  });

  useEffect(() => {
    if (!rootRef.current) return;
    const cards = rootRef.current.querySelectorAll('#productGrid .card:not(.hidden-card)');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out', overwrite: true },
    );
    ScrollTrigger.refresh();
  }, [activeType, activeGrade]);

  useGSAP(
    () => {
      ScrollTrigger.batch('.card, .grade-box, .why-item', {
        start: 'top 88%',
        once: true,
        onEnter: (els) =>
          gsap.from(els, {
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            overwrite: true,
          }),
      });
    },
    { scope: rootRef },
  );

  const handleTypeFilter = (type) => setActiveType(type);
  const handleGradeFilter = (grade) => setActiveGrade(grade);

  return (
    <section id="products" ref={rootRef}>
      <div className="container">
        <span className="sec-tag reveal">Our Range</span>
        <h2 className="sec-title reveal">Stainless Steel Fasteners</h2>
        <p className="sec-sub reveal">
          Filter by type or steel grade — every piece is corrosion-resistant, dimension-checked and ready for
          industrial duty.
        </p>

        <div className="filters reveal">
          <span className="group-label">Type</span>
          {PRODUCT_TYPES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`chip${activeType === id ? ' active' : ''}`}
              data-filter-type={id}
              onClick={() => handleTypeFilter(id)}
            >
              {label}
            </button>
          ))}
          <span className="group-label">Grade</span>
          {STEEL_GRADES.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`chip${activeGrade === id ? ' active' : ''}`}
              data-filter-grade={id}
              onClick={() => handleGradeFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="product-grid" id="productGrid">
          {PRODUCTS.map((product) => {
            const visible = filtered.some((p) => p.id === product.id);
            return (
              <div
                key={product.id}
                className={`card${visible ? '' : ' hidden-card'}`}
                data-type={product.type}
                data-grades={product.grades.join(' ')}
              >
                {product.icon}
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className="grades">
                  {product.grades.map((grade) => (
                    <span key={grade} className={`g${['304', '316'].includes(grade) ? ' hi' : ''}`}>
                      {grade}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
