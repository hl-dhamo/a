import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from './components/seo/SEO';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Hero from './components/sections/Hero';
import Assembly from './components/sections/Assembly';
import Products from './components/sections/Products';
import Grades from './components/sections/Grades';
import WhyUs from './components/sections/WhyUs';
import Contact from './components/sections/Contact';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  const navRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    const onScroll = () => navRef.current?.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(
    () => {
      ScrollTrigger.batch('.reveal', {
        start: 'top 85%',
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            overwrite: true,
          }),
      });
    },
    { scope: appRef },
  );

  return (
    <>
      <SEO />
      <Nav navRef={navRef} />
      <main ref={appRef}>
        <Hero />
        <Assembly />
        <Products />
        <Grades />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
