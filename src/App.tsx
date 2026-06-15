import { useState } from "react";
import heroImage from "./assets/hero.png";
import "./App.css";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Currículo", href: "#curriculo" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Acadêmicos", href: "#academicos" },
  { label: "Contato", href: "#contato" },
];

const techSkills = {
  Backend: ["Java", "Spring Boot", "REST APIs", "JWT", "Spring Security", "Microsserviços"],
  Frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vite"],
  Ferramentas: ["Git", "GitHub", "Docker", "Docker Compose", "MySQL", "WSL2"],
};

const softSkills = [
  {
    name: "Trabalho em equipe",
    evidence:
      "Entrei na FATEC vindo de outra unidade, sem conhecer a turma, e consegui me entrosar bem nos projetos. Essa adaptação mostra que consigo colaborar mesmo em equipes novas.",
  },
  {
    name: "Organização",
    evidence:
      "Conciliar faculdade, projetos, casamento e a rotina com dois filhos exige planejamento. Aprendi a administrar meu tempo para manter entregas, estudos e responsabilidades pessoais em ordem.",
  },
  {
    name: "Comunicação",
    evidence:
      "Em momentos importantes, soube explicar minha situação, defender minha permanência e dialogar com clareza para buscar uma solução justa.",
  },
  {
    name: "Resolução de problemas",
    evidence:
      "Quando surgiram dificuldades acadêmicas e pessoais, precisei analisar o cenário, me posicionar e encontrar caminhos para continuar evoluindo no curso.",
  },
  {
    name: "Responsabilidade",
    evidence:
      "A rotina familiar e acadêmica reforça meu compromisso com prazos, presença nos projetos e continuidade dos estudos, mesmo com muitas demandas acontecendo ao mesmo tempo.",
  },
  {
    name: "Adaptabilidade",
    evidence:
      "A mudança de FATEC e a entrada em uma turma nova exigiram flexibilidade para aprender a dinâmica da equipe, criar vínculos e contribuir sem depender de um ambiente conhecido.",
  },
];

const projects = [
  {
    name: "DevsAcademy - Scrum",
    description:
      "Projeto do 1o semestre desenvolvido para ensinar metodologia Scrum por meio de um portal com conteúdos, autenticação, questões e emissão de certificado.",
    problem:
      "Criar uma experiência de aprendizagem clara para usuários que precisam entender os conceitos de Scrum de forma guiada.",
    solution:
      "Desenvolvimento de um portal com navegação por tópicos, cadastro, login, questões de verdadeiro ou falso e certificado de conclusão.",
    technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Scrum"],
    challenges:
      "Organizar os requisitos funcionais e não funcionais, estruturar o conteúdo do curso e aplicar metodologia ágil durante o desenvolvimento.",
    results:
      "Produto acadêmico voltado ao aprendizado de Scrum, com fluxo de avaliação e certificação para o usuário aprovado.",
    link: "https://github.com/DevsScrumAcademy/1-DSM---DevsAcademy",
  },
  {
    name: "BD Limnológico - ErrorSquad",
    description:
      "Sistema web do 2o semestre para consulta, organização e visualização de dados limnológicos do INPE.",
    problem:
      "Os dados limnológicos estavam desorganizados, poluídos e difíceis de consultar e visualizar graficamente.",
    solution:
      "Criação de uma plataforma para filtrar dados, visualizar tabelas, selecionar parâmetros e gerar gráficos para apoiar a análise.",
    technologies: ["React", "Backend", "Banco de Dados", "ABP", "Visualização de Dados"],
    challenges:
      "Transformar dados complexos em consultas legíveis, criar filtros úteis e integrar interface, backend e banco de dados.",
    results:
      "Projeto concluído em sprints, com foco em organização de informações, usabilidade e disseminação dos dados limnológicos.",
    link: "https://github.com/ErrorSquad-ABP/ABP2-BDLimnologico",
  },
  {
    name: "Chronos - Apontamento de Horas",
    description:
      "API do 3o semestre para controle centralizado de apontamento de horas, projetos, clientes, recursos e relatórios.",
    problem:
      "Substituir registros dispersos em planilhas, mensagens e anotações, dando mais visibilidade ao esforço e aos custos dos projetos.",
    solution:
      "Plataforma para registrar horas por projeto, item e atividade, além de apoiar gestores e financeiro com dashboards e relatórios.",
    technologies: ["Java", "Spring Boot", "React", "Docker", "API REST"],
    challenges:
      "Modelar permissões, estruturar tarefas por hierarquia, garantir responsividade e manter rastreabilidade das alterações.",
    results:
      "Sistema em desenvolvimento com foco em produtividade, transparência, relatórios e controle operacional de equipes.",
    link: "https://github.com/Team-Chronos/API-DSM-3SEMESTRE-2026",
  },
];

