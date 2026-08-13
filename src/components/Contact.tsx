import React from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Send, Mail } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations';
import MagneticButton from './MagneticButton';

const Contact: React.FC = () => {
  const { lang } = useAppContext();
  const t = translations[lang].contact;

  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-6xl mx-auto transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100"
      >
        {t.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-gray-600 dark:text-gray-400 mb-16 leading-relaxed max-w-2xl mx-auto"
      >
        {t.desc}
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form
            action="https://formspree.io/f/myegpylg"
            method="POST"
            className="flex flex-col gap-6 text-left h-full justify-center"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                name="name"
                required
                placeholder={t.form.name}
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={t.form.email}
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              />
            </div>
            <textarea
              name="message"
              required
              rows={5}
              placeholder={t.form.message}
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none shadow-sm"
            ></textarea>

            <div className="mt-2">
              <MagneticButton>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-blue-500/30 text-lg"
                >
                  {t.form.sendBtn}
                </button>
              </MagneticButton>
            </div>
          </form>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-3">
            {t.socials.title}
          </h3>

          <div className="flex flex-col gap-4">
            <a
              href="https://t.me/ChOopPerR_chop"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full mr-5 group-hover:scale-110 group-hover:shadow-blue-500/20 shadow-sm transition-all duration-300">
                <Send
                  className="text-blue-500"
                  size={24}
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  Telegram
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  @ChOopPerR_chop
                </p>
              </div>
            </a>

            <a
              href="https://github.com/GGgg2005-art"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full mr-5 group-hover:scale-110 group-hover:shadow-blue-500/20 shadow-sm transition-all duration-300">
                <GitPullRequest
                  className="text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors"
                  size={24}
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  GitHub
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  github.com/GGgg2005-art
                </p>
              </div>
            </a>

            <a
              href="mailto:brawl20088@gmail.com"
              className="group flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full mr-5 group-hover:scale-110 group-hover:shadow-blue-500/20 shadow-sm transition-all duration-300">
                <Mail
                  className="text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors"
                  size={24}
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  {t.socials.email}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  brawl20088@gmail.com
                </p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
