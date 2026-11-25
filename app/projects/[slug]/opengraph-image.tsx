import { ImageResponse } from 'next/og';
import { projects } from '../../../data/portfolio';
import { SITE_NAME } from '../../../lib/site';

export const alt = 'Project case study by Nikhil Khambhayta';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const caseStudyProjects = projects.filter((project) => Boolean(project.slug));

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = caseStudyProjects.find((item) => item.slug === slug);

  const eyebrow = project
    ? [project.category, project.context].filter(Boolean).join(' · ').toUpperCase()
    : 'PROJECT CASE STUDY';
  const title = project?.title ?? 'Software Engineering Case Study';
  const summary = project?.seoDescription ?? project?.description ?? '';
  const techLine = project?.tech?.slice(0, 6).join(' · ') ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          color: '#f2f4f8',
          background: 'linear-gradient(135deg, #101215 0%, #1b2533 100%)',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#7aabff', fontSize: 22, letterSpacing: 4 }}>
            {eyebrow}
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: title.length > 42 ? 48 : 58,
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
          {summary ? (
            <div
              style={{
                marginTop: 22,
                color: '#b7c1d0',
                fontSize: 26,
                lineHeight: 1.4,
              }}
            >
              {summary}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(183, 193, 208, 0.25)',
            paddingTop: 24,
          }}
        >
          <div style={{ color: '#7aabff', fontSize: 24, fontWeight: 600 }}>
            {techLine}
          </div>
          <div style={{ color: '#f2f4f8', fontSize: 24 }}>
            {`${SITE_NAME} · nikhilkhambhayta.dev`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

