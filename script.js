const translations = {
    es: {
        nav1: "Sobre mí", 
        nav2: "Habilidades",
        nav3: "Proyectos",
        nav4: "Experiencia",
        nav5: "CV",
        heroGreeting: "HOLA, MI NOMBRE ES",
        heroSubtitle: "Desarrollador Web Junior / Bachiller en Computación",
        heroDesc: "Apasionado por la tecnología, la lógica de programación y el desarrollo de software. Me enfoco en construir aplicaciones web limpias, funcionales y optimizadas, con fuerte disposición para aprender nuevas tecnologías y colaborar en proyectos desafiantes.",
        skillsTitle: "Habilidades Técnicas",
        skillBackendTitle: "Backend & Lógica",
        skillResponsive: "Diseño Web Responsivo",
        skillLogic: "Lógica de Programación",
        skillToolsTitle: "Herramientas & Oficina",
        projectsTitle: "Proyectos",
        proj1Title: "Sistema de Registro y Marcaje de Practicantes",
        proj1Desc: "Plataforma web desarrollada para la gestión, control y marcaje de asistencia de estudiantes practicantes.",
        expTitle: "Experiencia & Educación",
        exp1Title: "Bachillerato en Ciencias y Letras con Orientación en Computación",
        exp1Desc: "Formación académica enfocado en desarrollo de sistemas, estructura de datos, soporte informático y programación web.",
        exp2Title: "Práctica Supervisada",
        exp2Desc: "Desarrollo e implementación del sistema web para registro y marcaje de control de asistencias para practicantes.",
        contactTitle: "Contacto Directo:",
        emailText: "Correo"
    },
    en: {
        nav1: "About me",
        nav2: "Skills",
        nav3: "Projects",
        nav4: "Experience",
        nav5: "CV",
        heroGreeting: "HELLO, MY NAME IS",
        heroSubtitle: "Junior Web Developer / High School Diploma in Computer Science",
        heroDesc: "Passionate about technology, programming logic, and software development. Focused on building clean, functional, and optimized web applications, with a strong willingness to learn new technologies and collaborate on challenging projects.",
        skillsTitle: "Technical Skills",
        skillBackendTitle: "Backend & Logic",
        skillResponsive: "Responsive Web Design",
        skillLogic: "Programming Logic",
        skillToolsTitle: "Tools & Productivity",
        projectsTitle: "Projects",
        proj1Title: "Intern Registration & Attendance System",
        proj1Desc: "Web platform developed for tracking, managing, and clocking attendance for student interns.",
        expTitle: "Experience & Education",
        exp1Title: "High School Diploma in Science and Letters with Computer Orientation",
        exp1Desc: "Academic training focused on systems development, data structures, IT support, and web programming.",
        exp2Title: "Supervised Internship",
        exp2Desc: "Development and deployment of a web application for student intern attendance tracking.",
        contactTitle: "Direct Contact:",
        emailText: "Email"
    },
    fr: {
        nav1: "À propos",
        nav2: "Compétences",
        nav3: "Projets",
        nav4: "Expérience",
        nav5: "CV",
        heroGreeting: "BONJOUR, JE M'APPELLE",
        heroSubtitle: "Développeur Web Junior / Diplômé en Informatique",
        heroDesc: "Passionné par la technologie, la logique de programmation et le développement logiciel. Je me concentre sur la création d'applications web propres, fonctionnelles et optimisées, avec une forte volonté d'apprendre de nouvelles technologies et de collaborer sur des projets stimulants.",
        skillsTitle: "Compétences Techniques",
        skillBackendTitle: "Backend & Logique",
        skillResponsive: "Conception Web Responsive",
        skillLogic: "Logique de Programmation",
        skillToolsTitle: "Outils & Bureautique",
        projectsTitle: "Projets",
        proj1Title: "Système de Gestions et Pointage des Stagiaires",
        proj1Desc: "Plateforme web développée pour la gestion et le suivi de la présence des étudiants stagiaires.",
        expTitle: "Expérience & Éducation",
        exp1Title: "Baccalauréat en Sciences et Lettres avec Orientation en Informatique",
        exp1Desc: "Formation académique axée sur le développement de systèmes, les structures de données, el support informatique et la programmation web.",
        exp2Title: "Stage Supervisé",
        exp2Desc: "Développement et mise en œuvre d'une application web de suivi des présences pour les stagiaires.",
        contactTitle: "Contact Direct:",
        emailText: "E-mail"
    }
};

const cardsLang = document.querySelectorAll('.lang-card');
const langDropdown = document.getElementById('langDropdown');

function setLanguage(selectedLang) {
    if (!translations[selectedLang]) return;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[selectedLang][key]) {
            element.textContent = translations[selectedLang][key];
        }
    });

    cardsLang.forEach(c => {
        if (c.getAttribute('data-lang') === selectedLang) {
            c.classList.add('active');
        } else {
            c.classList.remove('active');
        }
    });

    localStorage.setItem('preferred-lang', selectedLang);
}

    localStorage.setItem('preferred-lang', selectedLang);
}

// Evento de clic en las tarjetas de idioma
cardsLang.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = card.getAttribute('data-lang');
        setLanguage(selectedLang);
        if (langDropdown) langDropdown.classList.remove('show');
    });
});

// Cargar idioma guardado al iniciar
const currentLang = localStorage.getItem('preferred-lang') || 'es';
setLanguage(currentLang);

// Movimiento fluido del cursor personalizado y efectos de hover
const customCursor = document.getElementById('customCursor');
const cursorFollower = document.getElementById('cursorFollower');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    if (customCursor) {
        customCursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
    if (cursorFollower) {
        cursorFollower.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
});

document.querySelectorAll('a, button, .theme-card, .lang-card, .contact-card').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (customCursor) customCursor.classList.add('cursor-hover');
        if (cursorFollower) cursorFollower.classList.add('cursor-hover');
    });
    item.addEventListener('mouseleave', () => {
        if (customCursor) customCursor.classList.remove('cursor-hover');
        if (cursorFollower) cursorFollower.classList.remove('cursor-hover');
    });
});

/* ==========================================================================
   CONTROLADOR DEL MODAL DE CONTRIBUCIONES DE GITHUB
   ========================================================================== */
const openContribBtn = document.getElementById('openContribModal');
const contribModal = document.getElementById('contribModal');
const closeContribBtn = document.getElementById('closeContribModal');

if (openContribBtn && contribModal) {
    openContribBtn.addEventListener('click', () => {
        contribModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

function closeContribViewer() {
    if (contribModal) {
        contribModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

if (closeContribBtn) {
    closeContribBtn.addEventListener('click', closeContribViewer);
}

if (contribModal) {
    contribModal.addEventListener('click', (e) => {
        if (e.target === contribModal) {
            closeContribViewer();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeContribViewer();
    }
});
