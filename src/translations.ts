export interface NavTranslation {
  skills: string;
  projects: string;
  contact: string;
}

export interface HeroTranslation {
  greeting: string;
  name: string;
  role: string;
  btnProjects: string;
  btnContact: string;
  btnCV: string;
}

export interface SkillsTranslation {
  title: string;
  levels: Record<number, string>;
}

export interface ProjectItemTranslation {
  title: string;
  description: string;
  fullDescription: string;
}

export interface ProjectsTranslation {
  title: string;
  categories: Record<string, string>;
  detailsBtn: string;
  demoBtn: string;
  modalClose: string;
  viewProject: string;
  items: ProjectItemTranslation[];
  [key: string]: any;
}

export interface DashboardRow {
  game: string;
  role: string;
  character: string;
}

export interface DashboardTranslation {
  title: string;
  desc: string;
  headers: Record<string, string>;
  rows: DashboardRow[];
}

export interface ContactTranslation {
  title: string;
  desc: string;
  form: {
    name: string;
    email: string;
    message: string;
    sendBtn: string;
  };
  socials: {
    title: string;
    telegram: string;
    github: string;
    email: string;
  };
}

export interface Translation {
  nav: NavTranslation;
  hero: HeroTranslation;
  skills: SkillsTranslation;
  projects: ProjectsTranslation;
  dashboard: DashboardTranslation;
  contact: ContactTranslation;
  about: AboutTranslation;
  experience: ExperienceTranslation;
}
export interface AboutTranslation {
  title: string;
  terminal: {
    command1: string;
    response1: string;
    command2: string;
    response2: string;
    command3: string;
    response3: string;
  };
  cards: {
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
  };
}
export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  description: string;
}

