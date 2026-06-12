import { useState } from 'react';
import { NAV_LINKS } from '../../config/site';

export default function Nav({ navRef }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="nav" ref={navRef}>
      <div className="nav-inner">
        <a href="#top" className="logo">
          <svg className="hex" viewBox="0 0 40 40">
            <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" fill="none" stroke="#FF6B3D" strokeWidth="3" />
            <circle cx="20" cy="20" r="6.5" fill="#C8D2DE" />
          </svg>
          <span>
            S.S.&nbsp;<b>Fasteners</b>
          </span>
        </a>
        <div className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">
          Get a Quote
        </a>
        <button
          className="burger"
          id="burger"
          aria-label="menu"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
