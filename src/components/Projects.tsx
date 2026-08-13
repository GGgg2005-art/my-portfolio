import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations';

interface ProjectMeta {
  tech: string[];
  category: string;
  linkTextKey: string;
  linkUrl: string;
}

const rawProjectsMeta: ProjectMeta[] = [
  {
    tech: ['React', 'Tailwind CSS', 'FastAPI', 'Docker', 'Nginx'],
    category: 'Frontend',
    linkTextKey: 'demoBtn',
    linkUrl: '#',
  },
  {
    tech: [
      'OpenCart 3',
      'PHP',
      'Twig',
      'jQuery',
      'Bootstrap',
      'MVC',
      'MariaDB',
      'Docker',
      'Nginx',
    ],
    category: 'Backend',
    linkTextKey: 'detailsBtn',
    linkUrl: '#',
  },
  {
    tech: ['OpenCart 2', 'TPL', 'MariaDB', 'Docker', 'Nginx'],
    category: 'Infrastructure',
    linkTextKey: 'detailsBtn',
    linkUrl: '#',
  },
];

const categoryKeys: string[] = ['all', 'frontend', 'backend', 'infrastructure'];

const Projects: React.FC = () => {
  const { lang } = useAppContext();
  const t = translations[lang].projects;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);

  const projectsData = useMemo(() => {
    return rawProjectsMeta.map((meta, index) => ({
      ...meta,
      ...t.items[index],
      linkText: t[meta.linkTextKey],
    }));
  }, [t]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projectsData;
    const categoryName = t.categories[activeCategory];
    return projectsData.filter(
      (project: any) =>
        project.category.toLowerCase() === categoryName.toLowerCase() ||
        (activeCategory === 'frontend' && project.category === 'Frontend') ||
        (activeCategory === 'backend' && project.category === 'Backend') ||
        (activeCategory === 'infrastructure' &&
          project.category === 'Infrastructure'),
    );
  }, [activeCategory, projectsData, t]);

  React.useEffect(() => {
    document.body.style.overflow =
      selectedProjectIndex !== null ? 'hidden' : 'auto';
  }, [selectedProjectIndex]);

  const selectedProject =
    selectedProjectIndex !== null ? projectsData[selectedProjectIndex] : null;

  return (
    <section
      id="projects"
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

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categoryKeys.map((catKey) => (
          <button
            key={catKey}
            onClick={() => setActiveCategory(catKey)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === catKey
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {t.categories[catKey]}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: any) => {
            const originalIndex = projectsData.findIndex(
              (p: any) => p.title === project.title,
            );
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative group h-full cursor-pointer"
                onClick={() => setSelectedProjectIndex(originalIndex)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>

                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col h-full transition-colors duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 rounded-lg font-medium transition-colors duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-300 border border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800/50">
                    {project.linkText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-8 rounded-2xl max-w-2xl w-full relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedProjectIndex(null)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 pr-10">
                {selectedProject.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {selectedProject.fullDescription}
              </p>
              <div className="flex gap-4">
                <a
                  href={selectedProject.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition w-full text-center shadow-md"
                >
                  {t.viewProject}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
