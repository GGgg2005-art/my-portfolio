import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../translations';

interface RowData {
  id: number;
  game: string;
  role: string;
  character: string;
  winrate: number;
}

interface SortConfig {
  key: keyof RowData | null;
  direction: 'ascending' | 'descending';
}

const rawWinrates: number[] = [62, 58, 51, 100];

const Dashboard: React.FC = () => {
  const { lang } = useAppContext();
  const t = (translations as any)[lang].dashboard;

  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: 'ascending',
  });

  const data: RowData[] = useMemo(() => {
    return t.rows.map((row: any, index: number) => ({
      id: index + 1,
      ...row,
      winrate: rawWinrates[index],
    }));
  }, [t]);

  const requestSort = (key: keyof RowData) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key!];
        const bValue = b[sortConfig.key!];

        if (aValue < bValue) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800 mt-10 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          {t.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-10">
          {t.desc}
        </p>

        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide border-b border-gray-200 dark:border-gray-700">
                <th
                  className="p-4 font-semibold cursor-pointer hover:text-blue-600 dark:hover:text-white transition"
                  onClick={() => requestSort('game')}
                >
                  <div className="flex items-center gap-2">
                    {t.headers.game} <ArrowUpDown size={14} />
                  </div>
                </th>
                <th
                  className="p-4 font-semibold cursor-pointer hover:text-blue-600 dark:hover:text-white transition"
                  onClick={() => requestSort('role')}
                >
                  <div className="flex items-center gap-2">
                    {t.headers.role} <ArrowUpDown size={14} />
                  </div>
                </th>
                <th
                  className="p-4 font-semibold cursor-pointer hover:text-blue-600 dark:hover:text-white transition"
                  onClick={() => requestSort('character')}
                >
                  <div className="flex items-center gap-2">
                    {t.headers.character} <ArrowUpDown size={14} />
                  </div>
                </th>
                <th
                  className="p-4 font-semibold cursor-pointer hover:text-blue-600 dark:hover:text-white transition"
                  onClick={() => requestSort('winrate')}
                >
                  <div className="flex items-center gap-2">
                    {t.headers.winrate} <ArrowUpDown size={14} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              {sortedData.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition"
                >
                  <td className="p-4">{row.game}</td>
                  <td className="p-4">
                    <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium border border-blue-200 dark:border-blue-800/50">
                      {row.role}
                    </span>
                  </td>
                  <td className="p-4 font-medium">{row.character}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                          style={{ width: `${row.winrate}%` }}
                        ></div>
                      </div>
                      <span className="text-sm w-8">{row.winrate}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
};

export default Dashboard;
