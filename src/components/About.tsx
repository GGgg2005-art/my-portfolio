import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Target } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations';

const About: React.FC = () => {
  const { lang } = useAppContext();
  const t = translations[lang].about;

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  useEffect(() => {
    const typeWriter = (
      text: string,
      setter: React.Dispatch<React.SetStateAction<string>>,
      speed: number,
      delay: number,
    ) => {
      setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setter(text.slice(0, i + 1));
          i++;
          if (i === text.length) clearInterval(interval);
        }, speed);
      }, delay);
    };

    setText1('');
    setText2('');

    typeWriter(t.terminal.response1, setText1, 60, 800);
    typeWriter(t.terminal.response2, setText2, 60, 6500);
  }, [t]);

  return (
    <section
      id="about"
      className="py-20 px-4 max-w-6xl mx-auto transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
      >
        {t.title}
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="lg:col-span-2 bg-[#0d1117] border border-gray-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden font-mono text-sm sm:text-base h-full flex flex-col"
        >
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="space-y-4 text-gray-300 flex-grow">
            <div>
              <span className="text-green-400 font-bold">yaroslav@dev</span>
              <span className="text-blue-400">~/portfolio</span>
              <span className="text-gray-400"> $ </span>
              <span className="text-white">{t.terminal.command1}</span>
            </div>
            <div className="text-gray-400 pl-4 leading-relaxed">{text1}</div>

            {text1.length === t.terminal.response1.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-green-400 font-bold">yaroslav@dev</span>
                <span className="text-blue-400">~/portfolio</span>
                <span className="text-gray-400"> $ </span>
                <span className="text-white">{t.terminal.command2}</span>
                <div className="text-gray-400 pl-4 leading-relaxed">
                  {text2}
                </div>
              </motion.div>
            )}

            {text2.length === t.terminal.response2.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-green-400 font-bold">yaroslav@dev</span>
                <span className="text-blue-400">~/portfolio</span>
                <span className="text-gray-400"> $ </span>
                <span className="text-white">{t.terminal.command3}</span>
                <div className="text-yellow-300 pl-4 mt-1 font-semibold">
                  {t.terminal.response3}
                </div>
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.9 }}
                  className="inline-block w-2 h-5 bg-gray-400 ml-1 translate-y-1"
                />
              </motion.div>
            )}
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 -z-10"></div>

            <Code2
              className="text-blue-500 mb-4 transition-transform duration-500 group-hover:scale-110"
              size={32}
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t.cards.card1Title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {t.cards.card1Desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-2xl blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 -z-10"></div>

            <Target
              className="text-emerald-500 mb-4 transition-transform duration-500 group-hover:scale-110"
              size={32}
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t.cards.card2Title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {t.cards.card2Desc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
