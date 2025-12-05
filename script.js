    const profileData = {
    name: "Felipe Gonçalves Denardo",
    role: { "pt-BR": "Desenvolvedor Full Stack Sênior", "en-US": "Senior Full Stack Developer" },            
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
            resume: "Desenvolvedor Full Stack Sênior com mais de 8 anos de experiência e forte especialização em Golang e Java. Focado na entrega de software de alta qualidade (Clean Code), possuo sólida vivência na construção de Micro APIs, modelagem de dados complexos e evolução de sistemas legados.",
            diff: "Experiência comprovada na entrega de soluções de alta performance e na resolução de gargalos críticos, aplicando estratégias como caching com Redis, tuning de performance em bancos relacionais, refatoração de algoritmos e arquiteturas de mensageria com RabbitMQ para processamento assíncrono e escalabilidade. Atuo em todo o ciclo de desenvolvimento, colaborando com times de produto para transformar requisitos de negócio em soluções técnicas eficientes.",
            footer: "&copy; 2024 Felipe Gonçalves Denardo"
        },
        education: [
            { degree: "Sistemas de Informação", school: "Unibrasil", period: "2013 – 2018" }
        ],
        languages: ["Português: Nativo", "Inglês: Básico em estudo (A2)"],
        skills: [
            { category: "Backend", items: ["Golang", "Java", "Spring Boot", "Hibernate", "Groovy/Grails", "REST APIs", "Microservices"] },
            { category: "Frontend", items: ["Vue.js", "Angular 2+", "TypeScript", "JavaScript", "JSF/PrimeFaces"] },
            { category: "Dados & Infra", items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ", "Docker", "AWS S3", "Linux", "Git"] },
            { category: "Práticas", items: ["Clean Code", "Scrum", "Kanban", "Modelagem de Dados", "Tuning"] }
        ],
        jobs: [
            { 
                role: "Desenvolvedor Full Stack Sênior", 
                period: "Fev/2020 - Atual", 
                company: "CWS Platform", 
                stack: "Golang, Groovy/Grails, Vue.js, React, RabbitMQ, Redis, MySQL, PostgreSQL, Docker, AWS S3, Git.",
                details: [
                    "<strong>Backend & Micro APIs:</strong> Desenvolvimento e sustentação de microsserviços utilizando Golang, focando em baixo acoplamento, facilidade de leitura e manutenibilidade.",
                    "<strong>Frontend & Integração:</strong> Atuação no desenvolvimento de UI utilizando Vue.js e React. Responsável pela integração e consumo de Micro APIs (Golang/Groovy) para a camada de visualização.",
                    "<strong>Arquitetura e Performance:</strong> Implementação de arquiteturas orientadas a eventos e processamento assíncrono (Jobs) utilizando RabbitMQ e Redis, eliminando bloqueios na interface e otimizando o tempo de resposta.",
                    "<strong>Modernização de Legado:</strong> Atuação técnica na refatoração de módulos antigos, reescrevendo lógicas ineficientes para melhorar a performance do sistema e reduzir o débito técnico.",
                    "<strong>Modelagem de Dados:</strong> Responsável pela análise e modelagem de esquemas de banco de dados, garantindo integridade e eficiência nas consultas através de tuning e indexação.",
                    "<strong>Garantia de Qualidade:</strong> Realização de Code Reviews para manter a qualidade e as boas práticas do código."
                ]
            },
            {
                role: "Desenvolvedor Full Stack Pleno",
                period: "Jul/2018 - Fev/2020",
                company: "BRQ Digital Solutions",
                stack: "Java, Spring, JSF, Angular, MySQL, AWS S3, Git.",
                details: [
                    "<strong>Unicesumar:</strong> Atuação Full Stack no desenvolvimento do portal do aluno (Studeo), integrando Back-end (Java) e Front-end (Angular). Responsável pela implementação de módulos acadêmicos, gestão de satividades, acompanhamento acadêmico e comunicação com tutores em um ambiente virtual e robusto.",
                    "<strong>Bradesco:</strong> Manutenção e evolução de aplicações corporativas internas, com foco na melhoria do sistema legado. Atuação em Java/JSF, garantindo estabilidade e conformidade com regras de negócio financeiras."
                ]
            },
            {
                role: "Desenvolvedor Full Stack Júnior",
                period: "Mar/2018 – Mai/2018",
                company: "Velti Tecnologia",
                stack: "Java, Spring, JSF, Angular, MySQL.",
                details: [
                    "<strong>Desenvolvimento e Modernização:</strong> Atuação Full Stack no sistema Velti Ponto (controle de ponto). Fui responsável pela manutenção e implementação de novas features no código legado (Java/JSF) e participei da fase inicial de migração do Front-end para Angular."
                ]
            },
            {
                role: "Desenvolvedor Full Stack Júnior",
                period: "Set/2016 – Fev/2018",
                company: "MobileSys",
                stack: "Java, Spring, JSF, MySQL.",
                details: [
                    "<strong>Desenvolvimento Full Stack:</strong> Atuação Full Stack na implementação de novas funcionalidades e correção de bugs no sistema TradePRO Promoter (gestão de equipes externas), utilizando Java/Spring no Backend e JSF no Front-end.",
                    "<strong>Dados e Contribuição:</strong> Colaborei na modelagem de banco de dados e otimização de queries, atuando no ciclo de dados desde a concepção até a entrega. Implementei relatórios complexos com Apache POI e desenvolvi módulos para coleta de dados em campo e execução de tarefas no ponto de venda."
                ]
            },
            {
                role: "Estagiário Desenvolvedor Web",
                period: "Jun/2016 - Set/2016",
                company: "BRQ Digital Solutions",
                stack: "Java, JavaScript.",
                details: [
                    "<strong>Capacitação e Formação:</strong> Conclusão de curso intensivo de Desenvolvimento Web de 3 meses, com foco em fundamentos de Java e JavaScript.",
                    "<strong>Escopo::</strong> Período dedicado à formação técnica e à prontidão para suporte para equipes de desenvolvimento."
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
            resume: "Senior Full Stack Developer with over 8 years of experience and strong specialization in Golang and Java. Focused on delivering high-quality software (Clean Code), I possess solid experience in building Micro APIs, complex data modeling, and legacy system evolution.",
            diff: "Proven experience in delivering high-performance solutions and resolving critical bottlenecks, applying strategies such as Redis caching, relational database performance tuning, algorithm refactoring, and RabbitMQ messaging architectures for asynchronous processing and scalability. I operate throughout the entire development cycle, collaborating with product teams to translate business requirements into efficient technical solutions.",
            footer: "&copy; 2024 Felipe Gonçalves Denardo"
        },
        education: [
            { degree: "Information Systems", school: "Unibrasil", period: "2013 – 2018" }
        ],
        languages: ["Portuguese: Native", "English: Basic (A2) - Currently studying"],
        skills: [
            { category: "Backend", items: ["Golang", "Java", "Spring Boot", "Hibernate", "Groovy/Grails", "REST APIs", "Microservices"] },
            { category: "Frontend", items: ["Vue.js", "Angular 2+", "TypeScript", "JavaScript", "JSF/PrimeFaces"] },
            { category: "Data & Infra", items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ", "Docker", "AWS S3", "Linux", "Git"] },
            { category: "Practices", items: ["Clean Code", "Scrum", "Kanban", "Data Modeling", "Tuning"] }
        ],
        jobs: [
            { 
                role: "Senior Full Stack Developer", 
                period: "Feb/2020 - Current", 
                company: "CWS Platform", 
                stack: "Golang, Groovy/Grails, Vue.js, React, RabbitMQ, Redis, MySQL, PostgreSQL, Docker, AWS S3, Git.",
                details: [
                    "<strong>Backend & Micro APIs:</strong> Development and maintenance of microservices using Golang, focusing on low coupling, readability, and maintainability.",
                    "<strong>Frontend & Integration:</strong> UI development using Vue.js and React. Responsible for integration and consumption of Micro APIs (Golang/Groovy) for the visualization layer.",
                    "<strong>Architecture & Performance:</strong> Implementation of event-driven architectures and asynchronous processing (Jobs) using RabbitMQ and Redis, eliminating interface blockages and optimizing response times.",
                    "<strong>Legacy Modernization:</strong> Technical role in refactoring legacy modules, rewriting inefficient logic to improve system performance and reduce technical debt.",
                    "<strong>Data Modeling:</strong> Responsible for database schema analysis and modeling, ensuring integrity and query efficiency through tuning and indexing.",
                    "<strong>Quality Assurance:</strong> Conducting Code Reviews to maintain code quality and best practices."
                ]
            },
            {
                role: "Mid-Level Full Stack Developer",
                period: "Jul/2018 - Feb/2020",
                company: "BRQ Digital Solutions",
                stack: "Java, Spring, JSF, Angular, MySQL, AWS S3, Git.",
                details: [
                    "<strong>Unicesumar:</strong> Full Stack role developing the student portal (Studeo), integrating Back-end (Java) and Front-end (Angular). Responsible for implementing academic modules, activity management, academic tracking, and communication with tutors in a robust virtual environment.",
                    "<strong>Bradesco:</strong> Maintenance and evolution of internal corporate applications, focusing on legacy system improvement. Worked with Java/JSF, ensuring stability and compliance with financial business rules."
                ]
            },
            {
                role: "Junior Full Stack Developer",
                period: "Mar/2018 – May/2018",
                company: "Velti Tecnologia",
                stack: "Java, Spring, JSF, Angular, MySQL.",
                details: [
                    "<strong>Development & Modernization:</strong> Full Stack role on the Velti Ponto system (time tracking). Responsible for maintenance and implementation of new features in legacy code (Java/JSF) and participated in the initial phase of Front-end migration to Angular."
                ]
            },
            {
                role: "Junior Full Stack Developer",
                period: "Sep/2016 – Feb/2018",
                company: "MobileSys",
                stack: "Java, Spring, JSF, MySQL.",
                details: [
                    "<strong>Full Stack Development:</strong> Full Stack role implementing new features and fixing bugs in the TradePRO Promoter system (external team management), using Java/Spring on the Backend and JSF on the Frontend.",
                    "<strong>Data & Contribution:</strong> Collaborated on database modeling and query optimization, working on the data cycle from conception to delivery. Implemented complex reports with Apache POI and developed modules for field data collection and POS task execution."
                ]
            },
            {
                role: "Web Developer Intern",
                period: "Jun/2016 - Sep/2016",
                company: "BRQ Digital Solutions",
                stack: "Java, JavaScript.",
                details: [
                    "<strong>Training & Education:</strong> Completion of a 3-month intensive Web Development course, focusing on Java and JavaScript fundamentals.",
                    "<strong>Scope:</strong> Period dedicated to technical training and readiness to support development teams."
                ]
            }
        ]
    }
};

const icons = {
    phone: '<svg class="w-4 h-4 mr-1 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.717 21 3 14.283 3 6V5z"></path></svg>',
    mail: '<svg class="w-4 h-4 mr-1 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
    linkedin: '<svg class="w-4 h-4 mr-1 text-sky-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.328-4 0v5.604h-3v-11h3v1.765c1.397-2.714 7-2.825 7 2.456v6.779z"/></svg>',
    github: '<svg class="w-4 h-4 mr-1 text-sky-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577v-2.003c-3.336.726-4.043-1.608-4.043-1.608-.546-1.385-1.332-1.755-1.332-1.755-1.09-.747.082-.73.082-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.491.996.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.238-3.224-.124-.3-.536-1.523.118-3.18 0 0 1-.32 3.275 1.23.958-.266 1.983-.4 3.01-.405 2.275-1.55 3.275-1.23 3.275-1.23.654 1.657.242 2.88.118 3.18.77.844 1.238 1.913 1.238 3.224 0 4.609-2.805 5.626-5.475 5.923.43.37.817 1.12.817 2.257v3.313c0 .317.22.687.82.577C20.562 21.8 24 17.303 24 12c0-6.628-5.372-12-12-12z"/></svg>'
};

const langSelect = document.getElementById('lang-select');
let currentLang = localStorage.getItem('lang') || 'pt-BR';

function renderPage(lang) {
    const data = contentData[lang];
    
    document.getElementById('i18n-title').textContent = profileData.name + ' | ' + profileData.role[lang];
    document.getElementsByTagName('html')[0].setAttribute('lang', lang);
    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-role').textContent = profileData.role[lang];
    document.getElementById('profile-image').src = profileData.photoUrl;
    document.getElementById('profile-image').onerror = function() {
        this.src='https://ui-avatars.com/api/?name=Felipe+Denardo&background=0ea5e9&color=fff&size=128';
    };

    const contactContainer = document.getElementById('contact-container');
    contactContainer.innerHTML = '';
    profileData.contacts.forEach((c, index) => {        
        let html = '';
        if(c.type === 'link' || c.type === 'email') {
            const href = c.type === 'email' ? `mailto:${c.value}` : c.value;
            html = `<a href="${href}" target="${c.type === 'link' ? '_blank' : ''}" class="flex items-center hover:text-sky-700">${icons[c.icon]}${c.label || c.value}</a>`;
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

    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    data.skills.forEach(cat => {
        const itemsHtml = cat.items.map(item => 
            `<span class="skill-badge">${item}</span>`
        ).join('');
        skillsContainer.innerHTML += `
            <div>
                <p class="font-bold text-gray-800 mb-1 text-sm uppercase tracking-wider">${cat.category}</p>
                <div class="flex flex-wrap -ml-1">${itemsHtml}</div>
            </div>`;
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

    document.getElementById('diff-title').textContent = data.titles.diff;
    document.getElementById('diff-text').textContent = data.text.diff;
    document.getElementById('experience-title').textContent = data.titles.experience;
    document.getElementById('footer-text').innerHTML = data.text.footer;

    const expContainer = document.getElementById('experience-container');
    expContainer.innerHTML = '';
    data.jobs.forEach(job => {
        const detailsHtml = job.details.map(d => `<li>${d}</li>`).join('');
        expContainer.innerHTML += `
            <div class="card-experience p-6 rounded-lg mb-8 border border-gray-100 bg-white">
                <div class="flex flex-col sm:flex-row justify-between items-start mb-2">
                    <h4 class="text-xl font-bold text-gray-900">${job.role}</h4>
                    <span class="text-sm font-medium text-gray-600 border border-gray-300 px-3 py-1 rounded-full mt-2 sm:mt-0">${job.period}</span>
                </div>
                <p class="text-lg text-gray-600 font-medium mb-4">${job.company}</p>
                <ul class="list-disc ml-5 text-gray-600 space-y-3 text-base">${detailsHtml}</ul>
                ${job.stack ? `<div class="mt-4 pt-4 border-t border-gray-200"><p class="text-sm text-gray-500 font-mono"><strong class="text-gray-700">Stack:</strong> ${job.stack}</p></div>` : ''}
            </div>`;
    });
}

langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('lang', currentLang);
    renderPage(currentLang);
});

window.onload = () => {
    langSelect.value = currentLang;
    renderPage(currentLang);
};