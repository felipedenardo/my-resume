const profileData = {
    name: "Felipe Gonçalves Denardo",
    role: {
        "pt-BR": "Senior Backend Engineer | Golang & Java | Microservices | APIs",
        "en-US": "Senior Backend Engineer | Golang & Java | Microservices | APIs"
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
        nav: {
            home: "Início",
            skills: "Habilidades",
            experience: "Experiência",
            highlights: "Diferenciais",
            education: "Educação"
        },
        labels: {
            techStack: "Tech Stack",
            results: "Resultados"
        },
        highlightsMeta: {
            eyebrow: "Diferenciais",
            title: "Destaques que geram impacto",
            lead: "Resultados mensuráveis, decisões técnicas sólidas e foco em eficiência."
        },
        summary: "<b>Senior Backend Engineer</b> com mais de 8 anos de experiência na construção de sistemas distribuídos e arquitetura de microsserviços. Especialista em <b>Golang</b> e <b>Java</b>, com foco em soluções de alta disponibilidade e resiliência. Ampla experiência na aplicação de <b>Clean Architecture</b>, priorizando o desacoplamento da lógica de negócio e a independência de infraestrutura para garantir sistemas testáveis e de fácil manutenção. Experiência complementar em <b>frontend</b>, assegurando a entrega de integrações eficientes de ponta a ponta.",
        highlights: [
            {
                title: "Performance e Otimização",
                description: "Histórico comprovado na resolução de gargalos críticos, alcançando <strong>reduções de até 80% no tempo de resposta de APIs</strong>. Aplicação de <strong>tuning de queries</strong>, implementação estratégica de cache com <strong>Redis</strong> e <strong>otimização de payloads via DTOs</strong>, garantindo alta eficiência no tráfego de dados."
            },
            {
                title: "Arquitetura de Eventos",
                description: "Implementação de mensageria com <strong>RabbitMQ</strong> para processamento assíncrono e desacoplamento de serviços, reduzindo tempos de batch em <strong>~96%</strong>."
            },
            {
                title: "Visão de Produto",
                description: "Atuação estratégica junto a stakeholders para traduzir requisitos de negócio em <strong>arquiteturas técnicas robustas, escaláveis</strong> e de fácil manutenção."
            }
        ],
        skills: [
            { category: "Backend", items: ["Golang", "Java 8+", "Microservices", "Spring (Boot, Data, Security)", "JWT", "ORM (GORM & Hibernate)", "Gin Gonic", "Groovy/Grails", "JSF", "Swagger / OpenAPI", "REST APIs", "Desenvolvimento de Shared Libraries", "Arquitetura Hexagonal / Clean Architecture"] },
            { category: "Banco de Dados e Mensageria", items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ", "Event-Driven Architecture", "Elasticsearch"] },
            { category: "DevOps e Cloud", items: ["Docker", "Docker Compose Multi-Service", "AWS (S3, IAM, EC2)", "Linux", "Git"] },
            { category: "Conceitos e Práticas", items: ["Clean Code", "Strongly Typed Domain", "Scrum", "Kanban", "Modelagem de Dados", "Tuning de Performance", "JSEND Pattern"] },
            { category: "Frontend", items: ["Vue.js", "Angular 2+", "TypeScript", "JavaScript", "Material Design", "Bootstrap", "PrimeFaces"] },
        ],
        jobs: [
            {
                role: "Senior Backend Engineer",
                period: "Fev/2020 - Atual",
                company: "CWS Platform",
                stack: "Golang (GORM), Groovy/Grails, MySQL, PostgreSQL, Redis, RabbitMQ, Elasticsearch, Docker, AWS S3, Vue.js, React.",
                results: ["-80% latência de APIs", "~96% redução em batch", "+resiliência em importações"],
                details: [
                    "<strong>Arquitetura e Design:</strong> Liderança técnica no desenvolvimento de microsserviços em <strong>Golang</strong>, aplicando <strong>Clean Architecture</strong> para isolar o domínio de negócio, elevando a cobertura de testes e a manutenibilidade do ecossistema.",
                    "<strong>Otimização de Performance:</strong> Redução de <strong>80% na latência de APIs</strong> através da refatoração de lógicas, otimização de consultas <strong>MySQL</strong> (índices e planos de execução) e implementação de cache estratégico com <strong>Redis</strong>.",
                    "<strong>Sistemas de Alta Disponibilidade:</strong> Implementação de pipeline assíncrono em duas fases (light/heavy) para importação de planilhas SKU com <strong>RabbitMQ</strong> e staging, reduzindo o tempo de processamento em ~96% (50s para 2s) e eliminando timeouts/locks no banco de dados.",
                    "<strong>Busca e Dados (Elasticsearch):</strong> Otimização de queries e estratégias de reindexação no <strong>Elasticsearch</strong>, melhorando significativamente a relevância e performance da busca.",
                    "<strong>Modernização e Liderança:</strong> Redução de débito técnico em sistemas legados e mentoria técnica ao time através de <strong>Code Reviews</strong> rigorosos, elevando a régua de qualidade da engenharia.",
                    "<strong>Integração Full Stack:</strong> Desenvolvimento de interfaces dinâmicas em <strong>Vue.js</strong> e <strong>React</strong>, garantindo integração fluida com APIs em <strong>Go</strong> e <strong>Groovy</strong>."
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
        nav: {
            home: "Home",
            skills: "Skills",
            experience: "Experience",
            highlights: "Highlights",
            education: "Education"
        },
        labels: {
            techStack: "Tech Stack",
            results: "Results"
        },
        highlightsMeta: {
            eyebrow: "Highlights",
            title: "Impact Highlights",
            lead: "Measurable outcomes, sound technical decisions, and relentless focus on efficiency."
        },
        summary: "<b>Senior Backend Engineer</b> with over 8 years of experience building distributed systems and microservices architecture. Expert in <b>Golang</b> and <b>Java</b>, focusing on high availability and resilience solutions. Extensive experience applying <b>Clean Architecture</b>, prioritizing decoupling of business logic and infrastructure independence to ensure testable and maintainable systems. Complementary <b>frontend</b> experience, ensuring the delivery of efficient end-to-end integrations.",
        highlights: [
            {
                title: "Performance & Optimization",
                description: "Proven track record in resolving critical bottlenecks, achieving <strong>up to 80% reduction in API response times</strong>. Applying <strong>query tuning</strong>, strategic <strong>Redis</strong> caching, and <strong>payload optimization and data integrity via DTOs</strong>, ensuring high-throughput data efficiency."
            },
            {
                title: "Event-Driven Architecture",
                description: "Specialized in implementing asynchronous messaging with <strong>RabbitMQ</strong> to decouple services, resulting in a <strong>~96%</strong> reduction in batch processing times and significantly improved system scalability."
            },
            {
                title: "Product Vision",
                description: "Strategic collaborator with stakeholders, adept at translating complex business requirements into <strong>robust, scalable</strong>, and maintainable technical architectures."
            }
        ],
        skills: [
            { category: "Backend", items: ["Golang", "Java 8+", "Microservices", "Spring (Boot, Data, Security)", "JWT", "ORM (GORM & Hibernate)", "Gin Gonic", "Groovy/Grails", "JSF", "Swagger / OpenAPI", "REST APIs", "Shared Libraries Development", "Hexagonal / Clean Architecture"] },
            { category: "Databases & Messaging", items: ["PostgreSQL", "MySQL", "SQL Server", "Redis", "RabbitMQ", "Event-Driven Architecture", "Elasticsearch"] },
            { category: "DevOps & Cloud", items: ["Docker", "Docker Compose Multi-Service", "AWS (S3, IAM, EC2)", "Linux", "Git"] },
            { category: "Core Competencies", items: ["Clean Code", "SOLID", "Strongly Typed Domain", "Scrum", "Kanban", "Data Modeling", "Performance Tuning", "JSEND Pattern"] },
            { category: "Frontend", items: ["Vue.js", "Angular 2+", "TypeScript", "JavaScript", "Material Design", "Bootstrap", "PrimeFaces"] },
        ],
        jobs: [
            {
                role: "Senior Backend Engineer",
                period: "Feb/2020 - Present",
                company: "CWS Platform",
                stack: "Golang (GORM), Groovy/Grails, MySQL, PostgreSQL, Redis, RabbitMQ, Elasticsearch, Docker, AWS S3, Vue.js, React.",
                results: ["-80% API latency", "~96% batch reduction", "Higher import resilience"],
                details: [
                    "<strong>Architecture & Design:</strong> Technical lead in <strong>Golang</strong> microservices development, applying <strong>Clean Architecture</strong> principles to decouple business domains from infrastructure, significantly increasing test coverage and ecosystem maintainability.",
                    "<strong>Performance Optimization:</strong> Achieved an <strong>80% reduction in API latency</strong> by refactoring inefficient logic, optimizing <strong>MySQL</strong> queries (index analysis and execution plans), and implementing strategic caching with <strong>Redis</strong>.",
                    "<strong>High-Availability Systems:</strong> Engineered a two-phase (light/heavy) asynchronous pipeline for SKU spreadsheet imports using <strong>RabbitMQ</strong> and staging areas, slashing effective processing time by ~96% (from ~50s to 2s) and eliminating database timeouts/locks.",
                    "<strong>Search & Data (Elasticsearch):</strong> Optimized search queries and reindexing strategies in <strong>Elasticsearch</strong>, significantly improving both search relevance and system throughput.",
                    "<strong>Modernization & Leadership:</strong> Reduced technical debt in legacy systems and raised the engineering bar through technical mentorship and rigorous <strong>Code Reviews</strong>, fostering a culture of high-quality code.",
                    "<strong>Full-Stack Integration:</strong> Developed dynamic interfaces using <strong>Vue.js</strong> and <strong>React</strong>, ensuring seamless integration between frontend applications and <strong>Go</strong>/<strong>Groovy</strong> APIs."
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
    phone: '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.633 1.433h.005c6.554 0 11.89-5.335 11.893-11.892a11.826 11.826 0 00-3.481-8.417z"/></svg>',
    mail: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
    linkedin: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.328-4 0v5.604h-3v-11h3v1.765c1.397-2.714 7-2.825 7 2.456v6.779z"/></svg>',
    github: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577v-2.003c-3.336.726-4.043-1.608-4.043-1.608-.546-1.385-1.332-1.755-1.332-1.755-1.09-.747.082-.73.082-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.491.996.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.238-3.224-.124-.3-.536-1.523.118-3.18 0 0 1-.32 3.275 1.23.958-.266 1.983-.4 3.01-.405 2.275-1.55 3.275-1.23 3.275-1.23.654 1.657.242 2.88.118 3.18.77.844 1.238 1.913 1.238 3.224 0 4.609-2.805 5.626-5.475 5.923.43.37.817 1.12.817 2.257v3.313c0 .317.22.687.82.577C20.562 21.8 24 17.303 24 12c0-6.628-5.372-12-12-12z"/></svg>',
    download: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"></path></svg>'
};

class Carousel {
    constructor(config) {
        this.wrapperId = config.wrapperId;
        this.prevBtnId = config.prevBtnId;
        this.nextBtnId = config.nextBtnId;
        this.dotsId = config.dotsId;
        this.cardClass = config.cardClass;

        this.currentSlide = 0;
        this.totalSlides = 0;
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.init();
    }

    init() {
        const prevBtn = document.getElementById(this.prevBtnId);
        const nextBtn = document.getElementById(this.nextBtnId);
        const wrapper = document.getElementById(this.wrapperId);

        if (prevBtn) prevBtn.onclick = () => this.prevSlide();
        if (nextBtn) nextBtn.onclick = () => this.nextSlide();

        if (wrapper) {
            wrapper.addEventListener('touchstart', (e) => {
                this.touchStartX = e.changedTouches[0].screenX;
            });

            wrapper.addEventListener('touchend', (e) => {
                this.touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe();
            });
        }
    }

    setTotalSlides(count) {
        this.totalSlides = count;
        this.currentSlide = 0;
        this.update();
    }

    update() {
        const wrapper = document.getElementById(this.wrapperId);
        if (!wrapper) return;
        const cards = wrapper.querySelectorAll('.' + this.cardClass);
        if (cards.length === 0) return;

        this.totalSlides = cards.length;

        cards.forEach((card, index) => {
            this.applyClasses(card, index);
        });

        this.updateDots();
    }

    applyClasses(card, index) {
        card.classList.remove('active', 'prev', 'next', 'hidden');

        if (index === this.currentSlide) {
            card.classList.add('active');
        } else if (index === (this.currentSlide - 1 + this.totalSlides) % this.totalSlides) {
            card.classList.add('prev');
        } else if (index === (this.currentSlide + 1) % this.totalSlides) {
            card.classList.add('next');
        } else {
            card.classList.add('hidden');
        }
    }

    updateDots() {
        const dotsContainer = document.getElementById(this.dotsId);
        if (!dotsContainer) return;

        dotsContainer.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            if (i === this.currentSlide) dot.classList.add('active');
            dot.onclick = () => {
                this.currentSlide = i;
                this.update();
            };
            dotsContainer.appendChild(dot);
        }
    }

    nextSlide() {
        if (this.totalSlides === 0) return;
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.update();
    }

    prevSlide() {
        if (this.totalSlides === 0) return;
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.update();
    }

    handleSwipe() {
        if (this.touchEndX < this.touchStartX - 50) this.nextSlide();
        if (this.touchEndX > this.touchStartX + 50) this.prevSlide();
    }
}

let skillsCarouselInstance;
function updateSkillsCarouselHeight() {
    const wrapper = document.getElementById('skills-carousel');
    if (!wrapper) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) {
        wrapper.style.height = '';
        return;
    }

    const cards = wrapper.querySelectorAll('.skill-card');
    if (cards.length === 0) return;

    let maxHeight = 0;
    cards.forEach((card) => {
        const clone = card.cloneNode(true);
        clone.classList.add('active');
        clone.style.position = 'absolute';
        clone.style.visibility = 'hidden';
        clone.style.pointerEvents = 'none';
        clone.style.display = 'block';
        clone.style.width = '96%';
        clone.style.maxWidth = '96%';
        clone.style.left = '0';
        clone.style.top = '0';
        wrapper.appendChild(clone);

        const height = clone.getBoundingClientRect().height;
        if (height > maxHeight) maxHeight = height;

        wrapper.removeChild(clone);
    });

    if (maxHeight > 0) {
        wrapper.style.height = `${Math.ceil(maxHeight)}px`;
    }
}

function bindExperienceToggles() {
    const experienceButtons = document.querySelectorAll('.experience-toggle');
    experienceButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const item = button.closest('.experience-item');
            if (!item) return;

            const shouldExpand = !item.classList.contains('expanded');
            document.querySelectorAll('.experience-item.expanded').forEach((openItem) => {
                openItem.classList.remove('expanded');
                const openButton = openItem.querySelector('.experience-toggle');
                if (openButton) openButton.setAttribute('aria-expanded', 'false');
            });

            const isExpanded = shouldExpand;
            if (shouldExpand) item.classList.add('expanded');
            button.setAttribute('aria-expanded', String(isExpanded));
        });
    });
}




function renderPage(lang) {
    const data = contentData[lang];
    if (!data) return;

    // Profile
    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-role').textContent = profileData.role[lang];

    const img = document.getElementById('profile-image');
    img.src = profileData.photoUrl || `https://ui-avatars.com/api/?name=Felipe+Denardo&background=667eea&color=fff&size=200`;
    img.onerror = function () {
        this.src = 'https://ui-avatars.com/api/?name=Felipe+Denardo&background=667eea&color=fff&size=200';
    };

    // Contacts
    const contactContainer = document.getElementById('contact-container');
    contactContainer.innerHTML = '';
    profileData.contacts.forEach(c => {
        let html = '';
        if (c.type === 'link') {
            html = `<a href="${c.value}" target="_blank" class="contact-btn">
                        ${icons[c.icon]}
                        <span>${c.label || c.value}</span>
                    </a>`;
        } else if (c.type === 'email') {
            html = `<a href="mailto:${c.value}" class="contact-btn">
                        ${icons[c.icon]}
                        <span>${c.label || c.value}</span>
                    </a>`;
        } else if (c.type === 'phone') {
            html = `<a href="https://wa.me/5541997753034" target="_blank" class="contact-btn">
                        ${icons[c.icon]}
                        <span>${c.value}</span>
                    </a>`;
        }
        contactContainer.innerHTML += html;
    });

    contactContainer.innerHTML += `
        <details class="cv-dropdown">
            <summary class="contact-btn cv-summary">
                ${icons.download}
                <span>CV</span>
            </summary>
            <div class="cv-menu">
                <a class="cv-link" href="assets/felipedenardocv_pt-BR.pdf" download="felipedenardocv_pt-BR.pdf">PT-BR</a>
                <a class="cv-link" href="assets/felipedenardocv_en-US.pdf" download="felipedenardocv_en-US.pdf">EN-US</a>
            </div>
        </details>`;

    // Navigation labels
    document.getElementById('nav-home').textContent = data.nav.home;
    document.getElementById('nav-skills').textContent = data.nav.skills;
    document.getElementById('nav-experience').textContent = data.nav.experience;
    document.getElementById('nav-highlights').textContent = data.nav.highlights;

    if (data.highlightsMeta) {
        document.getElementById('highlights-eyebrow').textContent = data.highlightsMeta.eyebrow;
        document.getElementById('highlights-title').textContent = data.highlightsMeta.title;
        document.getElementById('highlights-lead').textContent = data.highlightsMeta.lead;
    }


    // Summary & Highlights (Modified for Hero Summary)
    document.getElementById('summary-text').innerHTML = data.summary;

    const highlightsContainer = document.getElementById('highlights-container');
    highlightsContainer.innerHTML = '';
    data.highlights.forEach((h) => {
        highlightsContainer.innerHTML += `
            <div class="highlight-item">
                <h4>${h.title}</h4>
                <p>${h.description}</p>
            </div>`;
    });




    // Skills Carousel
    const skillsCarousel = document.getElementById('skills-carousel');
    skillsCarousel.innerHTML = '';


    data.skills.forEach(cat => {
        const itemsHtml = cat.items.map(item =>
            `<span class="skill-badge">${item}</span>`
        ).join('');

        skillsCarousel.innerHTML += `
            <div class="skill-card">
                <h3 class="skill-category">${cat.category}</h3>
                <div class="skill-items">${itemsHtml}</div>
            </div>`;
    });


    // Experience Accordion
    const expContainer = document.getElementById('experience-container');
    expContainer.innerHTML = '';

    data.jobs.forEach((job, index) => {
        const isCurrent = index === 0;
        const detailsHtml = job.details.map(d => `<li>${d}</li>`).join('');
        const resultsHtml = job.results ? `
            <div class="experience-results">
                <p class="results-label">${data.labels?.results || 'Results'}</p>
                <div class="results-items">
                    ${job.results.map(r => `<span class="result-badge">${r}</span>`).join('')}
                </div>
            </div>` : '';
        const stackHtml = job.stack ? `
            <div class="experience-stack">
                <p class="stack-label">${data.labels?.techStack || 'Tech Stack'}</p>
                <div class="stack-items">
                    ${job.stack.split(',').map(s => `<span class="stack-badge">${s.trim()}</span>`).join('')}
                </div>
            </div>` : '';

        expContainer.innerHTML += `
            <article class="experience-item ${isCurrent ? 'expanded' : ''}">
                <button class="experience-toggle" aria-expanded="${isCurrent ? 'true' : 'false'}">
                    <div class="experience-header">
                        <div>
                            <h3 class="experience-role">${job.role}</h3>
                            <p class="experience-company">${job.company}</p>
                        </div>
                        <span class="experience-period">${job.period}</span>
                    </div>
                </button>
                <div class="experience-content">
                    ${resultsHtml}
                    <ul class="experience-details">
                        ${detailsHtml}
                    </ul>
                    ${stackHtml}
                </div>
            </article>`;
    });
    bindExperienceToggles();

    // Initialize Skills Carousel
    if (!skillsCarouselInstance) {
        skillsCarouselInstance = new Carousel({
            wrapperId: 'skills-carousel',
            prevBtnId: 'carousel-prev',
            nextBtnId: 'carousel-next',
            dotsId: 'carousel-dots',
            cardClass: 'skill-card'
        });
    }
    skillsCarouselInstance.setTotalSlides(data.skills.length);

    // Initial update
    setTimeout(() => {
        if (skillsCarouselInstance) skillsCarouselInstance.update();
        updateSkillsCarouselHeight();
    }, 100);

}

// Event Listeners
const langDropdown = document.getElementById('lang-dropdown');
const langCurrent = document.getElementById('lang-current');
const langOptions = document.querySelectorAll('.lang-option');
const themeDropdown = document.getElementById('theme-dropdown');
const themeCurrent = document.getElementById('theme-current');
const themeOptions = document.querySelectorAll('.theme-option');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function updateLangLabel(lang) {
    if (!langCurrent) return;
    langCurrent.textContent = lang === 'en-US' ? '🇺🇸 EN' : '🇧🇷 PT';
}

function updateThemeLabel(theme) {
    if (!themeCurrent) return;
    const lang = localStorage.getItem('lang') || 'pt-BR';
    const labels = {
        "pt-BR": { light: "Tema: Claro", dark: "Tema: Escuro" },
        "en-US": { light: "Theme: Light", dark: "Theme: Dark" }
    };
    const normalized = theme === 'dark' ? 'dark' : 'light';
    const dict = labels[lang] || labels["en-US"];
    themeCurrent.textContent = dict[normalized];
}

function applyTheme(theme) {
    const normalized = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', normalized);
    localStorage.setItem('theme', normalized);
    updateThemeLabel(normalized);
    if (themeDropdown) themeDropdown.removeAttribute('open');
    if (themeMeta) {
        themeMeta.setAttribute('content', normalized === 'dark' ? '#0b1020' : '#667eea');
    }
}

function applyLanguage(lang) {
    localStorage.setItem('lang', lang);
    updateLangLabel(lang);
    const savedTheme = localStorage.getItem('theme') || 'light';
    updateThemeLabel(savedTheme);
    renderPage(lang);
    if (langDropdown) langDropdown.removeAttribute('open');
}

langOptions.forEach((option) => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        if (!lang) return;
        applyLanguage(lang);
    });
});

