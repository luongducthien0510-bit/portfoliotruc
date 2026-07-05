import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Reflection from './components/Reflection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-text-main font-sans antialiased selection:bg-accent-brand/30">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Reflection />
      </main>
      <Footer />
    </div>
  );
}
