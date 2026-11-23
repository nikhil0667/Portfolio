import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/portfolio';
import './project.css';

const caseStudyProjects = projects.filter(project => project.slug);

function getProject(slug) {
  return caseStudyProjects.find(project => project.slug === slug);
}

export function generateStaticParams() {
  return caseStudyProjects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const canonical = `/projects/${project.slug}`;

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: project.seoTitle,
      description: project.seoDescription,
      url: canonical,
      images: [{ url: project.image, alt: project.imageAlt || project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seoTitle,
      description: project.seoDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="project-detail-header">
        <a className="brand" href="/" aria-label="Nikhil Khambhayta home">nk<span>.</span></a>
        <nav aria-label="Project navigation">
          <a href="/#projects">All projects</a>
          <a href="/#contact" className="nav-contact">Contact</a>
        </nav>
      </header>

      <main id="main" className="project-detail-main">
        <nav className="project-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">/</span><a href="/#projects">Projects</a><span aria-hidden="true">/</span><span>{project.title}</span>
        </nav>

        <article className="project-case-study">
          <p className="eyebrow">
            {project.category}{project.context ? ` · ${project.context}` : ''}{project.status ? ` · ${project.status}` : ''}
          </p>
          <h1>{project.title}</h1>
          <p className="project-case-summary">{project.description}</p>
          <div className="tags" aria-label="Technologies used">
            {project.tech.map(technology => <span key={technology}>{technology}</span>)}
          </div>

          <Image
            className="project-case-image"
            src={project.image}
            alt={project.imageAlt || `Illustration for ${project.title}`}
            width={project.imageWidth || 1200}
            height={project.imageHeight || 800}
            sizes="(max-width: 800px) 100vw, 900px"
            priority
          />

          {project.architecture && (
            <section className="project-case-section">
              <h2>Architecture</h2>
              <p>{project.architecture}</p>
            </section>
          )}

          <section className="project-case-section">
            <h2>Implementation</h2>
            <ul>
              {project.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}
            </ul>
          </section>

          <div className="project-case-actions">
            {project.link && (
              <a className="button" href={project.link} target="_blank" rel="noopener noreferrer">
                Visit live project <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
            <a className="text-link" href="/#projects">Back to all projects</a>
          </div>
        </article>
      </main>

      <footer className="project-detail-footer">
        <a className="brand" href="/">nk<span>.</span></a>
        <a href="/#contact">Contact Nikhil</a>
      </footer>
    </>
  );
}
