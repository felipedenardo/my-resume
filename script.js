const profileData = {
    name: "Felipe Gonçalves Denardo",
    role: { 
        "pt-BR": "Engenheiro Backend Sênior | APIs & Integrações | Microsserviços | Full Stack",
        "en-US": "Senior Backend Engineer | APIs & Integrations | Microservices | Full Stack" 
    },            
    photoUrl: "", 
    contacts: [
        { type: "phone", value: "(41) 99775-3034", icon: "phone" },
        { type: "email", value: "felipegdenardo@gmail.com", label: "E-mail", icon: "mail" },
        { type: "link", value: "https://www.linkedin.com/in/felipe-denardo-b83749148", label: "LinkedIn", icon: "linkedin" },
        { type: "link", value: "https://github.com/felipedenardo", label: "GitHub", icon: "github" }
    ]
};

const contentData = {
    "pt-BR": {
        titles: {
            resume: "Resumo Profissional",
            skills: "Stack de Habilidades",
            education: "Educação & Idiomas",
            languages: "Idiomas",
            diff: "Diferenciais Técnicos",
            experience: "Experiência Profissional"
        },
        text: {
            resume: "Engenheiro Backend Sênior com mais de 8 anos de experiência, especializado em APIs, integrações e arquitetura de microsserviços. Forte atuação com Golang e Java, focado na entrega de software de alta qualidade (Clean Code), construção de APIs e microsserviços, modelagem de dados complexos e evolução de sistemas legados. Atuação contínua no suporte ao desenvolvimento front-end, garantindo integração eficiente entre interface e backend.",
            diff: "Experiência comprovada na entrega de soluções de alta performance e na resolução de gargalos críticos, aplicando estratégias como cache com Redis, tuning de performance em bancos relacionais, refatoração de algoritmos e arquiteturas de mensageria com RabbitMQ para processamento assíncrono e escalabilidade. Atuação em todo o ciclo de desenvolvimento, colaborando com times de produto na tradução de requisitos de negócio em soluções técnicas eficientes.",
            footer: "&copy; 2024 Felipe Gonçalves Denardo"
        },
        education: [
            { degree: "Sistemas de Informação", school: "Unibrasil", period: "2013 – 2018" }
        ],
        languages: ["Português: Nativo", "Inglês: Básico em estudo (A2)"],
        skills: [
            { category: "Backend", items: ["Golang", "Java", "Spring Boot", "Hibernate", "Groovy/Grails", "APIs REST", "Microsserviços"] },
            { category: "Frontend (Suporte)", items: ["Vue.js", "Angular 2+", "TypeScript", "JavaScript", "JSF/PrimeFaces"] },
            { category: "Dados & Infra", items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ", "Docker", "AWS S3", "Linux", "Git"] },
            { category: "Práticas", items: ["Clean Code", "Scrum", "Kanban", "Modelagem de Dados", "Tuning"] }
        ],
        jobs: [
            { 
                role: "Engenheiro Backend Sênior | Full Stack", 
                period: "Fev/2020 - Atual", 
                company: "CWS Platform", 
                stack: "Golang, Groovy/Grails, Vue.js, React, RabbitMQ, Redis, MySQL, PostgreSQL, Docker, AWS S3, Git.",
                details: [
                    "<strong>Backend & APIs:</strong> Desenvolvimento e sustentação de microsserviços em Golang, com foco em baixo acoplamento, manutenibilidade e performance.",
                    "<strong>Suporte ao Front-end:</strong> Atuação contínua no suporte às aplicações em Vue.js e React, garantindo integração correta com APIs e fluxos de dados.",
                    "<strong>Arquitetura & Performance:</strong> Implementação de arquiteturas orientadas a eventos e processamento assíncrono com RabbitMQ e Redis.",
                    "<strong>Modernização de Legado:</strong> Refatoração de módulos antigos para redução de débito técnico e melhoria de performance.",
                    "<strong>Modelagem de Dados:</strong> Análise e otimização de esquemas de banco de dados, aplicando tuning e indexação.",
                    "<strong>Qualidade:</strong> Realização de code reviews e disseminação de boas práticas."
                ]
            },
            {
                role: "Desenvolvedor Full Stack Pleno",
                period: "Jul/2018 - Fev/2020",
                company: "BRQ Digital Solutions",
                stack: "Java, Spring, JSF, Angular, MySQL, AWS S3, Git.",
                details: [
                    "<strong>Backend:</strong> Desenvolvimento de serviços backend em Java, integrando regras de negócio e persistência de dados.",
                    "<strong>Front-end:</strong> Apoio no desenvolvimento e manutenção de interfaces em Angular e JSF, garantindo integração com o backend.",
                    "<strong>Sistemas Corporativos:</strong> Atuação em sistemas de grande porte, com foco em estabilidade e evolução de legado."
                ]
            },
            {
                role: "Desenvolvedor Full Stack Júnior",
                period: "Mar/2018 – Mai/2018",
                company: "Velti Tecnologia",
                stack: "Java, Spring, JSF, Angular, MySQL.",
                details: [
                    "<strong>Backend:</strong> Manutenção e desenvolvimento de funcionalidades em Java no sistema Velti Ponto.",
                    "<strong>Front-end:</strong> Apoio à camada de interface em Angular e JSF."
                ]
            },
            {
                role: "Desenvolvedor Full Stack Júnior",
                period: "Set/2016 – Fev/2018",
                company: "MobileSys",
                stack: "Java, Spring, JSF, MySQL.",
                details: [
                    "<strong>Backend:</strong> Desenvolvimento e correção de funcionalidades no sistema TradePRO Promoter.",
                    "<strong>Front-end:</strong> Apoio à interface em JSF e implementação de relatórios.",
                    "<strong>Dados:</strong> Contribuição na modelagem de banco de dados e otimização de consultas."
                ]
            },
            {
                role: "Estagiário Desenvolvedor Web",
                period: "Jun/2016 - Set/2016",
                company: "BRQ Digital Solutions",
                stack: "Java, JavaScript.",
                details: [
                    "<strong>Formação Técnica:</strong> Capacitação intensiva em desenvolvimento web, com foco em fundamentos de Java e JavaScript.",
                    "<strong>Front-end:</strong> Apoio inicial no desenvolvimento de interfaces web."
                ]
            }
        ]
    },
    "en-US": {
        titles: {
            resume: "Professional Summary",
            skills: "Skills Stack",
            education: "Education & Languages",
            languages: "Languages",
            diff: "Technical Differentiators",
            experience: "Professional Experience"
        },
        text: {
            resume: "Senior Backend Engineer with over 8 years of experience, specializing in APIs, integrations, and microservices architecture. Strong expertise in Golang and Java, focused on delivering high-quality software (Clean Code), building APIs and microservices, complex data modeling, and legacy system evolution. Continuous experience in front-end development support, ensuring efficient integration between the interface and the backend.",
            diff: "Proven experience in delivering high-performance solutions and resolving critical bottlenecks, applying strategies such as Redis caching, relational database performance tuning, algorithm refactoring, and RabbitMQ messaging architectures for asynchronous processing and scalability. Experienced in the entire development lifecycle, collaborating with product teams to translate business requirements into efficient technical solutions.",
            footer: "&copy; 2024 Felipe Gonçalves Denardo"
        },
        education: [
            { degree: "Information Systems", school: "Unibrasil", period: "2013 – 2018" }
        ],
        languages: ["Portuguese: Native", "English: Basic - Currently studying (A2)"],
        skills: [
            { category: "Backend", items: ["Golang", "Java", "Spring Boot", "Hibernate", "Groovy/Grails", "REST APIs", "Microservices"] },
            { category: "Frontend (Support)", items: ["Vue.js", "Angular 2+", "TypeScript", "JavaScript", "JSF/PrimeFaces"] },
            { category: "Data & Infra", items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ", "Docker", "AWS S3", "Linux", "Git"] },
            { category: "Practices", items: ["Clean Code", "Scrum", "Kanban", "Data Modeling", "Tuning"] }
        ],
        jobs: [
            { 
                role: "Senior Backend Engineer | Full Stack", 
                period: "Feb/2020 - Present", 
                company: "CWS Platform", 
                stack: "Golang, Groovy/Grails, Vue.js, React, RabbitMQ, Redis, MySQL, PostgreSQL, Docker, AWS S3, Git.",
                details: [
                    "<strong>Backend & APIs:</strong> Development and maintenance of microservices in Golang, focusing on low coupling, maintainability, and performance.",
                    "<strong>Frontend Support:</strong> Continuous support for Vue.js and React applications, ensuring correct integration with APIs and data flows.",
                    "<strong>Architecture & Performance:</strong> Implementation of event-driven architectures and asynchronous processing using RabbitMQ and Redis.",
                    "<strong>Legacy Modernization:</strong> Refactoring legacy modules to reduce technical debt and improve system performance.",
                    "<strong>Data Modeling:</strong> Database schema analysis and optimization, applying performance tuning and indexing.",
                    "<strong>Quality:</strong> Conducting code reviews and promoting best practices."
                ]
            },
            {
                role: "Mid-Level Full Stack Developer",
                period: "Jul/2018 - Feb/2020",
                company: "BRQ Digital Solutions",
                stack: "Java, Spring, JSF, Angular, MySQL, AWS S3, Git.",
                details: [
                    "<strong>Backend:</strong> Java backend services development, integrating business rules and data persistence.",
                    "<strong>Front-end:</strong> Supporting development and maintenance of Angular and JSF interfaces, ensuring backend integration.",
                    "<strong>Enterprise Systems:</strong> Working on large-scale systems, focusing on stability and legacy evolution."
                ]
            },
            {
                role: "Junior Full Stack Developer",
                period: "Mar/2018 – May/2018",
                company: "Velti Tecnologia",
                stack: "Java, Spring, JSF, Angular, MySQL.",
                details: [
                    "<strong>Backend:</strong> Feature development and maintenance in Java for the Velti Ponto system.",
                    "<strong>Front-end:</strong> Support for the Angular and JSF interface layer."
                ]
            },
            {
                role: "Junior Full Stack Developer",
                period: "Sep/2016 – Feb/2018",
                company: "MobileSys",
                stack: "Java, Spring, JSF, MySQL.",
                details: [
                    "<strong>Backend:</strong> Feature development and bug fixing for the TradePRO Promoter system.",
                    "<strong>Front-end:</strong> Support for the JSF interface and report implementation.",
                    "<strong>Data:</strong> Contribution to database modeling and query optimization."
                ]
            },
            {
                role: "Web Developer Intern",
                period: "Jun/2016 - Sep/2016",
                company: "BRQ Digital Solutions",
                stack: "Java, JavaScript.",
                details: [
                    "<strong>Technical Training:</strong> Intensive web development training focusing on Java and JavaScript fundamentals.",
                    "<strong>Front-end:</strong> Initial support in web interface development."
                ]
            }
        ]
    }
};

const icons = {
    phone: '<svg class="w-4 h-4 mr-1 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.717 21 3 14.283 3 6V5z"></path></svg>',
    mail: '<svg class="w-4 h-4 mr-1 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
    linkedin: '<svg class="w-4 h-4 mr-1 text-sky-600" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.328-4 0v5.604h-3v-11h3v1.765c1.397-2.714 7-2.825 7 2.456v6.779z"/></svg>',
    github: '<svg class="w-4 h-4 mr-1 text-sky-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577v-2.003c-3.336.726-4.043-1.608-4.043-1.608-.546-1.385-1.332-1.755-1.332-1.755-1.09-.747.082-.73.082-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.491.996.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.238-3.224-.124-.3-.536-1.523.118-3.18 0 0 1-.32 3.275 1.23.958-.266 1.983-.4 3.01-.405 2.275-1.55 3.275-1.23 3.275-1.23.654 1.657.242 2.88.118 3.18.77.844 1.238 1.913 1.238 3.224 0 4.609-2.805 5.626-5.475 5.923.43.37.817 1.12.817 2.257v3.313c0 .317.22.687.82.577C20.562 21.8 24 17.303 24 12c0-6.628-5.372-12-12-12z"/></svg>'
};

function renderPage(lang) {
    const data = contentData[lang];
    if (!data) return;

    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-role').textContent = profileData.role[lang];
    
    const img = document.getElementById('profile-image');
    img.src = profileData.photoUrl || `https://ui-avatars.com/api/?name=Felipe+Denardo&background=0ea5e9&color=fff&size=128`;
    img.onerror = function() {
        this.src='https://ui-avatars.com/api/?name=Felipe+Denardo&background=0ea5e9&color=fff&size=128';
    };

    const contactContainer = document.getElementById('contact-container');
    contactContainer.innerHTML = '';
    profileData.contacts.forEach(c => {
        let html = '';
        if(c.type === 'link' || c.type === 'email') {
            const href = c.type === 'email' ? `mailto:${c.value}` : c.value;
            html = `<a href="${href}" target="_blank" class="flex items-center hover:text-sky-700">${icons[c.icon]}${c.label || c.value}</a>`;
        } else {
            html = `<p class="flex items-center">${icons[c.icon]}<span>${c.value}</span></p>`;
        }
        contactContainer.innerHTML += html;
    });

    document.getElementById('resume-title').textContent = data.titles.resume;
    document.getElementById('resume-text').textContent = data.text.resume;
    document.getElementById('skills-title').textContent = data.titles.skills;
    document.getElementById('education-title').textContent = data.titles.education;
    document.getElementById('languages-title').textContent = data.titles.languages;
    document.getElementById('diff-title').textContent = data.titles.diff;
    document.getElementById('diff-text').textContent = data.text.diff;
    document.getElementById('experience-title').textContent = data.titles.experience;
    document.getElementById('footer-text').innerHTML = data.text.footer;

    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    data.skills.forEach(cat => {
        const itemsHtml = cat.items.map(item => `<span class="inline-block bg-sky-50 text-sky-700 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded border border-sky-100">${item}</span>`).join('');
        skillsContainer.innerHTML += `<div><p class="font-bold text-gray-800 mb-1 text-sm uppercase tracking-wider">${cat.category}</p><div>${itemsHtml}</div></div>`;
    });

    const educationContainer = document.getElementById('education-container');
    educationContainer.innerHTML = '';
    data.education.forEach(edu => {
        educationContainer.innerHTML += `
            <div class="mb-6">
                <p class="font-bold text-gray-900 text-lg">${edu.degree}</p>
                <p class="text-sky-600">${edu.school}</p>
                <p class="text-gray-500 text-sm">${edu.period}</p>
            </div>`;
    });

    const langList = document.getElementById('languages-list');
    langList.innerHTML = '';
    data.languages.forEach(l => {
        langList.innerHTML += `<li>${l}</li>`;
    });

    const expContainer = document.getElementById('experience-container');
    expContainer.innerHTML = '';
    data.jobs.forEach(job => {
        const detailsHtml = job.details.map(d => `<li>${d}</li>`).join('');
        expContainer.innerHTML += `
            <div class="p-6 rounded-lg mb-8 border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div class="flex flex-col sm:flex-row justify-between items-start mb-2">
                    <h4 class="text-xl font-bold text-gray-900">${job.role}</h4>
                    <span class="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full mt-2 sm:mt-0">${job.period}</span>
                </div>
                <p class="text-lg text-sky-600 font-medium mb-4">${job.company}</p>
                <ul class="list-disc ml-5 text-gray-600 space-y-3 text-base">${detailsHtml}</ul>
                ${job.stack ? `<div class="mt-4 pt-4 border-t border-gray-200"><p class="text-sm text-gray-500 font-mono"><strong class="text-gray-700">Stack:</strong> ${job.stack}</p></div>` : ''}
            </div>`;
    });
}

const langSelect = document.getElementById('lang-select');
langSelect.addEventListener('change', (e) => {
    localStorage.setItem('lang', e.target.value);
    renderPage(e.target.value);
});

window.onload = () => {
    const savedLang = localStorage.getItem('lang') || 'pt-BR';
    langSelect.value = savedLang;
    renderPage(savedLang);
};