export const projects = [
  {
    id: 1,
    title: "EventPulse - Event Management",
    description: "Engineered a real-time academic event tracker using a Spring Boot backend and WebSocket for live updates. Implemented secure role-based authentication with Spring Security and automated email notifications via JavaMail API.",
    techStack: ["Java", "Spring Boot", "WebSocket", "MySQL", "Thymeleaf"],
    image: "/projects/eventpulse.png", 
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 2,
    title: "Stock Price Prediction Model",
    description: "Developed a financial forecasting tool using Long Short-Term Memory (LSTM) neural networks to predict stock closing prices. Visualized trends and model performance (RMSE) using Matplotlib and deployed via Streamlit.",
    techStack: ["Python", "LSTM", "Keras", "TensorFlow", "Streamlit"],
    image: "/projects/stock.png", 
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 3,
    title: "Automated Exam Timetable",
    description: "Created an optimization system to solve complex scheduling constraints (room capacity, student conflicts). Utilized Integer Linear Programming (ILP) and Genetic Algorithms to generate conflict-free timetables automatically.",
    techStack: ["Python", "Google OR-Tools", "Genetic Algorithms"],
    image: "/projects/timetable.png",
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 4,
    title: "IoT Smart Home (CADIO)",
    description: "Designed a voice-controlled home automation system integrating ESP32 microcontrollers with Google Assistant and Amazon Alexa. Enabled remote control of appliances with real-time status monitoring via cloud integration.",
    techStack: ["ESP32", "C++", "IoT Sensors", "Google Assistant API"],
    image: "/projects/iot.png",
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 5,
    title: "Retail Management (Walmart)",
    description: "Customized and deployed an Odoo-based ERP solution to streamline inventory, POS, and CRM operations. Automating sales forecasting using linear regression and improved inventory accuracy.",
    techStack: ["Odoo ERP", "Python", "PostgreSQL"],
    image: "/projects/retail.png", // Make sure to add this image or use a placeholder
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 6,
    title: "Phishing Website Detection",
    description: "Built a cybersecurity tool to detect social media phishing attacks. Extracted URL and content-based features to train ML classifiers (Random Forest/SVM), achieving high accuracy in distinguishing legitimate sites.",
    techStack: ["Python", "Machine Learning", "Scikit-learn"],
    image: "/projects/security.png", // Make sure to add this image
    githubLink: "#",
    liveLink: "#"
  },
  {
    id: 7,
    title: "Secure Data Leakage Detection",
    description: "Developed a data protection system using a hybrid cryptography approach (AES, Triple DES, RSA) to prevent unauthorized data access and track data leakage sources in corporate environments.",
    techStack: ["Java", "Cryptography", "Network Security"],
    image: "/projects/crypto.png", // Make sure to add this image
    githubLink: "#",
    liveLink: "#"
  }
];