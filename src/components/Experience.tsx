import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations';

const Experience: React.FC = () => {
  const { lang } = useAppContext();
  const t = translations[lang].experience;

  return (
    <section
      id="experience"
      className="py-20 px-4 max-w-4xl mx-auto transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-gray-100"
      >
        {t.title}
      </motion.h2>

      <div className="relative border-l-2 border-blue-200 dark:border-gray-700 ml-4 md:ml-8">
        {t.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            className="mb-12 ml-8 md:ml-12 relative group"
          >
            <span className="absolute -left-[43px] md:-left-[59px] flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-gray-800 rounded-full ring-4 ring-white dark:ring-gray-900 shadow-sm transition-transform duration-300 group-hover:scale-110">
              {index >= 2 ? (
                <GraduationCap
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
              ) : (
                <Briefcase
                  className="text-blue-600 dark:text-blue-400"
                  size={20}
                />
              )}
            </span>

            <div className="relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 dark:group-hover:from-blue-500/10 dark:group-hover:to-purple-500/10 transition-colors duration-500 -z-10"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.role}
                </h3>
                <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-blue-200 dark:border-blue-800/50 whitespace-nowrap">
                  {item.date}
                </span>
              </div>
              <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                {item.company}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
