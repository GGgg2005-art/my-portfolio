import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations';
import MagneticButton from './MagneticButton';
const Hero: React.FC = () => {
  const { lang } = useAppContext();
  const t = (translations as any)[lang].hero;

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-16 transition-colors duration-300">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-gray-100"
      >
        {t.greeting}{' '}
        <span className="text-blue-600 dark:text-blue-500">{t.name}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed"
      >
        {t.role}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <MagneticButton>
          <a
            href="#projects"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-blue-500/30"
          >
            {t.btnProjects}
          </a>
        </MagneticButton>
      </motion.div>
    </section>
  );
};

export default Hero;
