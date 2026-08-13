import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const { lang, toggleLang, theme, toggleTheme } = useAppContext();

  const t = (translations as any)[lang].nav;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-500 tracking-wide">
          Dmytro.dev
        </div>

        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li>
            <a
              href="#skills"
              className="hover:text-blue-500 transition-colors"
            >
              {t.skills}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-500 transition-colors"
            >
              {t.projects}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 transition-colors"
            >
              {t.contact}
            </a>
          </li>

          <button
            onClick={toggleLang}
            className="flex items-center gap-1 hover:text-blue-500 transition-colors uppercase font-bold"
          >
            <Globe size={16} />
            {lang}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? (
              <Sun
                size={18}
                className="text-yellow-400"
              />
            ) : (
              <Moon
                size={18}
                className="text-gray-700"
              />
            )}
          </button>
        </ul>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
