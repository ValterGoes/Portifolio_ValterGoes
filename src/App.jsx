import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[50vh]" />}>
          <About />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
