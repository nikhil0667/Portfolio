import './globals.css'
import './redesign.css'

export const metadata = {
  metadataBase: new URL('https://nikhilkhambhayta.vercel.app'),
  applicationName: 'Nikhil Khambhayta',
  title: {
    default: 'Nikhil Khambhayta | Software Engineer – Flutter, Java & Spring Boot',
    template: '%s | Nikhil Khambhayta',
  },
  description: 'Nikhil Khambhayta is a Software Engineer specializing in Flutter, Java, Spring Boot, backend APIs, and modern web application development for production apps.',
  keywords: 'Nikhil Khambhayta, Software Engineer, Mobile Application Developer, Shivaay Soft, Hyperlink Infosystem, DeepVecto, Flutter Developer, Dart, Java Developer, Spring Boot, REST APIs, Android Developer, Next.js, React, Ved Enterprise, LDRP-ITR, GTU, Surat, Portfolio',
  authors: [{ name: 'Nikhil Khambhayta', url: 'https://nikhilkhambhayta.vercel.app/' }],
  creator: 'Nikhil Khambhayta',
  publisher: 'Nikhil Khambhayta',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=4', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=4', sizes: '32x32' },
    ],
    shortcut: '/favicon.svg?v=4',
    apple: '/apple-touch-icon.png?v=4',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Nikhil Khambhayta',
    title: 'Nikhil Khambhayta | Software Engineer – Flutter, Java & Spring Boot',
    description: 'Nikhil Khambhayta is a Software Engineer specializing in Flutter, Java, Spring Boot, backend APIs, and modern web application development for production apps.',
    url: 'https://nikhilkhambhayta.vercel.app/',
    images: [
      {
        url: 'https://nikhilkhambhayta.vercel.app/assets/photo.jpg',
        width: 1840,
        height: 1755,
        alt: 'Portrait of Nikhil Khambhayta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Khambhayta | Software Engineer – Flutter, Java & Spring Boot',
    description: 'Nikhil Khambhayta specializes in Flutter, Java, Spring Boot, backend APIs, and modern web application development.',
    creator: '@NKhambhayt35917',
    images: ['https://nikhilkhambhayta.vercel.app/assets/photo.jpg'],
  },
  verification: {
    google: 'HcdIgNjCKcidU7i7vt_gTUF88Z_ADK2TgWDmFaN8j6k',
  },
  alternates: {
    canonical: 'https://nikhilkhambhayta.vercel.app/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://nikhilkhambhayta.vercel.app/#website",
                  "url": "https://nikhilkhambhayta.vercel.app/",
                  "name": "Nikhil Khambhayta",
                  "description": "Nikhil Khambhayta is a Software Engineer specializing in Flutter, Java, Spring Boot, backend APIs, and modern web application development for production apps.",
                  "publisher": {
                    "@id": "https://nikhilkhambhayta.vercel.app/#person"
                  }
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://nikhilkhambhayta.vercel.app/#profilepage",
                  "url": "https://nikhilkhambhayta.vercel.app/",
                  "name": "Nikhil Khambhayta - Professional Profile",
                  "mainEntity": {
                    "@id": "https://nikhilkhambhayta.vercel.app/#person"
                  }
                },
                {
                  "@type": "Person",
                  "@id": "https://nikhilkhambhayta.vercel.app/#person",
                  "name": "Nikhil Khambhayta",
                  "url": "https://nikhilkhambhayta.vercel.app/",
                  "image": "https://nikhilkhambhayta.vercel.app/assets/photo.jpg",
                  "jobTitle": "Software Engineer",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Surat",
                    "addressRegion": "Gujarat",
                    "addressCountry": "India"
                  },
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Shivaay Soft",
                    "description": "Product-based software company"
                  },
                  "alumniOf": [
                    {
                      "@type": "EducationalOrganization",
                      "name": "LDRP Institute of Technology & Research, Gujarat Technological University",
                      "department": "Information Technology"
                    },
                    {
                      "@type": "EducationalOrganization",
                      "name": "Udhna Citizen Commerce College & SPB College of Business Administration",
                      "department": "Information Technology"
                    }
                  ],
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "degree",
                      "name": "Master of Computer Applications (MCA)",
                      "recognizedBy": {
                        "@type": "EducationalOrganization",
                        "name": "Gujarat Technological University"
                      }
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "degree",
                      "name": "Bachelor of Computer Applications (BCA)",
                      "description": "First Class with Distinction"
                    }
                  ],
                  "sameAs": [
                    "https://github.com/nikhil0667",
                    "https://linkedin.com/in/nikhil-khambhayta",
                    "https://x.com/NKhambhayt35917"
                  ],
                  "knowsAbout": [
                    "Flutter",
                    "Dart",
                    "Java",
                    "Spring Boot",
                    "REST API Development",
                    "Android SDK",
                    "Next.js",
                    "React",
                    "TypeScript",
                    "SQL",
                    "MySQL",
                    "Firebase",
                    "JWT Authentication",
                    "Clean Architecture",
                    "Data Structures & Algorithms (DSA)",
                    "Search Engine Optimization (SEO)"
                  ]
                }
              ]
            })
          }}
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=4" />
        <link rel="alternate icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
