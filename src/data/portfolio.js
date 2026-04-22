import perfilImg from '../assets/perfil2.png';
import maragonesaImg from '../assets/maragonesa-silveira.webp';
import electricImg from '../assets/electric-systems.webp';
import organizaImg from '../assets/organiza-grana.webp';
import rentalImg from '../assets/rental-easy.webp';

export const portfolioData = {
  aboutMe: {
    title: {
      default: "Olá, sou o",
      bold: "Valter Goes"
    },
    description: "Desenvolvedor Front-End com experiência sólida em React.js, Tailwind CSS e integração de APIs REST. Especializado em construir interfaces responsivas, componentizadas e de alta performance. Combino boas práticas de desenvolvimento com o uso estratégico de ferramentas de IA (Claude, GitHub Copilot) para acelerar entregas e elevar a qualidade do código.",
    contact: {
      link: "/contacts",
      label: "Entre em contato"
    },
    techs: [
      { tech: "React", color: "#000", bgcolor: "#61DAFB" },
      { tech: "TypeScript", color: "#fff", bgcolor: "#3178C6" },
      { tech: "Tailwind CSS", color: "#fff", bgcolor: "#06B6D4" },
      { tech: "JavaScript", color: "#000", bgcolor: "#F7DF1E" },
      { tech: "Vite", color: "#fff", bgcolor: "#646CFF" },
      { tech: "HTML5", color: "#fff", bgcolor: "#E34F26" },
      { tech: "CSS3", color: "#fff", bgcolor: "#1572B6" },
      { tech: "Git", color: "#fff", bgcolor: "#F05032" }
    ],
    pfp: {
      image: {
        url: perfilImg,
        alt: "Foto de Valter Goes"
      },
      experience: {
        default: "Developer",
        bold: "Front-End"
      }
    }
  },
  projects: [
    {
      slug: "maragonesa-silveira-adv",
      name: "Maragonesa Silveira ADV",
      description: "Landing Page produzida para o escritório de Direito Previdenciário Maragonesa Silveira. Projeto profissional atualmente ativo e em produção.",
      image: {
        url: maragonesaImg,
        alt: "Screenshot do projeto Maragonesa Silveira ADV"
      },
      technologies: ["React 19", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/valtergoes/Maragonesa_Silveira_ADV",
      demo: "https://maragonesa.adv.br/"
    },
    {
      slug: "electric-systems",
      name: "Electric Systems",
      description: "Landing page desenvolvida sob encomenda para a empresa Electric Systems. Projeto freelancer com design moderno e foco em conversão.",
      image: {
        url: electricImg,
        alt: "Screenshot do projeto Electric Systems"
      },
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/valtergoes/Electric-Systems",
      demo: "https://www.electric-systems.com.br/"
    },
    {
      slug: "organiza-grana",
      name: "Organiza Grana",
      description: "Aplicacao PWA para controle de contas e gastos pessoais. Interface intuitiva para gerenciamento financeiro com armazenamento local.",
      image: {
        url: organizaImg,
        alt: "Screenshot do projeto Organiza Grana"
      },
      technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      github: "https://github.com/valtergoes/Organiza_Grana",
      demo: "https://organiza-grana.netlify.app/"
    },
    {
      slug: "rental-easy",
      name: "RentalEasy",
      description: "Plataforma web de aluguel de veículos desenvolvida com React e Node.js. Sistema completo com listagem, filtros e interface moderna.",
      image: {
        url: rentalImg,
        alt: "Imagem do projeto RentalEasy"
      },
      technologies: ["React", "Tailwind CSS", "Node.js", "Firebase"],
      github: "https://github.com/valtergoes/RentalEasy"
    }
  ],
  contact: {
    email: "valtergoes@outlook.com",
    phone: "+55 (51) 99936-1247",
    location: "Balneário Camboriú, SC - Brasil",
    social: {
      github: "https://github.com/valtergoes",
      linkedin: "https://linkedin.com/in/valtergoes",
      whatsapp: "https://wa.me/5551999361247",
      dio: "https://www.dio.me/users/valtergoes_37822"
    }
  },
  skills: {
    frontend: [
      "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
      "Tailwind CSS", "shadcn/ui", "Radix UI", "Styled Components", "Sass"
    ],
    tools: [
      "Git", "GitHub", "VS Code", "Figma", "Vite",
      "NPM", "Netlify", "Scrum", "Claude AI", "GitHub Copilot"
    ],
    learning: [
      "Node.js", "Next.js", "AWS Cloud", "SQL", "Docker"
    ]
  }
};