const certificates = [
  {
    title: "CPSA-F - Certified Professional for Software Architecture Foundation",
    institution: "iSAQB",
    year: "2026",
    note: "Certificação em andamento, com prova agendada para 22 de junho de 2026. Foco em fundamentos de arquitetura de software, documentação, qualidade e comunicação técnica.",
  },
  {
    title: "Cursos complementares",
    institution: "Estudos contínuos em desenvolvimento de software",
    year: "Em andamento",
    note: "Espaço reservado para registrar novos certificados e formações relevantes conforme forem concluídos.",
  },
];

const events = [
  "Semanas de tecnologia e atividades promovidas pela FATEC",
  "Workshops, palestras e estudos complementares em desenvolvimento web",
  "Projetos acadêmicos em equipe com práticas próximas ao mercado",
];

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <header className="section-header">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </header>
  );
}

function Portfolio() {
  const [activeSkill, setActiveSkill] = useState<keyof typeof techSkills>("Backend");

  return (
    <main>
      <nav className="topbar" aria-label="Navegacao principal">
        <a className="brand" href="#inicio">
          Aline Raquel
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <span className="kicker">Portfólio acadêmico digital</span>
          <h1>Aline Raquel Camargo de Oliveira</h1>
          <p className="hero-role">
            Estudante de Desenvolvimento de Software Multiplataforma na FATEC,
            com foco em backend, APIs REST, Java, Spring Boot e aplicações web.
          </p>
          <p>
            Meu objetivo é evoluir como desenvolvedora, criar soluções bem
            estruturadas e transformar projetos acadêmicos em uma vitrine
            profissional clara, organizada e atualizável.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#projetos">
              Ver projetos
            </a>
            <a className="secondary-button" href="https://github.com/AlineRaquelC" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="Resumo do perfil de Aline">
          <img src={heroImage} alt="" />
          <div>
            <strong>Perfil</strong>
            <span>Backend em formação</span>
          </div>
          <div>
            <strong>Curso</strong>
            <span>DSM - 3o semestre</span>
          </div>
          <div>
            <strong>Interesses</strong>
            <span>APIs, segurança, microsserviços e React</span>
          </div>
        </div>
      </section>

      <section className="content-section" id="sobre">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Trajetória em construção, com foco em tecnologia aplicada"
          text="Esta seção apresenta minha formação, meus objetivos e as áreas que quero aprofundar ao longo do curso."
        />
        <div className="about-grid">
          <article>
            <h3>Apresentacao pessoal</h3>
            <p>
              Sou Aline Raquel Camargo de Oliveira, estudante de Desenvolvimento de Software
              Multiplataforma na FATEC. Tenho interesse em desenvolvimento
              backend, integração de sistemas, segurança de APIs e construção de
              interfaces modernas para apresentar soluções de forma acessível.
            </p>
          </article>
          <article>
            <h3>Objetivo profissional</h3>
            <p>
              Busco atuar como desenvolvedora, consolidando conhecimentos em
              Java, Spring Boot, bancos de dados e tecnologias web. Meu foco é
              criar projetos funcionais, bem documentados e com impacto real no
              aprendizado e na prática profissional.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section split-section" id="curriculo">
        <div>
          <SectionHeader
            eyebrow="Curriculo"
            title="Formação, cursos e competências"
            text="Resumo estruturado para facilitar a leitura acadêmica e profissional."
          />
        </div>
        <div className="timeline">
          <article>
            <span>Formação atual</span>
            <h3>Desenvolvimento de Software Multiplataforma</h3>
            <p>FATEC - 3o semestre. Estudos voltados a desenvolvimento web, backend, banco de dados e projetos integradores.</p>
          </article>
          <article>
            <span>Cursos complementares</span>
            <h3>Estudos contínuos em desenvolvimento</h3>
            <p>Prática com Java, Spring Boot, React, TypeScript, Docker, Git e boas práticas de organização de projetos.</p>
          </article>
          <article>
            <span>Area de interesse</span>
            <h3>Backend e integração de sistemas</h3>
            <p>APIs REST, autenticação, microsserviços, segurança, bancos de dados e interfaces para consumo de dados.</p>
          </article>
        </div>
      </section>

      <section className="content-section" id="habilidades">
        <SectionHeader
          eyebrow="Habilidades"
          title="Competências técnicas e comportamentais"
          text="Organização separada em hard skills e soft skills, como solicitado no roteiro."
        />
        <div className="skills-layout">
          <div className="skill-panel">
            <div className="tabs" role="tablist" aria-label="Categorias de habilidades técnicas">
              {(Object.keys(techSkills) as Array<keyof typeof techSkills>).map((category) => (
                <button
                  className={activeSkill === category ? "active" : ""}
                  key={category}
                  onClick={() => setActiveSkill(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="skill-tags">
              {techSkills[activeSkill].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-panel">
            <h3>Soft skills</h3>
            <div className="soft-skill-list">
              {softSkills.map((skill) => (
                <article key={skill.name}>
                  <strong>{skill.name}</strong>
                  <p>{skill.evidence}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="projetos">
        <SectionHeader
          eyebrow="Projetos"
          title="Principais projetos acadêmicos"
          text="Cada projeto foi organizado com problema, solução, tecnologias, desafios e resultados."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-header">
                <h3>{project.name}</h3>
                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Abrir repositório de ${project.name}`}>
                  Repositório
                </a>
              </div>
              <p>{project.description}</p>
              <dl>
                <div>
                  <dt>Problema</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Solução</dt>
                  <dd>{project.solution}</dd>
                </div>
                <div>
                  <dt>Desafios técnicos</dt>
                  <dd>{project.challenges}</dd>
                </div>
                <div>
                  <dt>Resultados</dt>
                  <dd>{project.results}</dd>
                </div>
              </dl>
              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section academic-section" id="academicos">
        <SectionHeader
          eyebrow="Documentos acadêmicos"
          title="Trabalhos, relatórios e produções"
          text="Área preparada para receber TCC/TG, artigos, relatórios técnicos e projetos de pesquisa."
        />
        <div className="note-card">
          <h3>Produção acadêmica</h3>
          <p>
           Em progresso...
          </p>
        </div>
      </section>

      <section className="content-section two-columns">
        <div id="certificados">
          <SectionHeader eyebrow="Certificados" title="Cursos e certificações" />
          <div className="compact-list">
            {certificates.map((certificate) => (
              <article key={certificate.title}>
                <span>{certificate.year}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.institution}</p>
                <small>{certificate.note}</small>
              </article>
            ))}
          </div>
        </div>

        <div id="eventos">
          <SectionHeader eyebrow="Eventos" title="Atividades extracurriculares" />
          <ul className="event-list">
            {events.map((event) => (
              <li key={event}>{event}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <SectionHeader
          eyebrow="Contato"
          title="Vamos conversar?"
          text="Informações profissionais para contato e acompanhamento dos projetos."
        />
        <div className="contact-links">
          <a href="https://github.com/AlineRaquelC" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aline-oliveira-60ab6265/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:aline@exemplo.com">aline@exemplo.com</a>
        </div>
      </section>

      <footer>
        <span>Portfólio acadêmico digital - Aline Raquel Camargo de Oliveira - FATEC DSM 2026</span>
      </footer>
    </main>
  );
}

export default Portfolio;
