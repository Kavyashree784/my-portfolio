// 1. Add 'VscVscode' to a new import line
import { VscVscode } from "react-icons/vsc"; 

import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaGithub, FaNetworkWired, FaLock, FaMicrochip, FaExchangeAlt, FaCode } from "react-icons/fa";

// 2. Remove 'SiVisualstudiocode' from this list
import { SiSpringboot, SiMysql, SiMongodb, SiPostman, SiTensorflow, SiCplusplus, SiExpress, SiHibernate, SiPostgresql, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiGooglecolab, SiJira } from "react-icons/si";

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: FaJava, color: "#5382a1" },
      { name: "Python", icon: FaPython, color: "#3776ab" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" }
    ]
  },
  {
    category: "Frameworks & Databases",
    items: [
      { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
      { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#00758f" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
    ]
  },
  {
    category: "AI & Data Science",
    items: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" }
    ]
  },
  {
    category: "Concepts & Engineering",
    items: [
      { name: "REST APIs", icon: FaExchangeAlt, color: "#2d3436" },
      { name: "Microservices", icon: FaNetworkWired, color: "#0984e3" },
      { name: "Agile & Scrum", icon: SiJira, color: "#0052CC" },
      { name: "OOP", icon: FaCode, color: "#6c5ce7" },
      { name: "IoT Integration", icon: FaMicrochip, color: "#00b894" },
      { name: "Cryptography", icon: FaLock, color: "#d63031" }
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Docker", icon: FaDocker, color: "#2496ed" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      // 3. Use the new VscVscode icon here
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" }
    ]
  }
];