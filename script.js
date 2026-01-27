const profileData = {
    name: "Felipe Gonçalves Denardo",
    role: { 
        "pt-BR": "Engenheiro Backend Sênior | APIs & Integrações | Microsserviços",
        "en-US": "Senior Backend Engineer | APIs & Integrations | Microservices" 
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
            resume: "Senior Backend Engineer com mais de 8 anos de experiência, especializado em APIs, integrações e arquitetura de microsserviços. Forte atuação com Golang e Java, focado na entrega de software de alta qualidade (Clean Code), construção de micro APIs, modelagem de dados complexos e evolução de sistemas legados. Atuação contínua no suporte ao desenvolvimento front-end, garantindo integração eficiente entre interface e backend.",
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
                role: "Engenheiro Backend Sênior (com suporte ao Front-end)", 
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
                role: "Desenvolvedor Backend Pleno (com suporte ao Front-end)",
                period: "Jul/2018 - Fev/2020",
                company: "BRQ Digital Solutions",
                stack: "Java, Spring, JSF, Angular, MySQL, AWS S3, Git.",
                details: [
                    "<strong>Backend:</strong> Desenvolvimento de serviços backend em Java, integrando regras de negócio e persistência de dados.",
                    "<strong>Suporte ao Front-end:</strong> Apoio no desenvolvimento e manutenção de interfaces em Angular e JSF, garantindo integração com o backend.",
                    "<strong>Sistemas Corporativos:</strong> Atuação em sistemas de grande porte, com foco em estabilidade e evolução de legado."
                ]
            },
            {
                role: "Desenvolvedor Backend Júnior (com suporte ao Front-end)",
                period: "Mar/2018 – Mai/2018",
                company: "Velti Tecnologia",
                stack: "Java, Spring, JSF, Angular, MySQL.",
                details: [
                    "<strong>Backend:</strong> Manutenção e desenvolvimento de funcionalidades em Java no sistema Velti Ponto.",
                    "<strong>Suporte ao Front-end:</strong> Apoio à camada de interface em Angular e JSF."
                ]
            },
            {
                role: "Desenvolvedor Backend Júnior (com suporte ao Front-end)",
                period: "Set/2016 – Fev/2018",
                company: "MobileSys",
                stack: "Java, Spring, JSF, MySQL.",
                details: [
                    "<strong>Backend:</strong> Desenvolvimento e correção de funcionalidades no sistema TradePRO Promoter.",
                    "<strong>Suporte ao Front-end:</strong> Apoio à interface em JSF e implementação de relatórios.",
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
                    "<strong>Suporte ao Front-end:</strong> Apoio inicial no desenvolvimento de interfaces web."
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
            resume: "Engenheiro Backend Sênior com mais de 8 anos de experiência, especializado em APIs, integrações e arquitetura de microsserviços. Forte atuação com Golang e Java, focado na entrega de software de alta qualidade (Clean Code), construção de micro APIs, modelagem de dados complexos e evolução de sistemas legados. Atuação contínua no suporte ao desenvolvimento front-end, garantindo integração eficiente entre interface e backend.",
            diff: "Proven experience delivering high-performance solutions through Redis caching, database tuning, algorithm refactoring, and RabbitMQ-based asynchronous architectures.",
            footer: "&copy; 2024 Felipe Gonçalves Denardo"
        },
        education: [
            { degree: "Information Systems", school: "Unibrasil", period: "2013 – 2018" }
        ],
        languages: ["Portuguese: Native", "English: Basic (A2) - Currently studying"],
        skills: [
            { category: "Backend", items: ["Golang", "Java", "Spring Boot", "Hibernate", "Groovy/Grails", "REST APIs", "Microservices"] },
            { category: "Frontend Support", items: ["Vue.js", "Angular 2+", "TypeScript", "JavaScript", "JSF/PrimeFaces"] },
            { category: "Data & Infra", items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ", "Docker", "AWS S3", "Linux", "Git"] },
            { category: "Practices", items: ["Clean Code", "Scrum", "Kanban", "Data Modeling", "Tuning"] }
        ],
        jobs: [
            {
              role: "Senior Backend Engineer (with Frontend Support)",
              period: "Feb/2020 - Current",
              company: "CWS Platform",
              stack: "Golang, Groovy/Grails, Vue.js, React, RabbitMQ, Redis, MySQL, PostgreSQL, Docker, AWS S3, Git.",
              details: [
                "<strong>Backend & APIs:</strong> Development and maintenance of Golang-based microservices, focusing on low coupling, readability, maintainability, and performance.",
                "<strong>Frontend Support & Integration:</strong> Continuous support and occasional development of Vue.js and React interfaces, ensuring correct integration and consumption of backend APIs.",
                "<strong>Architecture & Performance:</strong> Implementation of event-driven architectures and asynchronous processing using RabbitMQ and Redis, improving scalability and optimizing response times.",
                "<strong>Legacy Modernization:</strong> Refactoring legacy modules and rewriting inefficient logic to reduce technical debt and improve system performance.",
                "<strong>Data Modeling:</strong> Analysis and optimization of database schemas, ensuring data integrity and query efficiency through indexing and performance tuning.",
                "<strong>Quality:</strong> Conducting code reviews and promoting best development practices to ensure high-quality software delivery."
              ]
            },
            {
                role: "Backend Developer (with Frontend Support)",
                period: "Jul/2018 - Feb/2020",
                company: "BRQ Digital Solutions",
                stack: "Java, Spring, JSF, Angular, MySQL, AWS S3, Git.",
                details: [
                    "<strong>Backend:</strong> Java backend development.",
                    "<strong>Frontend Support:</strong> Supporting Angular and JSF interfaces."
                ]
            },
            {
                role: "Junior Backend Developer (with Frontend Support)",
                period: "Mar/2018 – May/2018",
                company: "Velti Tecnologia",
                stack: "Java, Spring, JSF, Angular, MySQL.",
                details: [
                    "<strong>Backend:</strong> Feature development and maintenance.",
                    "<strong>Frontend Support:</strong> UI support."
                ]
            },
            {
                role: "Junior Backend Developer (with Frontend Support)",
                period: "Sep/2016 – Feb/2018",
                company: "MobileSys",
                stack: "Java, Spring, JSF, MySQL.",
                details: [
                    "<strong>Backend:</strong> Bug fixing and feature development.",
                    "<strong>Frontend Support:</strong> UI and reporting support."
                ]
            },
            {
                role: "Web Developer Intern",
                period: "Jun/2016 - Sep/2016",
                company: "BRQ Digital Solutions",
                stack: "Java, JavaScript.",
                details: [
                    "<strong>Training:</strong> Intensive web development training.",
                    "<strong>Frontend Support:</strong> Initial UI support."
                ]
            }
        ]
    }
};
