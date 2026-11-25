import Image from 'next/image';
import Link from 'next/link';
import { projects, certifications, experiences, education, skillGroups } from '../data/portfolio';
import { EMAIL, SOCIAL_PROFILES } from '../lib/site';
import ShareButton from './ShareButton';
import ContactForm from './ContactForm';

const featuredProjects = projects.filter(project => project.featured);
const additionalProjects = projects.filter(project => !project.featured);

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Certifications', 'certificates'],
  ['Skills', 'skills'],
  ['Résumé', 'resume'],
  ['Contact', 'contact']
];

function ExternalLink({ href, children, className = '', ariaLabel }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function Heading({ number, label, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{number} / {label}</p>
        <h2>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}

function ProjectRow({ project, index }) {
  return (
    <article className={`project-row${project.featured ? ' featured-project' : ''}`} key={project.title}>
      <div className="project-visual">
        <Image
          src={project.image}
          alt={project.imageAlt || `Illustration for ${project.title}`}
          width={project.imageWidth || 600}
          height={project.imageHeight || 400}
          style={project.imageWidth && project.imageHeight
            ? { aspectRatio: `${project.imageWidth} / ${project.imageHeight}` }
            : undefined}
          sizes="(max-width: 600px) 100vw, (max-width: 1240px) 40vw, 454px"
        />
        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className={project.featureLabel ? 'project-feature-label' : undefined}>
            {project.featureLabel || project.category}
          </span>
          {!project.featureLabel && project.context && project.context !== 'Production' && (
            <span className="project-context">{project.context}</span>
          )}
          {!project.featureLabel && <span className="project-status">{project.status}</span>}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags" aria-label="Technologies">
          {project.tech.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <details className="project-details">
          <summary>Technical contributions</summary>
          {project.architecture && (
            <p className="project-architecture">
              <strong>Architecture:</strong> {project.architecture}
            </p>
          )}
          <ul>
            {project.contributions.map(detail => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </details>
        {project.link && (
          <ExternalLink className="project-link" href={project.link} ariaLabel={`Visit live website for ${project.title}`}>
            Visit live website
          </ExternalLink>
        )}
        {project.slug && (
          <Link className="project-link" href={`/projects/${project.slug}`}>
            Read project case study
          </Link>
        )}
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Nikhil Khambhayta home">nk<span>.</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation
            .filter(([label]) => ['About', 'Projects', 'Experience', 'Education', 'Skills', 'Contact'].includes(label))
            .map(([label, id]) => (
              <a key={id} href={`#${id}`} className={id === 'contact' ? 'nav-contact' : ''}>
                {label === 'Contact' ? 'Let’s talk' : label}
              </a>
            ))}
        </nav>
        <details className="all-navigation">
          <summary>All sections</summary>
          <nav aria-label="All sections">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>
        </details>
      </header>

      <main id="main">
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE ENGINEER PORTFOLIO · FLUTTER · JAVA · SPRING BOOT</p>
            <h1 className="hero-headline">
              Nikhil Khambhayta.<br />
              <span>Software Engineer.</span>
            </h1>
            <p className="intro">
              Software Engineer and Flutter Developer specializing in cross-platform mobile applications, Java and Spring Boot backend systems, REST APIs, MySQL, Firebase, and Next.js.
            </p>
            <p className="hero-context">
              Currently working as a <strong>Mobile Application Developer at Shivaay Soft</strong>.
            </p>
            <div className="actions">
              <a className="button" href="#projects">Explore my work</a>
              <a className="text-link" href="/assets/Nikhil_Khambhayta_Resume.pdf" download="Nikhil_Khambhayta_Resume.pdf">Download resume</a>
              <a className="text-link" href={`mailto:${EMAIL}`}>Get in touch</a>
              <ShareButton />
            </div>
            <div className="hero-tech">
              <span>Flutter</span>
              <span>Dart</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST APIs</span>
              <span>MySQL</span>
              <span>Firebase</span>
              <span>Next.js</span>
            </div>
          </div>
          <div className="hero-console-card">
            <div className="console-header">
              <div className="console-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="console-title">nikhil_khambhayta.dart</span>
              <span className="console-badge">Surat, IN</span>
            </div>
            <div className="console-body">
              <pre>
                <code>
                  <span className="code-keyword">class</span> <span className="code-class">SoftwareEngineer</span> {'{\n'}
                  {'  '}<span className="code-keyword">final</span> String name = <span className="code-string">&apos;Nikhil Khambhayta&apos;</span>;{'\n'}
                  {'  '}<span className="code-keyword">final</span> String role = <span className="code-string">&apos;Software Engineer&apos;</span>;{'\n'}
                  {'  '}<span className="code-keyword">final</span> String company = <span className="code-string">&apos;Shivaay Soft&apos;</span>;{'\n'}
                  {'  '}<span className="code-keyword">final</span> String education = <span className="code-string">&apos;MCA (8.5 CPI) · GTU&apos;</span>;{'\n'}
                  {'\n'}
                  {'  '}<span className="code-comment">// End-to-End Application Flow:</span>{'\n'}
                  {'  '}<span className="code-keyword">final</span> architecture = [
                  {'\n    '}<span className="code-string">&apos;Mobile App (Flutter)&apos;</span>,
                  {'\n    '}<span className="code-string">&apos;RESTful API&apos;</span>,
                  {'\n    '}<span className="code-string">&apos;Backend (Spring Boot)&apos;</span>,
                  {'\n    '}<span className="code-string">&apos;Database (MySQL)&apos;</span>,
                  {'\n  '}];{'\n'}
                  {'\n'}
                  {'  '}<span className="code-keyword">final</span> stack = <span className="code-status">&apos;Flutter · Java · Spring Boot · Next.js&apos;</span>;{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
            <div className="console-footer">
              <div className="console-stat">
                <strong>3+</strong>
                <small>Companies</small>
              </div>
              <div className="console-stat">
                <strong>4</strong>
                <small>Skill domains</small>
              </div>
              <div className="console-stat">
                <strong>7</strong>
                <small>Certifications</small>
              </div>
              <div className="console-stat">
                <strong>8.5</strong>
                <small>CPI Grade</small>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>SURAT, GUJARAT, INDIA</span>
            <ExternalLink href={SOCIAL_PROFILES.github}>GitHub</ExternalLink>
            <ExternalLink href={SOCIAL_PROFILES.linkedin}>LinkedIn</ExternalLink>
            <a href="#resume">Résumé</a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section about">
          <div>
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Mobile apps.<br /><span>Backend thinking.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Nikhil Khambhayta, a Software Engineer, Flutter Developer, and Java Spring Boot Developer. At <strong>Shivaay Soft</strong>, I build and maintain mobile features, integrate REST APIs, and troubleshoot production issues across the application stack.
            </p>
            <p>
              I approach problems end-to-end—from mobile UI and API integration to backend logic, authentication, and database behavior—focusing on root causes rather than surface-level fixes.
            </p>
            <ol className="architecture-flow" aria-label="Application engineering flow">
              <li><strong>Mobile app</strong><span>Flutter · Dart</span></li>
              <li><strong>REST API</strong><span>Integration · Auth</span></li>
              <li><strong>Backend</strong><span>Java · Spring Boot</span></li>
              <li><strong>Database</strong><span>MySQL · JPA</span></li>
            </ol>
            <div className="skill-groups">
              <div>
                <h3>Production Mobile Engineering</h3>
                <p>Flutter, Dart, Provider state management, Firebase, clean architecture, and responsive UI.</p>
              </div>
              <div>
                <h3>Backend Architecture & APIs</h3>
                <p>Java, Spring Boot, Spring Data JPA, RESTful API design, JWT authentication, and MySQL.</p>
              </div>
              <div>
                <h3>Modern Web & Full-Stack</h3>
                <p>Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, i18n localization, and technical SEO.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <span id="work" className="anchor-alias" />
          <Heading number="02" label="ENGINEERING WORK" title="Built around real problems.">
            Production web platforms, enterprise systems, and mobile applications with full architectural details.
          </Heading>
          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <ProjectRow project={project} index={index} key={project.title} />
            ))}
          </div>
          {additionalProjects.length > 0 && (
            <details className="more-projects">
              <summary>More projects <span>{additionalProjects.length} projects</span></summary>
              <div className="project-list">
                {additionalProjects.map((project, index) => (
                  <ProjectRow project={project} index={featuredProjects.length + index} key={project.title} />
                ))}
              </div>
            </details>
          )}
          <p className="source-note project-note">
            Explore more projects and code samples on my GitHub.{' '}
            <ExternalLink href={SOCIAL_PROFILES.github} ariaLabel="View Nikhil Khambhayta GitHub profile">View my GitHub profile</ExternalLink>.
          </p>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <Heading number="03" label="EXPERIENCE" title="Hands-on engineering." />
          <div className="timeline-container">
            {experiences.map(exp => (
              <article className="experience timeline-entry" key={exp.company}>
                <div>
                  <p className="date">{exp.duration}</p>
                  <p className="date">{exp.employmentType}</p>
                </div>
                <div>
                  <div className="experience-company">
                    {exp.image ? (
                      <Image src={exp.image} width={60} height={60} alt={`${exp.company} — ${exp.role} reference`} />
                    ) : (
                      <div className="company-icon-badge" aria-hidden="true">{exp.badge || 'EXP'}</div>
                    )}
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="company">
                        {exp.company} {exp.companyType ? `(${exp.companyType})` : ''} · {exp.location}
                      </p>
                    </div>
                  </div>
                  <p>{exp.description}</p>
                  <ul className="contribution-list">
                    {exp.contributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                  {exp.referenceLink && (
                    <ExternalLink className="project-link" href={exp.referenceLink} ariaLabel={`View experience reference for ${exp.role} at ${exp.company}`}>
                      View experience certificate
                    </ExternalLink>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="learning-note">
            <p className="eyebrow">CONTINUOUS EVOLUTION</p>
            <h3>Backend Architecture & Algorithmic Depth</h3>
            <p>
              Actively expanding expertise in advanced Java Spring Boot microservices, high-concurrency systems, database query profiling, and pattern-based Data Structures & Algorithms.
            </p>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section education-section">
          <Heading number="04" label="EDUCATION" title="Education & Academic Background." />
          <div className="timeline-container">
            {education.map(edu => (
              <article className="experience timeline-entry" key={edu.degree}>
                <div>
                  <p className="date">{edu.period}</p>
                  <p className="date" style={{ color: 'var(--blue)', fontWeight: 600 }}>{edu.grade}</p>
                </div>
                <div>
                  <div className="experience-company">
                    <div className="company-icon-badge education-badge" aria-hidden="true">
                      {edu.badge || 'EDU'}
                    </div>
                    <div>
                      <h3>{edu.degree}</h3>
                      <p className="company">{edu.institution}</p>
                    </div>
                  </div>
                  <p>{edu.description}</p>
                  <ul className="contribution-list">
                    {edu.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certificates" className="section">
          <Heading number="05" label="CERTIFICATIONS" title="Certifications & Courses." />
          <div className="certificate-list">
            {certifications.map(cert => (
              <article key={cert.id} className="certificate-row">
                <div className="certificate-image">
                  <Image src={cert.image} alt={`${cert.issuer} logo — ${cert.title} certificate`} width={240} height={170} sizes="240px" />
                </div>
                <div>
                  <p className="eyebrow">{cert.date} {cert.credentialId ? `· ID: ${cert.credentialId}` : ''}</p>
                  <h3>{cert.title}</h3>
                  <p className="company">{cert.issuer}</p>
                  <p>{cert.description}</p>
                  <div className="certificate-links">
                    {cert.link && (
                      <ExternalLink className="project-link" href={cert.link} ariaLabel={`View credential for ${cert.title} issued by ${cert.issuer}`}>
                        View credential
                      </ExternalLink>
                    )}
                    {cert.links?.map(link => (
                      <ExternalLink key={link.url} className="project-link" href={link.url} ariaLabel={`View ${link.label} for ${cert.title}`}>
                        {link.label}
                      </ExternalLink>
                    ))}
                    {!cert.link && !cert.links?.length && (
                      <span className="certificate-link-status">Credential link unavailable</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <Heading number="06" label="TECHNICAL SKILLS" title="The tools behind the work." />
          <div className="skills-grid">
            {skillGroups.map(([title, description, skills, evidence], index) => (
              <article key={title} className="skill-group">
                <p className="eyebrow">0{index + 1}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                  {skills.map(skill => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                <div className="skill-evidence">
                  <strong>Project evidence</strong>
                  {evidence.map(project => (
                    <Link key={project.slug} href={`/projects/${project.slug}`}>{project.label}</Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* RÉSUMÉ SECTION */}
        <section id="resume" className="section resume-section">
          <Heading number="07" label="RÉSUMÉ" title="Want the concise version?">
            Download my résumé for a focused overview of experience, projects, education, and technical skills.
          </Heading>
          <div className="resume-simple-card">
            <p>Experience, selected projects, education, and technical skills in a single PDF.</p>
            <div className="resume-simple-actions">
              <a className="button" href="/assets/Nikhil_Khambhayta_Resume.pdf" download="Nikhil_Khambhayta_Resume.pdf">
                Download Resume PDF
              </a>
              <ExternalLink className="button-secondary" href={SOCIAL_PROFILES.linkedin}>
                View LinkedIn
              </ExternalLink>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact section">
          <div>
            <p className="eyebrow">08 / LET’S CONNECT</p>
            <h2>Have something<br />in <span>mind?</span></h2>
            <p>For a project, full-time Software Engineer opportunity, or a conversation about mobile and backend architecture.</p>
            <a className="email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            <a className="button contact-email-button" href={`mailto:${EMAIL}`}>
              Email me
            </a>
            <p className="contact-location">Surat, Gujarat, India</p>
            <div className="contact-links">
              <ExternalLink href={SOCIAL_PROFILES.github}>GitHub</ExternalLink>
              <ExternalLink href={SOCIAL_PROFILES.linkedin}>LinkedIn</ExternalLink>
              <ExternalLink href={SOCIAL_PROFILES.x}>X / Twitter</ExternalLink>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer>
        <a className="brand" href="#home" aria-label="Back to Nikhil Khambhayta home">nk<span>.</span></a>
        <p>© 2026 Nikhil Khambhayta. All rights reserved. Surat, Gujarat, India.</p>
        <a href="#home">Back to top</a>
      </footer>
    </>
  );
}
