const profileData = {
    name: "Felipe Gonçalves Denardo",
    role: {
        "pt-BR": "Senior Backend Engineer | APIs & Integrações | Microsserviços | Full Stack",
        "en-US": "Senior Backend Engineer | APIs & Integrations | Microservices | Full Stack"
    },
    photoUrl: "assets/profile.jpeg",
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
            skills: "Habilidades",
            education: "Educação & Idiomas",
            languages: "Idiomas",
            diff: "Diferenciais Técnicos",
            experience: "Experiência Profissional"
        },
        text: {
            resume: "<strong>Senior Backend Engineer</strong> com mais de 8 anos de experiência na construção de sistemas distribuídos e arquitetura de microsserviços. Especialista em <strong>Golang</strong> e <strong>Java</strong>, com foco em soluções de alta disponibilidade e resiliência. Ampla experiência na aplicação de <strong>Clean Architecture</strong>, priorizando o desacoplamento da lógica de negócio e a independência de infraestrutura para garantir sistemas testáveis e de fácil manutenção. Experiência complementar em <strong>Frontend</strong>, assegurando a entrega de integrações eficientes de ponta a ponta.",
            diff: "<strong>Performance e Otimização:</strong> Histórico comprovado na resolução de gargalos críticos, alcançando reduções de até 80% no tempo de resposta de APIs. Especialista em tuning de queries, implementação estratégica de cache com Redis e otimização de payloads via DTOs, garantindo alta eficiência no tráfego de dados.\n\n<strong>Arquitetura de Eventos:</strong> Definição e implementação de mensageria com RabbitMQ para processamento assíncrono e desacoplamento de serviços.\n\n<strong>Visão de Produto:</strong> Atuação estratégica junto a stakeholders para traduzir requisitos de negócio em arquiteturas técnicas robustas, escaláveis e de fácil manutenção.",
            footer: "&copy; 2024 Felipe Gonçalves Denardo"
        },
        education: [
            { degree: "Sistemas de Informação", school: "Unibrasil", period: "2013 – 2018" }
        ],
        languages: ["Português (Nativo)", "Inglês (Básico/A2 - Em desenvolvimento)"],
        skills: [
            { category: "Backend", items: ["Golang", "Java", "Spring (Boot, Data, Security)", "Hibernate", "Groovy/Grails", "REST APIs", "Microservices"] },
            { category: "Frontend", items: ["Vue.js", "Angular 2+", "TypeScript", "JavaScript", "JSF/PrimeFaces"] },
            { category: "Banco de Dados e Mensageria", items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ"] },
            { category: "DevOps e Cloud", items: ["Docker", "AWS (IAM, S3)", "Linux", "Git"] },
            { category: "Conceitos e Práticas", items: ["Clean Code", "Scrum", "Kanban", "Modelagem de Dados", "Tuning de Performance"] }
        ],
        jobs: [
            {
                role: "Senior Backend Engineer",
                period: "Fev/2020 - Atual",
                company: "CWS Platform",
                stack: "Golang (GORM), Groovy/Grails, MySQL, Redis, RabbitMQ, Docker, AWS S3, Vue.js, React.",
                details: [
                    "<strong>Arquitetura e Design:</strong> Liderança técnica no desenvolvimento de microsserviços em <strong>Golang</strong>, aplicando princípios de <strong>Clean Architecture</strong> para isolar o domínio de negócio das dependências de infraestrutura, elevando a cobertura de testes e a manutenibilidade do ecossistema.",
                    "<strong>Otimização de Performance:</strong> Responsável pela <strong>redução de 80% na latência de APIs</strong> críticas através da refatoração de lógicas ineficientes, <strong>otimização de consultas MySQL</strong> (análise de índices e planos de execução) e implementação de cache estratégico com <strong>Redis</strong>.",
                    "<strong>Sistemas Distribuídos:</strong> Implementação de mensageria com <strong>RabbitMQ</strong> para processamento assíncrono e arquiteturas orientadas a eventos, garantindo a escalabilidade do ambiente de produção.",
                    "<strong>Modernização e Qualidade:</strong> Atuação na evolução de sistemas legados, reduzindo o débito técnico e elevando a régua de qualidade do time através de <strong>Code Reviews</strong> e mentoria técnica.",
                    "<strong>Integração Full Stack:</strong> Desenvolvimento de interfaces dinâmicas em <strong>Vue.js</strong> e <strong>React</strong>, assegurando a integração fluida entre o frontend e as APIs em Go/Groovy."
                ]
            },
            {
                role: "Desenvolvedor Full Stack Pleno",
                period: "Jul/2018 - Fev/2020",
                company: "BRQ Digital Solutions",
                stack: "Java, Spring Boot, Hibernate, Angular, JSF, MySQL, AWS S3.",
                details: [
                    "<strong>Cliente Unicesumar:</strong> Atuação no portal acadêmico Studeo, desenvolvendo módulos de alta complexidade com <strong>Java (Spring Framework)</strong> e <strong>Angular</strong>. Foco na experiência do usuário e na integridade dos dados acadêmicos.",
                    "<strong>Cliente Bradesco:</strong> Manutenção evolutiva de sistemas financeiros críticos utilizando <strong>Java</strong> e <strong>JSF</strong>. Foco em estabilidade, segurança e conformidade com regras de negócio bancárias."
                ]
            },
            {
                role: "Desenvolvedor Full Stack Júnior",
                period: "Mar/2018 – Mai/2018",
                company: "Velti Tecnologia",
                stack: "Java, Spring, JSF, Angular, MySQL.",
                details: [
                    "<strong>Desenvolvimento e Modernização:</strong> Atuação Full Stack no sistema Velti Ponto (controle de ponto). Fui responsável pela manutenção e implementação de novas features no código legado utilizando <strong>Java</strong> e <strong>JSF</strong>, e participei da fase inicial de migração do frontend para <strong>Angular</strong>."
                ]
            },
            {
                role: "Desenvolvedor Full Stack Júnior",
                period: "Set/2016 – Fev/2018",
                company: "MobileSys",
                stack: "Java, Spring, JSF, MySQL.",
                details: [
                    "<strong>Desenvolvimento Full Stack:</strong> Atuação Full Stack na implementação de novas funcionalidades e correção de bugs no sistema TradePRO Promoter (gestão de equipes externas), utilizando <strong>Java (Spring Framework)</strong> no Backend e <strong>JSF</strong> no frontend.",
                    "<strong>Dados e Contribuição:</strong> Colaborei na modelagem de banco de dados e otimização de queries, atuando no ciclo de dados desde a concepção até a entrega. Implementei relatórios complexos com <strong>Apache POI</strong> e desenvolvi módulos para coleta de dados em campo e execução de tarefas no ponto de venda."
                ]
            },
            {
                role: "Estagiário Desenvolvedor Web",
                period: "Jun/2016 - Set/2016",
                company: "BRQ Digital Solutions",
                stack: "Java, JavaScript.",
                details: [
                    "<strong>Capacitação e Formação:</strong> Conclusão de curso intensivo de Desenvolvimento Web de 3 meses, com foco em fundamentos de <strong>Java</strong> e <strong>JavaScript</strong>.",
                    "<strong>Escopo:</strong> Período dedicado à formação técnica e à prontidão para suporte para equipes de desenvolvimento."
                ]
            }
        ]
    },
    "en-US": {
        titles: {
            resume: "Professional Summary",
            skills: "Technical Skills",
            education: "Education & Languages",
            languages: "Languages",
            diff: "Technical Highlights",
            experience: "Professional Experience"
        },
        text: {
            resume: "<strong>Senior Backend Engineer</strong> with over 8 years of experience building distributed systems and microservices architectures. Specialist in <strong>Golang</strong> and <strong>Java</strong>,  with a focus on high availability and resilience. Extensive experience applying <strong>Clean Architecture</strong> principles, prioritizing the decoupling of business logic and infrastructure independence to ensure highly testable and maintainable systems. Complementary <strong>frontend</strong> experience, ensuring seamless end-to-end integrations.",
            diff: "<strong>Performance & Optimization:</strong> Proven track record of resolving critical bottlenecks, achieving up to 80% reduction in API response times. Expert in query tuning, strategic Redis caching, and payload optimization via DTOs, ensuring high data-traffic efficiency.\n\n<strong>Event-Driven Architecture:</strong> Design and implementation of messaging systems using RabbitMQ for asynchronous processing and service decoupling.\n\n<strong>Product Vision:</strong> Strategic collaboration with stakeholders to translate business requirements into robust, scalable, and maintainable technical architectures.",
            footer: "&copy; 2024 Felipe Gonçalves Denardo"
        },
        education: [
            { degree: "B.S. in Information Systems", school: "Unibrasil", period: "2013 – 2018" }
        ],
        languages: ["Portuguese (Native)", "English (Elementary/A2 – Currently studying)"],
        skills: [
            { category: "Backend", items: ["Golang", "Java", "Spring (Boot, Data, Security)", "Hibernate", "Groovy/Grails", "REST APIs", "Microservices"] },
            { category: "Frontend", items: ["Vue.js", "Angular 2+", "TypeScript", "JavaScript", "JSF/PrimeFaces"] },
            { category: "Databases & Messaging", items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ"] },
            { category: "DevOps & Cloud", items: ["Docker", "AWS (IAM, S3)", "Linux", "Git"] },
            { category: "Core Competencies", items: ["Clean Code", "SOLID", "Hexagonal Architecture", "Scrum", "Kanban", "Data Modeling", "Performance Tuning"] }
        ],
        jobs: [
            {
                role: "Senior Backend Engineer",
                period: "Feb/2020 - Present",
                company: "CWS Platform",
                stack: "Golang (GORM), Groovy/Grails, MySQL, Redis, RabbitMQ, Docker, AWS S3, Vue.js, React.",
                details: [
                    "<strong>Architecture & Design:</strong> Technical leadership in Golang microservices,applying <strong>Clean Architecture</strong> to isolate the business domain from infrastructure dependencies, significantly increasing test coverage and ecosystem maintainability.",
                    "<strong>Performance Optimization:</strong> Responsible for an <strong>80% reduction in critical API latency</strong> by refactoring inefficient logic, <strong>optimizing MySQL queries</strong> (index analysis and execution plans), and implementing strategic caching with <strong>Redis</strong>.",
                    "<strong>Distributed Systems:</strong> Implemented messaging with <strong>RabbitMQ</strong> for asynchronous processing and event-driven architectures, ensuring production environment scalability.",
                    "<strong>Modernization & Quality:</strong> Led the evolution of legacy systems, reducing technical debt and raising the team's quality bar through <strong>Code Reviews</strong> and technical mentorship.",
                    "<strong>Full Stack Integration:</strong> Developed dynamic interfaces in <strong>Vue.js</strong> and <strong>React</strong>, ensuring seamless integration between frontend layers and Go/Groovy APIs."
                ]
            },
            {
                role: "Mid-Level Full Stack Developer",
                period: "Jul/2018 - Feb/2020",
                company: "BRQ Digital Solutions",
                stack: "Java, Spring Boot, Hibernate, Angular, JSF, MySQL, AWS S3.",
                details: [
                    "<strong>Unicesumar Client:</strong> Worked on the \"Studeo\" academic portal, developing high-complexity modules with <strong>Java (Spring Framework)</strong> and <strong>Angular</strong>. Focused on user experience and academic data integrity.",
                    "<strong>Bradesco Client:</strong> Executed evolutionary maintenance of critical financial systems using <strong>Java</strong> and <strong>JSF</strong>. Focused on stability, security, and compliance with banking business rules."
                ]
            },
            {
                role: "Junior Full Stack Developer",
                period: "Mar/2018 – May/2018",
                company: "Velti Tecnologia",
                stack: "Java, Spring, JSF, Angular, MySQL.",
                details: [
                    "<strong>Development & Modernization:</strong> Full Stack role on the \"Velti Ponto\" system. Responsible for maintaining and implementing new features in legacy code using <strong>Java</strong> e <strong>JSF</strong> and participated in the initial migration phase to <strong>Angular</strong>."
                ]
            },
            {
                role: "Junior Full Stack Developer",
                period: "Sep/2016 – Feb/2018",
                company: "MobileSys",
                stack: "Java, Spring, JSF, MySQL.",
                details: [
                    "<strong>Full Stack Development:</strong> Implemented new features and bug fixes for the \"TradePRO Promoter\" system using <strong>Java (Spring Framework)</strong> and <strong>JSF</strong>.",
                    "<strong>Data & Contributions:</strong> Collaborated on database modeling and query optimization. Implemented complex reports with <strong>Apache POI</strong> and developed modules for field data collection and point-of-sale task execution."
                ]
            },
            {
                role: "Web Development Intern",
                period: "Jun/2016 - Sep/2016",
                company: "BRQ Digital Solutions",
                stack: "Java, JavaScript.",
                details: [
                    "<strong>Training & Development:</strong> Completed a 3-month intensive Web Development bootcamp, focusing on <strong>Java</strong> and <strong>JavaScript</strong> fundamentals.",
                    "<strong>Technical Scope:</strong> Period dedicated to technical training and ensuring readiness to support enterprise development teams."
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
    img.src = profileData.photoUrl || `https://ui-avatars.com/api/?name=Felipe+Denardo&background=0f172a&color=fff&size=200`;
    img.onerror = function () {
        this.src = 'https://ui-avatars.com/api/?name=Felipe+Denardo&background=0f172a&color=fff&size=200';
    };

    const contactContainer = document.getElementById('contact-container');
    contactContainer.innerHTML = '';
    profileData.contacts.forEach(c => {
        let html = '';
        if (c.type === 'link' || c.type === 'email') {
            const href = c.type === 'email' ? `mailto:${c.value}` : c.value;
            html = `<a href="${href}" target="_blank" class="contact-link group">
                        ${icons[c.icon]}
                        <span class="group-hover:text-sky-600 transition-colors">${c.label || c.value}</span>
                    </a>`;
        } else {
            html = `<div class="contact-link cursor-default">
                        ${icons[c.icon]}
                        <span>${c.value}</span>
                    </div>`;
        }
        contactContainer.innerHTML += html;
    });

    document.getElementById('resume-title').textContent = data.titles.resume;
    document.getElementById('resume-text').innerHTML = data.text.resume; // Changed to innerHTML for potential formatting
    document.getElementById('skills-title').textContent = data.titles.skills;
    document.getElementById('education-title').textContent = data.titles.education;
    document.getElementById('languages-title').textContent = data.titles.languages;
    document.getElementById('diff-title').textContent = data.titles.diff;
    document.getElementById('diff-text').innerHTML = data.text.diff.replace(/\n/g, '<br>'); // Simple line break handling
    document.getElementById('experience-title').textContent = data.titles.experience;
    document.getElementById('footer-text').innerHTML = data.text.footer;

    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    data.skills.forEach(cat => {
        // Generating badges with new .skill-badge class
        const itemsHtml = cat.items.map(item =>
            `<span class="skill-badge bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-700">${item}</span>`
        ).join('');

        skillsContainer.innerHTML += `
            <div>
                <p class="font-bold text-slate-800 mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                    ${cat.category}
                </p>
                <div class="flex flex-wrap gap-2">${itemsHtml}</div>
            </div>`;
    });

    const educationContainer = document.getElementById('education-container');
    educationContainer.innerHTML = '';
    data.education.forEach(edu => {
        educationContainer.innerHTML += `
            <div class="mb-6 relative">
                <div class="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white"></div>
                <h4 class="font-bold text-slate-900 text-base md:text-lg">${edu.degree}</h4>
                <p class="font-medium">${edu.school}</p>
                <p class="text-slate-500 text-sm mt-1">${edu.period}</p>
            </div>`;
    });

    const langList = document.getElementById('languages-list');
    langList.innerHTML = '';
    data.languages.forEach(l => {
        langList.innerHTML += `<li class="flex items-center gap-2"><span class="w-1 h-1 bg-slate-400 rounded-full"></span>${l}</li>`;
    });

    const expContainer = document.getElementById('experience-container');
    expContainer.innerHTML = '';
    data.jobs.forEach((job, index) => {
        const detailsHtml = job.details.map(d => `<li class="pl-1">${d}</li>`).join('');

        // Timeline Item Structure (Centered Card Style)
        expContainer.innerHTML += `
            <div class="timeline-item group fade-in-up" style="animation-delay: ${index * 100}ms">                
                
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all sm:ml-4 relative">
                    <div class="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                        <div>
                            <h4 class="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">${job.role}</h4>
                            <p class="text-lg text-slate-500 font-medium">${job.company}</p>
                        </div>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 whitespace-nowrap border border-slate-200">
                            ${job.period}
                        </span>
                    </div>
                    
                    <ul class="space-y-3 text-slate-600 text-sm md:text-base mb-4 leading-relaxed marker:text-sky-400">
                        ${detailsHtml}
                    </ul>
                    
                    ${job.stack ? `
                        <div class="mt-5 pt-4 border-t border-slate-50">
                            <p class="text-xs text-slate-400 font-mono mb-2 uppercase tracking-wide">Tech Stack</p>
                            <div class="flex flex-wrap gap-2 text-sm text-slate-600 font-medium">
                                ${job.stack.split(',').map(s => `<span class="bg-slate-50 px-2 py-1 rounded text-slate-600 text-xs border border-slate-100">${s.trim()}</span>`).join('')}
                            </div>
                        </div>` : ''}
                </div>
            </div>`;
    });

    // Re-initialize icons for newly injected content
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
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