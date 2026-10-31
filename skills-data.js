// Niveaux validés par Oumaima. Catégories méthodes corrigées.
const skillFilters = ["Toutes","Développement","IA & Data","Cloud & DevOps","Mobile","Réseaux & Sécurité","Outils & Méthodes"];
const portfolioSkills = [
  {
    "name": "Python",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Avancé"
  },
  {
    "name": "Java",
    "glyph": "code",
    "filters": [
      "Développement",
      "Mobile"
    ],
    "level": "Avancé"
  },
  {
    "name": "C",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "C++",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "C#",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Notions"
  },
  {
    "name": "JavaScript",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "TypeScript",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Avancé"
  },
  {
    "name": "PHP",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Dart",
    "glyph": "code",
    "filters": [
      "Développement",
      "Mobile"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "React",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Avancé"
  },
  {
    "name": "Next.js",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "HTML5",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "CSS3",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Bootstrap",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Tailwind CSS",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Framer Motion",
    "glyph": "code",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Spring Boot",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Avancé"
  },
  {
    "name": "FastAPI",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Avancé"
  },
  {
    "name": "Flask",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Laravel",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Jakarta EE",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "API REST",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Avancé"
  },
  {
    "name": "Swagger/OpenAPI",
    "glyph": "database",
    "filters": [
      "Développement",
      "Outils & Méthodes"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "JDBC/JPA",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Pydantic",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Avancé"
  },
  {
    "name": "Oracle",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Avancé"
  },
  {
    "name": "MySQL",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "PostgreSQL",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "SQL Server",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "SQL/PLSQL",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Avancé"
  },
  {
    "name": "optimisation SQL",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Avancé"
  },
  {
    "name": "import CSV",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "dédoublonnage",
    "glyph": "database",
    "filters": [
      "Développement"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "TensorFlow",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Keras",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "PyTorch",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "XGBoost",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Scikit-learn",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Pandas",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "CNN",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "RNN",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Transfer Learning",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "SMOTE",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "augmentation de données",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "FaceNet",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "détection d’objets",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "classification médicale",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "ELA",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "EasyOCR",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "TensorFlow Lite",
    "glyph": "brain",
    "filters": [
      "IA & Data",
      "Mobile"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Jupyter",
    "glyph": "brain",
    "filters": [
      "IA & Data",
      "Outils & Méthodes"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Google Colab",
    "glyph": "brain",
    "filters": [
      "IA & Data",
      "Outils & Méthodes"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "LLM",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "RAG",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "fine-tuning LLM",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Prompt Engineering",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "chatbots",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "extraction d’information",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "matching sémantique",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "orchestration agentique",
    "glyph": "brain",
    "filters": [
      "IA & Data"
    ],
    "level": "Avancé"
  },
  {
    "name": "Docker",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Avancé"
  },
  {
    "name": "Jenkins",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "GitHub Actions",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "CI/CD",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Bitbucket",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps",
      "Outils & Méthodes"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Git",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps",
      "Outils & Méthodes"
    ],
    "level": "Avancé"
  },
  {
    "name": "GitHub",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps",
      "Outils & Méthodes"
    ],
    "level": "Avancé"
  },
  {
    "name": "pytest",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps",
      "Outils & Méthodes"
    ],
    "level": "Avancé"
  },
  {
    "name": "tests unitaires et fonctionnels",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps",
      "Outils & Méthodes"
    ],
    "level": "Avancé"
  },
  {
    "name": "Prometheus",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Grafana",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Streamlit",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "n8n",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "variables d’environnement",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "AWS Academy",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Notions"
  },
  {
    "name": "cloud computing",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Notions"
  },
  {
    "name": "administration et sécurité des systèmes",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Notions"
  },
  {
    "name": "sécurité des réseaux et des données",
    "glyph": "gear",
    "filters": [
      "Cloud & DevOps"
    ],
    "level": "Notions"
  },
  {
    "name": "Flutter",
    "glyph": "phone",
    "filters": [
      "Mobile"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "React Native",
    "glyph": "phone",
    "filters": [
      "Mobile"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Expo",
    "glyph": "phone",
    "filters": [
      "Mobile"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Android",
    "glyph": "phone",
    "filters": [
      "Mobile"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Firebase",
    "glyph": "phone",
    "filters": [
      "Mobile"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "géolocalisation",
    "glyph": "phone",
    "filters": [
      "Mobile"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "JWT",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "hachage",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "contrôle des accès",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "validation des données",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "séparation lecture/écriture",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "journal d’audit",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "POO",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité",
      "Outils & Méthodes"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "architecture microservices",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité",
      "Outils & Méthodes"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "revues de code",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité",
      "Outils & Méthodes"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Agile/Scrum",
    "glyph": "shield",
    "filters": [
      "Outils & Méthodes"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "Jira",
    "glyph": "shield",
    "filters": [
      "Outils & Méthodes"
    ],
    "level": "Avancé"
  },
  {
    "name": "Confluence",
    "glyph": "shield",
    "filters": [
      "Outils & Méthodes"
    ],
    "level": "Intermédiaire"
  },
  {
    "name": "documentation technique",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité",
      "Outils & Méthodes"
    ],
    "level": "Avancé"
  },
  {
    "name": "réseaux informatiques et d’opérateurs",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Notions"
  },
  {
    "name": "routage",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Notions"
  },
  {
    "name": "transmission numérique",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Notions"
  },
  {
    "name": "modulation",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Notions"
  },
  {
    "name": "communications sans fil",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Notions"
  },
  {
    "name": "systèmes mobiles",
    "glyph": "shield",
    "filters": [
      "Réseaux & Sécurité"
    ],
    "level": "Notions"
  }
];
