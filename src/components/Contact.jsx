import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, GraduationCap, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { contact } = portfolioData;
  const [formState, setFormState] = useState('idle'); // idle | sending | success | error
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

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

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');

    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.open(mailtoLink, '_blank');
    setFormState('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setFormState('idle'), 4000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes.
              Vamos conversar sobre como posso ajudar voce!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informacoes de Contato
                </h3>

                <div className="space-y-6">
                  <motion.a
                    href={`mailto:${contact.email}`}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {contact.email}
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={contact.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <WhatsAppIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {contact.phone}
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Localizacao</p>
                      <p className="text-muted-foreground">{contact.location}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Redes e Perfis
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: contact.social.github, label: "GitHub", hoverBg: "hover:bg-[#181717]" },
                    { icon: Linkedin, href: contact.social.linkedin, label: "LinkedIn", hoverBg: "hover:bg-[#0A66C2]" },
                    { icon: WhatsAppIcon, href: contact.social.whatsapp, label: "WhatsApp", hoverBg: "hover:bg-[#25D366]" },
                  ].map(({ icon: SocialIcon, href, label, hoverBg }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-secondary ${hoverBg} hover:text-white rounded-lg transition-colors duration-200 text-muted-foreground`}
                      aria-label={label}
                      title={label}
                    >
                      <SocialIcon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {formState === 'sending' && <Loader2 className="w-5 h-5 animate-spin" />}
                  {formState === 'success' && <CheckCircle className="w-5 h-5" />}
                  {formState === 'error' && <AlertCircle className="w-5 h-5" />}
                  {formState === 'idle' && <Send className="w-5 h-5" />}
                  <span>
                    {formState === 'sending' && 'Enviando...'}
                    {formState === 'success' && 'Mensagem enviada!'}
                    {formState === 'error' && 'Erro ao enviar. Tente novamente.'}
                    {formState === 'idle' && 'Enviar'}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
