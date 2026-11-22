import { projects, certifications, experiences, education, skillGroups, assessments } from '../data/portfolio';
import ShareButton from './ShareButton';

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

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
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
            <p className="eyebrow">NIKHIL KHAMBHAYTA · SOFTWARE ENGINEER</p>
            <h1>Mobile applications.<br /><span>Scalable backends.</span></h1>
            <p className="intro">
              I build production-ready mobile apps with Flutter & Dart, scalable backend systems with Java & Spring Boot, and high-performance modern web platforms.
            </p>
            <p className="hero-context">
              Mobile Application Developer at <strong>Shivaay Soft</strong>. Prior experience at <strong>Hyperlink Infosystem</strong> and <strong>DeepVecto</strong>. MCA graduate (8.5 CPI) from <strong>LDRP-ITR, Gujarat Technological University</strong>.
            </p>
            <div className="actions">
              <a className="button" href="#projects">Explore my work</a>
              <a className="text-link" href="mailto:nikhilkhambhayta@gmail.com">Get in touch</a>
              <ShareButton />
            </div>
            <div className="hero-tech">
              <span>Flutter</span>
              <span>Dart</span>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>REST APIs</span>
              <span>Next.js</span>
              <span>SQL</span>
              <span>Firebase</span>
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
                  {'  '}<span className="code-keyword">final</span> String role = <span className="code-string">&apos;Mobile App Developer&apos;</span>;{'\n'}
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
                  {'  '}<span className="code-keyword">final</span> status = <span className="code-status">&apos;🟢 Open to High-Impact Roles&apos;</span>;{'\n'}
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
                <strong>21+</strong>
                <small>Languages (i18n)</small>
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
            <ExternalLink href="https://github.com/nikhil0667">GitHub</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/nikhil-khambhayta">LinkedIn</ExternalLink>
            <a href="#resume">Résumé</a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section about">
          <div>
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>End-to-end flow<br /><span>from app to database.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Nikhil Khambhayta, a Software Engineer focused on building production-ready mobile, backend, and web applications. Currently, I work as a <strong>Mobile Application Developer at Shivaay Soft</strong>, where I develop production mobile apps using Flutter & Dart, integrate REST APIs, and resolve complex production challenges.
            </p>
            <p>
              I approach engineering problems across the complete application flow:
              <br />
              <strong style={{ color: 'var(--blue)' }}>Mobile App → API → Backend → Database → Response</strong>
            </p>
            <p>
              Rather than only patching visible symptoms, I focus on identifying root causes by analyzing API behavior, logs, permissions, authentication (JWT), backend business logic, and database transactions.
            </p>
            <p>
              I hold an <strong>MCA (Master of Computer Applications) with an 8.5 CPI</strong> from LDRP Institute of Technology & Research (GTU) and a <strong>BCA with First Class with Distinction</strong>. My previous engineering experience includes a 7-month internship at <strong>Hyperlink Infosystem</strong> and over a year at <strong>DeepVecto</strong>.
            </p>
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
            {projects.map((project, index) => (
              <article className="project-row" key={project.title}>
                <div className="project-visual">
                  <img
                    src={project.image}
                    alt={`Illustration for ${project.title}`}
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>
                      {index === 0
                        ? 'PRODUCTION WEB PLATFORM'
                        : index === 1
                        ? 'FULL-STACK ENTERPRISE SYSTEM'
                        : index === 2
                        ? 'CROSS-PLATFORM MOBILE'
                        : 'ANDROID APPLICATION'}
                    </span>
                    <span className="project-status">{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags" aria-label="Technologies">
                    {project.tech.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <details className="project-details">
                    <summary>Contribution & implementation</summary>
                    <ul>
                      {project.contributions.map(detail => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </details>
                  {project.link && (
                    <ExternalLink className="project-link" href={project.link}>
                      Visit live website
                    </ExternalLink>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="source-note project-note">
            Explore more projects and code samples on my GitHub.{' '}
            <ExternalLink href="https://github.com/nikhil0667">View my GitHub profile</ExternalLink>.
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
                      <img src={exp.image} width="60" height="60" alt={`${exp.company} reference`} loading="lazy" />
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
                    <ExternalLink className="project-link" href={exp.referenceLink}>
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
          <Heading number="05" label="CERTIFICATIONS" title="Verified Licenses & Certifications." />
          <div className="certificate-list">
            {certifications.map(cert => (
              <article key={cert.id} className="certificate-row">
                <a
                  className="certificate-image"
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open certificate for ${cert.title}`}
                >
                  <img src={cert.image} alt={cert.title} width="240" height="170" loading="lazy" />
                </a>
                <div>
                  <p className="eyebrow">{cert.date} {cert.credentialId ? `· ID: ${cert.credentialId}` : ''}</p>
                  <h3>{cert.title}</h3>
                  <p className="company">{cert.issuer}</p>
                  <p>{cert.description}</p>
                  <div className="certificate-links">
                    {cert.link && (
                      <ExternalLink className="project-link" href={cert.link}>
                        View credential
                      </ExternalLink>
                    )}
                    {cert.links?.map(link => (
                      <ExternalLink key={link.url} className="project-link" href={link.url}>
                        {link.label}
                      </ExternalLink>
                    ))}
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
            {skillGroups.map(([title, description, skills], index) => (
              <article key={title} className="skill-group">
                <p className="eyebrow">0{index + 1}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                  {skills.map(skill => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <details className="assessment">
            <summary>Core Competency Assessments</summary>
            <p>Self-assessed proficiency across primary engineering domains and production workflows.</p>
            <div className="assessment-grid">
              {assessments.map(([name, value]) => (
                <div key={name}>
                  <span>{name}</span>
                  <span>{value}%</span>
                </div>
              ))}
            </div>
          </details>
        </section>

        {/* RÉSUMÉ SECTION */}
        <section id="resume" className="section resume-section">
          <Heading number="07" label="RÉSUMÉ" title="Professional Background & CV." />
          <p>
            A full curriculum vitae detailing professional achievements at Shivaay Soft, Hyperlink Infosystem, and DeepVecto, academic credentials, and project portfolios is available upon request.{' '}
            <a className="inline-link" href="mailto:nikhilkhambhayta@gmail.com?subject=Resume%20Request%20-%20Nikhil%20Khambhayta">
              Request my résumé via email
            </a>.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact section">
          <div>
            <p className="eyebrow">08 / LET’S CONNECT</p>
            <h2>Have something<br />in <span>mind?</span></h2>
            <p>For a project, full-time engineering opportunity, or a conversation about software architectures.</p>
            <a className="email" href="mailto:nikhilkhambhayta@gmail.com">
              nikhilkhambhayta@gmail.com
            </a>
            <p className="contact-location">Surat, Gujarat, India</p>
            <div className="contact-links">
              <ExternalLink href="https://github.com/nikhil0667">GitHub</ExternalLink>
              <ExternalLink href="https://www.linkedin.com/in/nikhil-khambhayta">LinkedIn</ExternalLink>
              <ExternalLink href="https://x.com/NKhambhayt35917">X / Twitter</ExternalLink>
            </div>
          </div>
          <form className="contact-form" action="https://formspree.io/f/mvgrkgay" method="POST">
            <h3>Send a message</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" required placeholder="Your name" maxLength={200} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="_replyto" type="email" autoComplete="email" required placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project or opportunity"
                maxLength={10000}
              />
            </div>
            <button className="button" type="submit">Send message</button>
            <p className="form-note">This form uses Formspree. You’ll receive confirmation after submitting.</p>
          </form>
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
