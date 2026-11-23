import Image from 'next/image';
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
              <a className="text-link" href="/assets/Nikhil_Khambhayta_Resume.pdf" download="Nikhil_Khambhayta_Resume.pdf">Download resume</a>
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
                    <ExternalLink className="project-link" href={project.link} ariaLabel={`Visit live website for ${project.title}`}>
                      Visit live website
                    </ExternalLink>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="source-note project-note">
            Explore more projects and code samples on my GitHub.{' '}
            <ExternalLink href="https://github.com/nikhil0667" ariaLabel="View Nikhil Khambhayta GitHub profile">View my GitHub profile</ExternalLink>.
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
                      <Image src={exp.image} width={60} height={60} alt={`${exp.company} reference`} />
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
                  <Image src={cert.image} alt={cert.title} width={240} height={170} sizes="240px" />
                </a>
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
          <Heading number="07" label="RÉSUMÉ & CV" title="Curriculum Vitae & Career Highlights.">
            Comprehensive overview of engineering experience, production architectures, verified credentials, and technical capabilities.
          </Heading>

          <div className="resume-card-container">
            {/* Left Column: ATS Executive Summary Card */}
            <div className="resume-preview-card">
              <div className="resume-card-header">
                <div>
                  <span className="resume-doc-tag">ATS-OPTIMIZED · PDF RESUME</span>
                  <h3>Nikhil Khambhayta</h3>
                  <p className="resume-doc-subtitle">Mobile Application Developer &amp; Software Engineer</p>
                </div>
                <div className="resume-status-badge">
                  <span className="status-dot-pulse" />
                  <span>Available for Roles</span>
                </div>
              </div>

              <div className="resume-summary-grid">
                <div className="resume-summary-col">
                  <h4>Core Engineering</h4>
                  <ul>
                    <li>Mobile Development (Flutter, Dart, Android SDK)</li>
                    <li>Backend Systems (Java, Spring Boot, REST APIs)</li>
                    <li>Full-Stack Web (Next.js 16, React 19, TypeScript)</li>
                    <li>Relational Databases (MySQL, PostgreSQL, JPA)</li>
                  </ul>
                </div>
                <div className="resume-summary-col">
                  <h4>Experience &amp; Education</h4>
                  <ul>
                    <li><strong>Shivaay Soft:</strong> Mobile App Developer (Present)</li>
                    <li><strong>Hyperlink Infosystem:</strong> Software Engineer Intern</li>
                    <li><strong>DeepVecto:</strong> Mobile App Developer</li>
                    <li><strong>Education:</strong> MCA (8.5 CPI, GTU) &amp; BCA (Distinction)</li>
                  </ul>
                </div>
              </div>

              <div className="resume-highlights-row">
                <div className="highlight-pill">
                  <strong>2+ Years</strong>
                  <span>Engineering Exp</span>
                </div>
                <div className="highlight-pill">
                  <strong>8.5 CPI</strong>
                  <span>MCA Grade</span>
                </div>
                <div className="highlight-pill">
                  <strong>7 Verified</strong>
                  <span>Certifications</span>
                </div>
                <div className="highlight-pill">
                  <strong>Surat, IN</strong>
                  <span>Location</span>
                </div>
              </div>
            </div>

            {/* Right Column: Download & Action Hub */}
            <div className="resume-actions-card">
              <div className="resume-action-box">
                <div className="resume-icon-circle">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h4>Download Curriculum Vitae</h4>
                <p>Get a clean, ATS-compliant one-page PDF outlining complete work history, verified skills, and technical accomplishments.</p>

                <div className="resume-cta-buttons">
                  <a
                    className="button resume-download-btn"
                    href="/assets/Nikhil_Khambhayta_Resume.pdf"
                    download="Nikhil_Khambhayta_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download CV (PDF)</span>
                  </a>

                  <a
                    className="button-secondary"
                    href="https://www.linkedin.com/in/nikhil-khambhayta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn (10,200+ Network)</span>
                  </a>

                  <a
                    className="inline-email-link"
                    href="mailto:nikhilkhambhayta@gmail.com?subject=Resume%20Inquiry%20-%20Nikhil%20Khambhayta&body=Hi%20Nikhil,%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20opportunity%20or%20request%20your%20latest%20customized%20resume.%0A%0ABest%20regards,"
                  >
                    ✉️ Request tailored copy via email
                  </a>
                </div>
              </div>
            </div>
          </div>
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
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="form-honeypot" />
            <input type="hidden" name="_subject" value="Portfolio inquiry for Nikhil Khambhayta" />
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
