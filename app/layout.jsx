import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import './redesign.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  metadataBase: new URL('https://nikhilkhambhayta.vercel.app'),
  applicationName: 'Nikhil Khambhayta',
  title: {
    default: 'Nikhil Khambhayta | Software Engineer | Flutter, Java & Spring Boot Developer',
    template: '%s | Nikhil Khambhayta',
  },
  description: 'Official portfolio of Nikhil Khambhayta, Mobile Application Developer at Shivaay Soft (Surat) and MCA graduate (8.5 CPI) from LDRP-ITR/GTU. Specializing in Flutter, Dart, Java, Spring Boot, REST APIs, and Next.js full-stack systems.',
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
    title: 'Nikhil Khambhayta | Software Engineer | Flutter, Java & Spring Boot Developer',
    description: 'Explore the portfolio of Nikhil Khambhayta: Mobile Application Developer at Shivaay Soft, MCA graduate (8.5 CPI). Building production Flutter mobile apps, Java Spring Boot backends, and Next.js platforms.',
    url: 'https://nikhilkhambhayta.vercel.app/',
    images: [
      {
        url: 'https://nikhilkhambhayta.vercel.app/assets/hero.png',
        width: 1200,
        height: 630,
        alt: 'Nikhil Khambhayta - Software Engineer & Mobile Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Khambhayta | Software Engineer | Flutter, Java & Spring Boot Developer',
    description: 'Mobile Application Developer at Shivaay Soft & MCA Graduate (8.5 CPI). Production Flutter apps, Java Spring Boot REST APIs, and Next.js web applications.',
    creator: '@NKhambhayt35917',
    images: ['https://nikhilkhambhayta.vercel.app/assets/hero.png'],
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
                  "alternateName": [
                    "Nikhil Khambhayta Portfolio",
                    "NikhilKhambhayta",
                    "nikhilkhambhayta.vercel.app",
                    "Nikhil Khambhayta Software Engineer"
                  ],
                  "description": "Portfolio of Nikhil Khambhayta, Software Engineer and Mobile Application Developer at Shivaay Soft specializing in Flutter, Java, Spring Boot, and Next.js.",
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
                  "image": "https://nikhilkhambhayta.vercel.app/assets/hero.png",
                  "jobTitle": "Mobile Application Developer & Software Engineer",
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
      <body className={`${dmSans.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
