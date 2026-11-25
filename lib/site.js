export const SITE_URL = 'https://nikhilkhambhayta.dev';
export const SITE_NAME = 'Nikhil Khambhayta';
export const HOME_DESCRIPTION =
  'Portfolio of Nikhil Khambhayta, Software Engineer specializing in Flutter, Java, Spring Boot and building modern mobile, backend and web applications.';
export const EMAIL = 'nikhilkhambhayta@gmail.com';

export const SOCIAL_PROFILES = {
  github: 'https://github.com/nikhil0667',
  linkedin: 'https://www.linkedin.com/in/nikhil-khambhayta/',
  x: 'https://x.com/NKhambhayt35917',
};

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PROFILE_PAGE_ID = `${SITE_URL}/#profilepage`;

export function getHomeStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: HOME_DESCRIPTION,
        inLanguage: 'en-US',
        publisher: {
          '@id': PERSON_ID,
        },
      },
      {
        '@type': 'ProfilePage',
        '@id': PROFILE_PAGE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: HOME_DESCRIPTION,
        isPartOf: {
          '@id': WEBSITE_ID,
        },
        mainEntity: {
          '@id': PERSON_ID,
        },
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        mainEntityOfPage: {
          '@id': PROFILE_PAGE_ID,
        },
        image: `${SITE_URL}/assets/photo.jpg`,
        jobTitle: 'Software Engineer',
        description: HOME_DESCRIPTION,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Surat',
          addressRegion: 'Gujarat',
          addressCountry: 'India',
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Shivaay Soft',
          description: 'Product-based software company',
        },
        alumniOf: [
          {
            '@type': 'EducationalOrganization',
            name: 'LDRP Institute of Technology & Research, Gujarat Technological University',
            department: 'Information Technology',
          },
          {
            '@type': 'EducationalOrganization',
            name: 'Udhna Citizen Commerce College & SPB College of Business Administration',
            department: 'Information Technology',
          },
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            name: 'Master of Computer Applications (MCA)',
            recognizedBy: {
              '@type': 'EducationalOrganization',
              name: 'Gujarat Technological University',
            },
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            name: 'Bachelor of Computer Applications (BCA)',
            description: 'First Class with Distinction',
          },
        ],
        sameAs: [
          SOCIAL_PROFILES.linkedin,
          SOCIAL_PROFILES.github,
          SOCIAL_PROFILES.x,
        ],
        knowsAbout: [
          'Flutter',
          'Dart',
          'Java',
          'Spring Boot',
          'REST APIs',
          'MySQL',
          'Firebase',
          'Next.js',
          'React',
          'TypeScript',
          'Android SDK',
          'SQL',
          'JWT Authentication',
          'Clean Architecture',
          'Data Structures & Algorithms (DSA)',
          'Technical SEO',
        ],
      },
    ],
  };
}

export function getProjectStructuredData(project) {
  const projectUrl = `${SITE_URL}/projects/${project.slug}`;
  const structuredImage = project.image.endsWith('.svg')
    ? `${projectUrl}/opengraph-image`
    : `${SITE_URL}${project.image}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: `${SITE_URL}/#projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `${projectUrl}#case-study`,
        url: projectUrl,
        name: project.seoTitle || project.title,
        headline: project.title,
        description: project.seoDescription || project.description,
        image: structuredImage,
        keywords: project.tech.join(', '),
        author: {
          '@type': 'Person',
          '@id': PERSON_ID,
          name: SITE_NAME,
          url: `${SITE_URL}/`,
        },
        isPartOf: {
          '@type': 'WebSite',
          '@id': WEBSITE_ID,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
        },
      },
    ],
  };
}