export interface ExperienceTranslation {
  title: string;
  items: ExperienceItem[];
}
export const translations: Record<'ua' | 'en', Translation> = {
  ua: {
    nav: { skills: 'Навички', projects: 'Проєкти', contact: 'Контакти' },
    hero: {
      greeting: 'Привіт, я',
      name: 'Дмитро',
      role: 'Frontend-розробник. Створюю сучасні та інтерактивні веб-додатки. Маю сильний фокус на клієнтській частині, але завдяки комерційному досвіду впевнено працюю з Docker, інфраструктурою та бекендом.',
      btnProjects: 'Мої проєкти',
      btnContact: "Зв'язатися",
      btnCV: 'Завантажити CV',
    },
    skills: {
      title: 'Мої навички',
      levels: {
        1: 'Початківець',
        2: 'Базовий',
        3: 'Середній',
        4: 'Впевнений',
        5: 'Просунутий',
      },
    },
    projects: {
      title: 'Мої проєкти',
      categories: {
        all: 'Всі',
        frontend: 'Frontend',
        backend: 'Backend',
        infrastructure: 'Infrastructure',
      },
      detailsBtn: 'Детальніше',
      demoBtn: 'Video Demo',
      modalClose: 'Закрити',
      viewProject: 'Переглянути проєкт',
      items: [
        {
          title: 'Health Metrics Tracker',
          description:
            "Веб-додаток для відстеження та аналізу показників здоров'я. Створений з продуманою архітектурою безпеки даних.",
          fullDescription:
            "Повноцінний додаток для трекінгу здоров'я. Фронтенд розроблено на React, а бекенд — на FastAPI для швидкої та безпечної обробки даних пацієнтів. Реалізовано авторизацію, дашборди з графіками та оптимізовані запити до бази даних.",
        },
        {
          title: 'EZON SHOP',
          description:
            'Підтримка та розвиток онлайн-маркетплейсу. Забезпечення локальної розробки, виправлення помилок бази даних.',
          fullDescription:
            'Робота над діючим інтернет-магазином на базі OpenCart. Мої задачі включали розгортання локального середовища через Docker, написання кастомних шаблонів на Twig, оптимізацію SQL-запитів (MariaDB) та виправлення критичних багів у роботі платформи.',
        },
        {
          title: 'Mtsbaza',
          description:
            'Модифікація коду та оптимізація робочих процесів. Налаштування Docker-контейнерів.',
          fullDescription:
            'Участь у розробці та підтримці репозиторію. Налаштовував конфігурації Docker та Nginx для стабільної роботи локальних серверів, працював з гілками в Git, виконував дебагінг та вирішував проблеми сумісності середовищ.',
        },
      ],
    },
    dashboard: {
      title: 'Сортування даних (Демо)',
      desc: 'Клікніть на заголовок колонки, щоб відсортувати таблицю. Реалізовано через custom hooks та useMemo.',
      headers: {
        game: 'Гра',
        role: 'Роль',
        character: 'Персонаж / Ранг',
        winrate: 'Winrate %',
      },
      rows: [
        { game: 'Dota 2', role: 'Mid Lane', character: 'Void Spirit' },
        { game: 'Dota 2', role: 'Soft Support', character: 'Hoodwink' },
        { game: 'Valorant', role: 'Flex', character: 'Silver 2 (Rank)' },
        { game: 'Minecraft', role: 'Builder', character: 'Steve' },
      ],
    },
    contact: {
      title: "Зв'язатися зі мною",
      desc: 'Шукаєте розробника для вашого проєкту, маєте питання щодо співпраці або просто хочете поспілкуватися? Я завжди відкритий до нових пропозицій!',
      form: {
        name: "Ваше ім'я",
        email: 'Ваш Email',
        message: 'Повідомлення...',
        sendBtn: 'Надіслати',
      },
      socials: {
        title: 'Або напишіть напряму',
        telegram: 'Мій Telegram',
        github: 'Мій GitHub',
        email: 'Електронна пошта',
      },
    },
    about: {
      title: 'Про мене',
      terminal: {
        command1: '> whoami',
        response1:
          'Дмитро. Frontend-розробник, який створює сучасні інтерфейси та не боїться лізти під капот.',
        command2: '> cat current_focus.txt',
        response2:
          'Працюю в Stelium team. Основний фокус — фронтенд, але легко налаштовую інфраструктуру через Docker та розбираюся в архітектурі баз даних.',
        command3: '> ./get_status.sh',
        response3: 'Статус: Готовий до складних інженерних задач. 🟢',
      },
      cards: {
        card1Title: 'Frontend & Infrastructure',
        card1Desc:
          'Створюю UI/UX на React та Tailwind. При цьому маю комерційний досвід налаштування середовищ через Docker, роботи з Nginx та підтримки бекенд-процесів.',
        card2Title: 'Дисципліна та Аналітика',
        card2Desc:
          'Ефективність у розробці підтримується дисципліною. Регулярний біг та турнік дають витримку, а тактичні сесії в DotA 2 та Valorant — розвивають стратегічне мислення.',
      },
    },
    experience: {
      title: 'Освіта та Досвід',
      items: [
        {
          date: '2025 — Теперішній час',
          role: 'Full-Stack Розробник',
          company: 'Stelium team',
          description:
            'Розробка, оптимізація та підтримка сучасних веб-додатків. Вирішення складних технічних задач, проєктування архітектури баз даних та створення інтерактивних користувацьких інтерфейсів з використанням передового стеку технологій.',
        },
        {
          date: 'Квітень 20 — Травень 17, 2026',
          role: 'Розробник (Переддипломна практика)',
          company: 'Бакалаврська кваліфікаційна робота',
          description:
            'Розробка та проєктування проєкту «Web Application for Symptom Tracking and Analysis». Створення повноцінної архітектури, бекенду та фронтенду для платформи моніторингу медичних показників.',
        },
        {
          date: 'Червень 2026',
          role: 'Диплом Бакалавра',
          company: 'КПІ ім. Ігоря Сікорського',
          description:
            "Успішний захист кваліфікаційної роботи та здобуття ступеня бакалавра за спеціальністю 122 «Комп'ютерні науки».",
        },
        {
          date: '2022 — 2026',
          role: "Студент (Комп'ютерні науки)",
          company: 'Факультет біомедичної інженерії',
          description:
            'Кафедра біомедичної кібернетики. Навчання в одному з найпрестижніших технічних університетів країни. Здобуття фундаментальних знань з програмування, алгоритмів, проєктування баз даних та розробки медичних інформаційних систем.',
        },
      ],
    },
  },
  en: {
    nav: { skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      greeting: 'Hi, I am',
      name: 'Dmytro',
      role: 'Frontend Developer. I build modern and interactive web applications. While my main focus is on the client side, commercial experience has made me confident in working with Docker, backend operations, and infrastructure.',
      btnProjects: 'My Projects',
      btnContact: 'Contact Me',
      btnCV: 'Download CV',
    },
    skills: {
      title: 'My Skills',
      levels: {
        1: 'Beginner',
        2: 'Basic',
        3: 'Intermediate',
        4: 'Advanced',
        5: 'Proficient',
      },
    },
    projects: {
      title: 'My Projects',
      categories: {
        all: 'All',
        frontend: 'Frontend',
        backend: 'Backend',
        infrastructure: 'Infrastructure',
      },
      detailsBtn: 'Details',
      demoBtn: 'Video Demo',
      modalClose: 'Close',
      viewProject: 'View Project',
      items: [
        {
          title: 'Health Metrics Tracker',
          description:
            'Web application for tracking and analyzing health metrics, built with a robust data security architecture.',
          fullDescription:
            'A comprehensive health tracking app. The frontend is built with React, and the backend utilizes FastAPI for fast and secure data processing. Features include user authentication, interactive dashboard charts, and optimized database queries.',
        },
        {
          title: 'EZON SHOP',
          description:
            'Maintenance and development of an online marketplace. Ensuring local environment setup and database bug fixes.',
          fullDescription:
            'Working on an active OpenCart e-commerce store. Tasks included Docker local environment deployment, custom Twig template development, SQL query optimization (MariaDB), and fixing critical platform bugs.',
        },
        {
          title: 'Mtsbaza',
          description:
            'Code modification and workflow optimization. Docker container configuration and server management.',
          fullDescription:
            'Involved in repository development and maintenance. Configured Docker and Nginx for stable local server performance, managed Git branches, performed debugging, and resolved environment compatibility issues.',
        },
      ],
    },
    dashboard: {
      title: 'Data Sorting (Demo)',
      desc: 'Click on a column header to sort the table. Implemented using custom hooks and useMemo.',
      headers: {
        game: 'Game',
        role: 'Role',
        character: 'Character / Rank',
        winrate: 'Winrate %',
      },
      rows: [
        { game: 'Dota 2', role: 'Mid Lane', character: 'Void Spirit' },
        { game: 'Dota 2', role: 'Soft Support', character: 'Hoodwink' },
        { game: 'Valorant', role: 'Flex', character: 'Silver 2 (Rank)' },
        { game: 'Minecraft', role: 'Builder', character: 'Steve' },
      ],
    },
    contact: {
      title: 'Get In Touch',
      desc: 'Looking for a developer for your project, have questions about collaboration, or just want to chat? I am always open to new opportunities!',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Message...',
        sendBtn: 'Send Message',
      },
      socials: {
        title: 'Or reach out directly',
        telegram: 'My Telegram',
        github: 'My GitHub',
        email: 'Email Address',
      },
    },
    about: {
      title: 'About Me',
      terminal: {
        command1: '> whoami',
        response1:
          'Dmytro. Frontend developer who builds modern interfaces and is perfectly comfortable under the hood.',
        command2: '> cat current_focus.txt',
        response2:
          'Currently at Stelium team. My main focus is frontend, but I easily configure infrastructure via Docker and understand database architecture.',
        command3: '> ./get_status.sh',
        response3: 'Status: Ready for complex engineering challenges. 🟢',
      },
      cards: {
        card1Title: 'Frontend & Infrastructure',
        card1Desc:
          'Building UI/UX with React and Tailwind. Alongside this, I have commercial experience setting up environments via Docker, configuring Nginx, and supporting backend processes.',
        card2Title: 'Discipline & Analytics',
        card2Desc:
          'Technical efficiency requires personal discipline. Regular running and bodyweight workouts build endurance, while tactical gaming in DotA 2 and Valorant sharpens strategic thinking.',
      },
    },
    experience: {
      title: 'Education & Experience',
      items: [
        {
          date: '2025 — Present',
          role: 'Full-Stack Developer',
          company: 'Stelium team',
          description:
            'Development, optimization, and maintenance of modern web applications. Solving complex technical challenges, designing database architectures, and creating interactive user interfaces using a modern tech stack.',
        },
        {
          date: 'April 20 — May 17, 2026',
          role: 'Developer (Pre-diploma Practice)',
          company: "Bachelor's Qualification Thesis",
          description:
            'Development and architecture design for the "Web Application for Symptom Tracking and Analysis". Built the complete backend and frontend for the medical symptom tracking platform.',
        },
        {
          date: 'June 2026',
          role: "Bachelor's Degree",
          company: 'Igor Sikorsky Kyiv Polytechnic Institute',
          description:
            'Successful defense of the qualification thesis and graduation with a Bachelor\'s degree in Specialty 122 "Computer Sciences".',
        },
        {
          date: '2022 — 2026',
          role: 'Student (Computer Sciences)',
          company: 'Faculty of Biomedical Engineering',
          description:
            'Department of Biomedical Cybernetics. Studying at one of the most prestigious technical universities in the country. Gained foundational knowledge in programming, algorithms, database design, and the development of medical information systems.',
        },
      ],
    },
  },
};
