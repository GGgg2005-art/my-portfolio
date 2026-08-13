import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations';

interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 5 },
      { name: 'CSS', level: 5 },
      { name: 'JavaScript', level: 4 },
      { name: 'TypeScript', level: 3 },
      { name: 'React', level: 3 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Bootstrap', level: 4 },
      { name: 'jQuery', level: 3 },
    ],
  },
  {
    title: 'Backend & CMS',
    skills: [
      { name: 'PHP', level: 3 },
      { name: 'OpenCart', level: 4 },
      { name: 'Twig', level: 3 },
    ],
  },
  {
    title: 'Infrastructure & DB',
    skills: [
      { name: 'Git', level: 3 },
      { name: 'Docker', level: 3 },
      { name: 'MariaDB', level: 3 },
    ],
  },
];

const Skills: React.FC = () => {
  const { lang } = useAppContext();
  const t = translations[lang].skills;

  return (
    <section
      id="skills"
      className="py-20 px-4 max-w-6xl mx-auto transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
      >
        {t.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors shadow-sm dark:shadow-none ${
              index === 0 ? 'md:col-span-2' : ''
            }`}
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6 border-b border-gray-100 dark:border-gray-700 pb-2">
              {category.title}
            </h3>

            <div
              className={`flex flex-col gap-5 ${
                index === 0 ? 'md:grid md:grid-cols-2 md:gap-x-12' : ''
              }`}
            >
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="w-full"
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {skill.name}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {t.levels[skill.level]}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden flex">
                    <motion.div
                      className="bg-blue-600 dark:bg-blue-500 h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: 0.2 + idx * 0.1,
                        ease: 'easeOut',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
