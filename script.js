// Diccionario de Traducciones
const translations = {
    es: {
        nav1: "Sobre mí",
        nav2: "Habilidades",
        nav3: "Proyectos",
        nav4: "Experiencia",
        nav5: "CV",
        heroTitle: "Desarrollador Web",
        heroDesc: "Hola, soy desarrollador apasionado por crear aplicaciones web modernas, funcionales y atractivas."
    },
    en: {
        nav1: "About me",
        nav2: "Skills",
        nav3: "Projects",
        nav4: "Experience",
        nav5: "CV",
        heroTitle: "Web Developer",
        heroDesc: "Hello, I am a developer passionate about building modern, functional, and attractive web applications."
    },
    fr: {
        nav1: "À propos",
        nav2: "Compétences",
        nav3: "Projets",
        nav4: "Expérience",
        nav5: "CV",
        heroTitle: "Développeur Web",
        heroDesc: "Bonjour, je suis un développeur passionné par la création d'applications web modernes, fonctionnelles et attrayantes."
    }
};

// Lógica para abrir/cerrar el menú desplegable
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const langCards = document.querySelectorAll('.lang-card');

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('show');
});

// Cerrar desplegable al hacer clic afuera
document.addEventListener('click', () => {
    langDropdown.classList.remove('show');
});

// Cambiar idioma y actualizar la interfaz
langCards.forEach(card => {
    card.addEventListener('click', () => {
        const selectedLang = card.getAttribute('data-lang');
        
        // Actualizar estado activo en los botones
        langCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        // Traducir los elementos en la página que tengan el atributo data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[selectedLang][key]) {
                element.textContent = translations[selectedLang][key];
            }
        });

        langDropdown.classList.remove('show');
    });
});
