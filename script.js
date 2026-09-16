document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DICCIONARIO DE IDIOMAS ---  
    const translations = {
        es: {
            nav1: "Sobre mí",    
            nav2: "Habilidades",
            nav3: "Proyectos",
            nav4: "Experiencia",
            nav5: "CV",
            heroGreeting: "HOLA, MI NOMBRE ES",
            heroTitleMain: "Sergio Rabanales",
            heroSubtitle: "Desarrollador Web Junior / Bachiller en Computación",
            heroDesc: "Apasionado por la tecnología, la lógica de programación y el desarrollo de software. Me enfoco en construir aplicaciones web limpias, funcionales y optimizadas.",
            avatarHint: "¡Bienvenido a mi portafolio digital! ✨",
            skillsTitle: "Habilidades Técnicas",
            skillFrontendTitle: "Frontend",
            skillBackendTitle: "Backend & Lógica",
            skillResponsive: "Diseño Web Responsivo",
            skillLogic: "Lógica de Programación",
            skillToolsTitle: "Herramientas & Oficina",
            skillBackendDbTitle: "Backend & Bases de Datos",
            skillSystemsTitle: "Sistemas & Soporte",
            projectsTitle: "Proyectos",
            proj1Title: "Sistema de Registro y Marcaje de Practicantes",
            proj1Desc: "Plataforma web desarrollada para la gestión, control y marcaje de asistencia de estudiantes practicantes",
            expTitle: "Experiencia & Educación",
            exp1Title: "Bachillerato en Ciencias y Letras con Orientación en Computación",
            exp1Desc: "Formación académica enfocado en desarrollo de sistemas, estructura de datos, soporte informático y programación web.",
            exp2Title: "Práctica Supervisada",
            exp2Desc: "Desarrollo e implementación del sistema web para registro y marcaje de control de asistencias para practicantes.",
            contactTitle: "Contacto Directo:",
            emailText: "Correo",
            langTitle: "IDIOMA / LANGUAGE",
            themeTitle: "SELECCIONAR TEMA",
            themeLight: "Claro",
            themePurple: "Oscuro Morado",
            themeBlue: "Azul Pro"
        },
        en: {
            nav1: "About me",
            nav2: "Skills",
            nav3: "Projects",
            nav4: "Experience",
            nav5: "CV",
            heroGreeting: "HELLO, MY NAME IS",
            heroTitleMain: "Sergio Rabanales",
            heroSubtitle: "Junior Web Developer / High School Diploma in Computer Science",
            heroDesc: "Passionate about technology, programming logic, and software development. Focused on building clean, functional, and optimized web applications.",
            avatarHint: "Welcome to my digital portfolio! ✨",
            skillsTitle: "Technical Skills",
            skillFrontendTitle: "Frontend",
            skillBackendTitle: "Backend & Logic",
            skillResponsive: "Responsive Web Design",
            skillLogic: "Programming Logic",
            skillToolsTitle: "Tools & Productivity",
            skillBackendDbTitle: "Backend & Databases",
            skillSystemsTitle: "Systems & Support",
            projectsTitle: "Projects",
            proj1Title: "Intern Registration & Attendance System",
            proj1Desc: "Web platform developed for tracking, managing, and clocking attendance for student interns",
            expTitle: "Experience & Education",
            exp1Title: "High School Diploma in Science and Letters with Computer Orientation",
            exp1Desc: "Academic training focused on systems development, data structures, IT support, and web programming.",
            exp2Title: "Supervised Internship",
            exp2Desc: "Development and deployment of a web application for student intern attendance tracking.",
            contactTitle: "Direct Contact:",
            emailText: "Email",
            langTitle: "LANGUAGE / IDIOMA",
            themeTitle: "SELECT THEME",
            themeLight: "Light",
            themePurple: "Dark Purple",
            themeBlue: "Pro Blue"
        },
        fr: {
            nav1: "À propos",
            nav2: "Compétences",
            nav3: "Projets",
            nav4: "Expérience",
            nav5: "CV",
            heroGreeting: "BONJOUR, JE M'APPELLE",
            heroTitleMain: "Sergio Rabanales",
            heroSubtitle: "Développeur Web Junior / Diplômé en Informatique",
            heroDesc: "Passionné par la technologie, la logique de programmation et le développement logiciel. Je me concentre sur la création d'applications web propres, fonctionnelles et optimisées.",
            avatarHint: "Bienvenue sur mon portfolio numérique ! ✨",
            skillsTitle: "Compétences Techniques",
            skillFrontendTitle: "Frontend",
            skillBackendTitle: "Backend & Logique",
            skillResponsive: "Conception Web Responsive",
            skillLogic: "Logique de Programmation",
            skillToolsTitle: "Outils & Bureautique",
            skillBackendDbTitle: "Backend & Bases de Données",
            skillSystemsTitle: "Systèmes & Support",
            projectsTitle: "Projets",
            proj1Title: "Système de Gestions et Pointage des Stagiaires",
            proj1Desc: "Plateforme web développée pour la gestion et le suivi de la présence des étudiants stagiaires",
            expTitle: "Expérience & Éducation",
            exp1Title: "Baccalauréat en Sciences et Lettres avec Orientation en Informatique",
            exp1Desc: "Formation académique axée sur le développement de systèmes, les structures de données, le support informatique et la programmation web.",
            exp2Title: "Stage Supervisé",
            exp2Desc: "Développement et mise en œuvre d'une application web de suivi des présences pour les stagiaires.",
            contactTitle: "Contact Direct:",
            emailText: "E-mail",
            langTitle: "LANGUE / LANGUAGE",
            themeTitle: "CHOISIR LE THÈME",
            themeLight: "Clair",
            themePurple: "Violet Sombre",
            themeBlue: "Bleu Pro"
        },
        de: {
            nav1: "Über mich",
            nav2: "Fähigkeiten",
            nav3: "Projekte",
            nav4: "Erfahrung",
            nav5: "CV",
            heroGreeting: "HALLO, ICH HEISSE",
            heroTitleMain: "Sergio Rabanales",
            heroSubtitle: "Junior Web-Entwickler / Abiturient in Informatik",
            heroDesc: "Leidenschaftlich für Technologie, Programmierlogik und Softwareentwicklung. Ich konzentriere mich darauf, saubere, funktionale und optimierte Webanwendungen zu entwickeln.",
            avatarHint: "Willkommen in meinem digitalen Portfolio! ✨",
            skillsTitle: "Technische Fähigkeiten",
            skillFrontendTitle: "Frontend",
            skillBackendTitle: "Backend & Logik",
            skillResponsive: "Responsives Webdesign",
            skillLogic: "Programmierlogik",
            skillToolsTitle: "Werkzeuge & Büro",
            skillBackendDbTitle: "Backend & Datenbanken",
            skillSystemsTitle: "Systeme & Support",
            projectsTitle: "Projekte",
            proj1Title: "Praktikanten-Registrierungs- und Anwesenheitssystem",
            proj1Desc: "Webplattform entwickelt zur Verwaltung, Kontrolle und Zeiterfassung von studentischen Praktikanten",
            expTitle: "Erfahrung & Bildung",
            exp1Title: "Abitur in Naturwissenschaften und Literatur mit Schwerpunkt Informatik",
            exp1Desc: "Akademische Ausbildung mit Schwerpunkt Systementwicklung, Datenstrukturen, IT-Support und Webprogrammierung.",
            exp2Title: "Betreutes Praktikum",
            exp2Desc: "Entwicklung und Implementierung einer Webanwendung zur Anwesenheitsverfolgung für Praktikanten.",
            contactTitle: "Direkter Kontakt:",
            emailText: "E-Mail",
            langTitle: "SPRACHE / LANGUAGE",
            themeTitle: "THEMA AUSWÄHLEN",
            themeLight: "Hell",
            themePurple: "Dunkles Lila",
            themeBlue: "Pro Blau"
        }
    };

    const cardsLang = document.querySelectorAll('.lang-card');
    const langDropdown = document.getElementById('langDropdown');

    // --- 2. FUNCIÓN DE CAMBIO DE IDIOMA ---
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

    cardsLang.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedLang = card.getAttribute('data-lang');
            setLanguage(selectedLang);
            if (langDropdown) langDropdown.classList.remove('show');
        });
    });

    const currentLang = localStorage.getItem('preferred-lang') || 'es';
    setLanguage(currentLang);

    // --- 3. GESTIÓN DE MENÚS DESPLEGABLES (TEMAS, CONTACTO, IDIOMA) ---
    const themeBtn = document.getElementById('themeBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const contactToggleBtn = document.getElementById('contactToggleBtn');
    const contactDropdown = document.getElementById('contactDropdown');
    const langBtn = document.getElementById('langBtn');

    if (themeBtn && themeDropdown) {
        themeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (contactDropdown) contactDropdown.classList.remove('show');
            if (langDropdown) langDropdown.classList.remove('show');
            themeDropdown.classList.toggle('show');
        });
    }

    if (contactToggleBtn && contactDropdown) {
        contactToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (themeDropdown) themeDropdown.classList.remove('show');
            if (langDropdown) langDropdown.classList.remove('show');
            contactDropdown.classList.toggle('show');
        });
    }

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (themeDropdown) themeDropdown.classList.remove('show');
            if (contactDropdown) contactDropdown.classList.remove('show');
            langDropdown.classList.toggle('show');
        });
    }

    document.addEventListener('click', () => {
        if (themeDropdown) themeDropdown.classList.remove('show');
        if (contactDropdown) contactDropdown.classList.remove('show');
        if (langDropdown) langDropdown.classList.remove('show');
    });

    window.setTheme = function(themeName) {
        document.body.className = '';
        document.body.classList.add('theme-' + themeName);
        
        document.querySelectorAll('.theme-card').forEach(card => {
            card.classList.remove('active');
        });
        const activePreview = document.querySelector('.' + themeName + '-preview');
        if (activePreview) activePreview.classList.add('active');
        
        localStorage.setItem('preferred-theme', themeName);
    };

    document.querySelectorAll('.theme-card[data-theme]').forEach(card => {
        card.addEventListener('click', () => window.setTheme(card.dataset.theme));
    });

    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme) {
        window.setTheme(savedTheme);
    }

    // --- 4. MODALES (GITHUB Y OTROS) ---
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

    if (closeContribBtn) closeContribBtn.addEventListener('click', closeContribViewer);
    if (contribModal) {
        contribModal.addEventListener('click', (e) => {
            if (e.target === contribModal) closeContribViewer();
        });
    }

    // --- 5. CURSOR PERSONALIZADO ---
    const customCursor = document.getElementById('customCursor');
    const cursorFollower = document.getElementById('cursorFollower');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        if (customCursor) customCursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        if (cursorFollower) cursorFollower.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    });

    // --- 6. EFECTO REVEAL (SCROLL) ---
    const revealElements = document.querySelectorAll('.reveal');

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.88;
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); 

    // --- 7. CONTROLADOR DE LA TARJETA DEL ROBOT ---
    const robotImg = document.getElementById("robotClickable");
    const infoModal = document.getElementById("infoCardModal");
    const closeInfoBtn = document.getElementById("closeInfoCard");

    if (robotImg && infoModal) {
        robotImg.addEventListener("click", () => {
            infoModal.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    }

    function closeInfoCard() {
        if (infoModal) {
            infoModal.classList.remove("active");
            document.body.style.overflow = "auto";
        }
    }

    if (closeInfoBtn) {
        closeInfoBtn.addEventListener("click", closeInfoCard);
    }

    if (infoModal) {
        infoModal.addEventListener("click", (e) => {
            if (e.target === infoModal) {
                closeInfoCard();
            }
        });
    }

    // Evento unificado para cerrar ambos modales con la tecla 'Escape'
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeContribViewer();
            closeInfoCard();
        }
    });
});
