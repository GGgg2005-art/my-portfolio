import React, { useRef, Suspense, lazy } from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 font-sans relative transition-colors duration-300"
    >
      <Preloader />
      <CustomCursor />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />

      <main className="pt-20 pb-10">
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center text-blue-500">
              Завантаження...
            </div>
          }
        >
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
        © {new Date().getFullYear()} Dmytro. Всі права захищені.
      </footer>
    </div>
  );
};

export default App;
