import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import logo from '../assets/logo.svg';

const BrazilFlag = ({ className }) => (
  <svg viewBox="0 0 640 480" className={className}>
    <rect width="640" height="480" fill="#009b3a" />
    <polygon points="320,39 590,240 320,441 50,240" fill="#fedf00" />
    <circle cx="320" cy="240" r="100" fill="#002776" />
    <path d="M195,240 Q320,160 445,240" fill="none" stroke="#fff" strokeWidth="14" />
  </svg>
);

const USFlag = ({ className }) => (
  <svg viewBox="0 0 640 480" className={className}>
    <rect width="640" height="480" fill="#fff" />
    <g>
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <rect key={i} y={i * 68.57} width="640" height="34.28" fill="#b22234" />
      ))}
    </g>
    <rect width="256" height="240" fill="#3c3b6e" />
    {[0, 1, 2, 3, 4].map(row =>
      [0, 1, 2, 3, 4, 5].map(col => (
        <circle key={`${row}-${col}`} cx={21.3 + col * 42.6} cy={20 + row * 48} r="8" fill="#fff" />
      ))
    )}
    {[0, 1, 2, 3].map(row =>
      [0, 1, 2, 3, 4].map(col => (
        <circle key={`s${row}-${col}`} cx={42.6 + col * 42.6} cy={44 + row * 48} r="8" fill="#fff" />
      ))
    )}
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.contact, id: 'contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-1 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img src={logo} alt="Logo de Valter Goes" className="w-30 h-20 inline-block" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
              aria-label={isDarkMode ? t.theme.light : t.theme.dark}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-secondary transition-colors duration-200 text-sm font-medium text-foreground overflow-hidden ${language === 'pt' ? 'flex-row' : 'flex-row-reverse'}`}
              aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Portugues'}
            >
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative w-8 h-6 overflow-hidden rounded-full shadow-[1px_1px_3px_rgba(0,0,0,0.3),-1px_-1px_2px_rgba(255,255,255,0.15)] dark:shadow-[1px_1px_3px_rgba(0,0,0,0.5),-1px_-1px_2px_rgba(255,255,255,0.08)] border border-white/20 dark:border-white/10"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={language}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 30, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {language === 'pt' ? (
                      <USFlag className="w-9 h-9" />
                    ) : (
                      <BrazilFlag className="w-9 h-9" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
              <motion.span layout transition={{ type: 'spring', stiffness: 300, damping: 25 }} className="uppercase">{language === 'pt' ? 'EN' : 'PT'}</motion.span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Toggle Mobile */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2.5 py-2 rounded-full bg-secondary transition-colors duration-200 text-sm font-medium text-foreground overflow-hidden ${language === 'pt' ? 'flex-row' : 'flex-row-reverse'}`}
              aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Portugues'}
            >
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative w-6 h-6 overflow-hidden rounded-full shadow-[1px_1px_3px_rgba(0,0,0,0.3),-1px_-1px_2px_rgba(255,255,255,0.15)] dark:shadow-[1px_1px_3px_rgba(0,0,0,0.5),-1px_-1px_2px_rgba(255,255,255,0.08)] border border-white/20 dark:border-white/10"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={language}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 30, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {language === 'pt' ? (
                      <USFlag className="w-9 h-9" />
                    ) : (
                      <BrazilFlag className="w-9 h-9" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
              <motion.span layout transition={{ type: 'spring', stiffness: 300, damping: 25 }} className="uppercase text-xs">{language === 'pt' ? 'EN' : 'PT'}</motion.span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
              aria-label={isDarkMode ? t.theme.light : t.theme.dark}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
              aria-label={isMenuOpen ? t.menu.close : t.menu.open}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-border"
            >
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
