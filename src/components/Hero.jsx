import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { aboutMe, contact } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 justify-items-center items-center"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p
                className="text-lg text-muted-foreground font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {aboutMe.title.default}
              </motion.p>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-primary">{aboutMe.title.bold}</span>
              </motion.h1>

              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {aboutMe.pfp.experience.bold}
                </span>
                <span className="text-2xl md:text-3xl text-muted-foreground">
                  {aboutMe.pfp.experience.default}
                </span>
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {aboutMe.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Tecnologias que uso
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {aboutMe.techs.map((tech, index) => (
                  <motion.span
                    key={tech.tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-border bg-card hover:bg-accent transition-colors duration-200"
                    style={{
                      backgroundColor: tech.bgcolor + "20",
                      borderColor: tech.bgcolor + "40",
                      color: tech.bgcolor,
                    }}
                  >
                    {tech.tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={contact.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Entre em contato</span>
              </motion.a>

              <motion.a
                href="/Valter_Goes_FrontEnd_Developer.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex space-x-6 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: contact.social.github, label: "GitHub", color: "#181717", hoverBg: "hover:bg-[#181717]" },
                { icon: Linkedin, href: contact.social.linkedin, label: "LinkedIn", color: "#0A66C2", hoverBg: "hover:bg-[#0A66C2]" },
                { icon: Mail, href: `mailto:${contact.email}`, label: "Email", color: "#EA4335", hoverBg: "hover:bg-[#EA4335]" },
              ].map(({ icon: SocialIcon, href, label, hoverBg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-secondary ${hoverBg} hover:text-white transition-colors duration-200 text-muted-foreground`}
                  aria-label={label}
                >
                  <SocialIcon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            className="flex w-full justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={aboutMe.pfp.image.url}
                  alt={aboutMe.pfp.image.alt}
                  loading="eager"
                  className="w-90 h-120 rounded-xl lg:rounded-none lg:w-[100%] lg:h-[920px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
            aria-label="Rolar para baixo"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
