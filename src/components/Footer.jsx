import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import logoCompleta from "../assets/logo-completa.svg";
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-2 py-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span>&copy; {currentYear}</span>
            <img
              src={logoCompleta}
              alt="Valter Goes - Logo"
              className="h-10 opacity-80"
            />
            <span>{t.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
