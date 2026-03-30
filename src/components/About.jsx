import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const About = () => {
  const { skills } = portfolioData;
  const { language } = useLanguage();
  const t = translations[language].about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.bio1}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.bio2}
              </p>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">{t.yearsExp}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">{t.technologies}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">ADS</div>
                  <div className="text-sm text-muted-foreground">{t.education}</div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t.frontend}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t.tools}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm font-medium"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {t.learning}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.learning.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-accent text-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
