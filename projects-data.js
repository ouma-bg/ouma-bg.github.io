// Correspondances LinkedIn confirmées par Oumaima.
const portfolioProjects = [
  {
    "id": "trustguard",
    "name": "TrustGuard",
    "category": "IA & Data",
    "description": "Détecter la fraude financière en croisant transactions, chèques et identité. La plateforme vérifie aussi les signatures et déclenche des alertes. Ses modules IA sont reliés par une API FastAPI.",
    "image": "assets/project-covers/trustguard.png",
    "technologies": [
      "XGBoost",
      "PyTorch",
      "FaceNet",
      "OCR/ELA",
      "FastAPI",
      "React Native",
      "Docker",
      "CI/CD"
    ],
    "github": "https://github.com/wijdanelamsaadi-commits/FraudShield",
    "source": "https://ouma-bg.github.io/",
    "linkedinPostUrl": "https://lnkd.in/p/eNy6EKmF"
  },
  {
    "id": "aurelia",
    "name": "Aurélia",
    "category": "Web",
    "description": "Une boutique de haute joaillerie avec catalogue filtrable, panier et suivi des commandes. L’interface Next.js et TypeScript communique avec une API Spring Boot et une base MySQL.",
    "image": "assets/project-covers/aurelia.png",
    "technologies": [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Spring Boot",
      "MySQL",
      "Leaflet"
    ],
    "github": "https://github.com/ouma-bg/aurelia-jewelry",
    "source": "https://ouma-bg.github.io/",
    "linkedinPostUrl": "https://lnkd.in/p/e-zD4RaH"
  },
  {
    "id": "chatbot",
    "name": "Chatbot IA ENSA",
    "category": "IA & Data",
    "description": "Un assistant dédié aux étudiants de l’ENSA El Jadida. Il répond à partir de documents officiels, grâce à une recherche RAG et un modèle de langage local, dans une interface Streamlit.",
    "image": "assets/project-covers/ensaj-ai-assistant-pro.png",
    "technologies": [
      "Python",
      "Streamlit",
      "RAG",
      "LLM",
      "Agentic AI"
    ],
    "github": "https://github.com/ouma-bg/ensaj-chatbot-streamlit",
    "source": "https://ouma-bg.github.io/",
    "linkedinPostUrl": "https://lnkd.in/p/eejJvd4Y"
  },
  {
    "id": "attendance",
    "name": "AttendanceApp",
    "category": "IA & Data",
    "description": "Simplifier le pointage et le suivi des présences. L’application combine reconnaissance faciale et vérification GPS. Firebase et TensorFlow Lite complètent les technologies de ce projet biométrique.",
    "image": "assets/project-covers/smart-attendance.png",
    "technologies": [
      "FaceNet",
      "GPS",
      "Firebase",
      "TensorFlow Lite"
    ],
    "github": "https://github.com/ouma-bg/AttendanceApp",
    "source": "https://ouma-bg.github.io/",
    "linkedinPostUrl": "https://lnkd.in/p/eD5X9YAc"
  },
  {
    "id": "cineai",
    "name": "CineAI",
    "category": "IA & Data",
    "description": "Une application Android pour explorer des films, filtrer par genre et retrouver sa liste de visionnage. Un assistant propose des suggestions. Développée en Java et XML, elle utilise des données locales et RecyclerView.",
    "image": "assets/project-covers/cineai.png",
    "technologies": [
      "Java",
      "Android",
      "XML",
      "Material Components",
      "AndroidX RecyclerView"
    ],
    "github": "https://github.com/wijdanelamsaadi-commits/MovieApp_CineAI",
    "source": "https://ouma-bg.github.io/",
    "linkedinPostUrl": "https://lnkd.in/p/exM6SzMS",
    "technologyVerification": "Java, XML et dépendances AndroidX/Material confirmés dans le README fourni par Oumaima. Données locales ; aucun LLM connecté confirmé.",
    "categories": [
      "Mobile",
      "IA & Data"
    ]
  },
  {
    "id": "pneumonia",
    "name": "Détection de pneumonie",
    "category": "IA & Data",
    "description": "Analyser une radiographie thoracique pour distinguer les classes NORMAL et PNEUMONIA. Le projet utilise le transfert d’apprentissage avec TensorFlow/Keras, une API FastAPI et une interface Streamlit.",
    "image": "assets/project-covers/detection-pneumonie-ia.png",
    "technologies": [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "Transfer Learning",
      "FastAPI"
    ],
    "github": "https://github.com/ouma-bg/pneumonia-detection-fastapi",
    "source": "https://ouma-bg.github.io/",
    "linkedinPostUrl": "https://lnkd.in/p/eR6MHS2N"
  },
  {
    "id": "quiz",
    "name": "QuizApp",
    "category": "Mobile",
    "description": "Une application mobile de quiz pour apprendre le permis de conduire. Elle propose une progression par niveaux et des statistiques. Son interface est développée avec React Native et JavaScript.",
    "image": "assets/project-covers/driveiq.png",
    "technologies": [
      "React Native",
      "JavaScript"
    ],
    "github": "https://github.com/ouma-bg/QuizApp_isic2_oumaima2-",
    "source": "https://ouma-bg.github.io/",
    "linkedinPostUrl": "https://lnkd.in/p/epTyMZQM"
  },
  {
    "id": "vaccination",
    "name": "Vaccination Reminder",
    "category": "Mobile",
    "description": "Une application mobile pour organiser le suivi vaccinal. Elle propose quatre profils et des rappels automatisés. Le développement repose sur Flutter et Dart pour construire l’interface mobile.",
    "image": "assets/project-covers/vaccination-reminder.png",
    "technologies": [
      "Flutter",
      "Dart"
    ],
    "github": "https://github.com/ouma-bg/vaccination_reminder_app",
    "source": "https://ouma-bg.github.io/",
    "linkedinPostUrl": "https://lnkd.in/p/eYgVCSUe"
  },
  {
    "id": "waqt",
    "name": "Waqt Al Khayr",
    "category": "Mobile",
    "description": "Une application mobile de coordination avec géolocalisation et échanges en temps réel. L’interface utilise React Native et Expo, pour réunir ces fonctionnalités dans une expérience mobile.",
    "image": "assets/project-covers/waqt-al-khayr.png",
    "technologies": [
      "React Native",
      "Expo",
      "Géolocalisation"
    ],
    "github": "https://github.com/ouma-bg/waqt-al-khayr-backend",
    "source": "https://ouma-bg.github.io/",
    "linkedinPostUrl": "https://lnkd.in/p/echRi25t"
  },
  {
    "id": "events",
    "name": "Plateforme de gestion d’événements ENSA",
    "category": "Web",
    "description": "Centraliser les événements de l’ENSA : consultation, inscriptions et gestion des participants. Un scanner QR valide les entrées. La plateforme associe PHP, MySQL et une interface Bootstrap.",
    "image": "assets/project-covers/ensaj-event.png",
    "technologies": [
      "PHP",
      "MySQL",
      "Bootstrap"
    ],
    "github": "https://github.com/ikram244/app_ensaj_events",
    "source": "https://ouma-bg.github.io/",
    "linkedinPostUrl": "https://lnkd.in/p/eugPctaq"
  },
  {
    "id": "talents-associate",
    "name": "Talents Associate",
    "category": "Web",
    "categories": [
      "Web",
      "IA & Data"
    ],
    "description": "Centraliser les candidatures et extraire les informations des CV avec un LLM. Le matching sémantique et le suivi des entretiens assistent les recruteurs. La plateforme associe FastAPI, React et PostgreSQL.",
    "image": "assets/project-covers/talents-associate.png",
    "technologies": [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "github": "https://github.com/wijdanelamsaadi-commits/talents-associate-ai-recruitment",
    "source": "https://github.com/wijdanelamsaadi-commits/talents-associate-ai-recruitment",
    "linkedinPostUrl": "https://lnkd.in/p/eXwDq4Qw"
  }
];
