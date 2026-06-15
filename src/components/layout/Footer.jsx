import { SITE } from '../../config/site';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <p className="footer-copy">
          © 2026 <b>{SITE.name}</b>, Ahmedabad
        </p>
        <p className="footer-products">
          Bolts • Nuts • Washers • Spring Washers • Rods
        </p>
        <p className="footer-grades">
          SS 201 · 202 · 304 · 316
        </p>
      </div>
    </footer>
  );
}