themeOptions.forEach((option) => {
    option.addEventListener('click', () => {
        const theme = option.getAttribute('data-theme');
        if (!theme) return;
        applyTheme(theme);
    });
});

document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;

    document.querySelectorAll('.lang-dropdown, .theme-dropdown, .cv-dropdown').forEach((dropdown) => {
        if (!(dropdown instanceof HTMLElement)) return;
        if (!dropdown.contains(target)) {
            dropdown.removeAttribute('open');
        }
    });
});

const navToggle = document.getElementById('nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (navToggle && navLinksContainer) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinksContainer.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}



// Active navigation link on scroll
function updateActiveNav() {
    const sections = ['home', 'skills', 'experience', 'highlights'];
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const element = document.getElementById(section);
        const navLink = document.getElementById(`nav-${section}`);

        if (element && navLink) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('resize', updateSkillsCarouselHeight);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        if (skillsCarouselInstance) skillsCarouselInstance.prevSlide();
    }
    if (e.key === 'ArrowRight') {
        if (skillsCarouselInstance) skillsCarouselInstance.nextSlide();
    }
});

// Initialize
window.onload = () => {
    const savedLang = localStorage.getItem('lang') || 'pt-BR';
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    updateLangLabel(savedLang);
    renderPage(savedLang);
    updateActiveNav();
    updateSkillsCarouselHeight();
};
