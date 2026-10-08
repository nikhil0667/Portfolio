import './globals.css'
import './redesign.css'

export const metadata = {
  title: 'Nikhil Khambhayta | Software Engineer | Java, Flutter & Next.js Developer',
  description: 'Portfolio of Nikhil Khambhayta, a Software Engineer specializing in scalable Java backend systems, Spring Boot APIs, Flutter mobile apps, and modern Next.js web applications.',
  keywords: 'Nikhil Khambhayta, Software Engineer, Java Developer, Java Backend Developer, Flutter Developer, Spring Boot Developer, Android Developer, Next.js Developer, TypeScript, React Developer, Ved Enterprise, Portfolio',
  authors: [{ name: 'Nikhil Khambhayta' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Nikhil Khambhayta | Software Engineer | Java, Flutter & Next.js Developer',
    description: 'Explore the portfolio of Nikhil Khambhayta, a software engineer building scalable Java backend systems, high-performance Flutter mobile applications, and modern web solutions.',
    url: 'https://www.nikhilkhambhayta.tech/',
    siteName: 'Nikhil Khambhayta Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Nikhil Khambhayta | Software Engineer | Java, Flutter & Next.js Developer',
    description: 'Software engineer portfolio showcasing Java backend development, Flutter mobile applications, and Next.js web platforms.',
  },
  verification: {
    google: 'HcdIgNjCKcidU7i7vt_gTUF88Z_ADK2TgWDmFaN8j6k',
  },
  alternates: {
    canonical: 'https://www.nikhilkhambhayta.tech/',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.nikhilkhambhayta.tech/#person",
                  "name": "Nikhil Khambhayta",
                  "url": "https://www.nikhilkhambhayta.tech/",
                  "jobTitle": "Software Engineer",
                  "sameAs": [
                    "https://github.com/nikhil0667",
                    "https://linkedin.com/in/nikhil-khambhayta",
                    "https://x.com/NKhambhayt35917"
                  ],
                  "knowsAbout": [
                    "Java",
                    "Spring Boot",
                    "Flutter",
                    "Android Development",
                    "Next.js",
                    "TypeScript",
                    "React",
                    "Tailwind CSS",
                    "REST API Development",
                    "MySQL",
                    "SQLite",
                    "Search Engine Optimization (SEO)"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.nikhilkhambhayta.tech/#website",
                  "url": "https://www.nikhilkhambhayta.tech/",
                  "name": "Nikhil Khambhayta Portfolio",
                  "publisher": {
                    "@id": "https://www.nikhilkhambhayta.tech/#person"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
