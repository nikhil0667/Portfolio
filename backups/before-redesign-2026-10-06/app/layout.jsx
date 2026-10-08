import './globals.css'

export const metadata = {
  title: 'Nikhil Khambhayta | Software Engineer | Java & Flutter Developer',
  description: 'Portfolio of Nikhil Khambhayta, a Software Engineer specializing in Java backend development, Spring Boot APIs, and Flutter mobile application development.',
  keywords: 'Nikhil Khambhayta, Software Engineer, Java Developer, Java Backend Developer, Flutter Developer, Spring Boot Developer, Android Developer, Portfolio',
  authors: [{ name: 'Nikhil Khambhayta' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Nikhil Khambhayta | Software Engineer | Java & Flutter Developer',
    description: 'Explore the portfolio of Nikhil Khambhayta, a software engineer building scalable Java backend systems and high-performance Flutter mobile applications.',
    url: 'https://www.nikhilkhambhayta.tech/',
    siteName: 'Nikhil Khambhayta Portfolio',
    images: [
      {
        url: 'https://www.nikhilkhambhayta.tech/preview.png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Khambhayta | Software Engineer | Java Backend & Flutter Developer',
    description: 'Software engineer portfolio showcasing Java backend development and Flutter mobile applications.',
    images: ['https://www.nikhilkhambhayta.tech/preview.png'],
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
              "@type": "Person",
              "name": "Nikhil Khambhayta",
              "url": "https://www.nikhilkhambhayta.tech/",
              "jobTitle": "Software Engineer",
              "sameAs": [
                "https://github.com/nikhil0667",
                "https://linkedin.com/in/nikhil-khambhayta"
              ],
              "knowsAbout": [
                "Java",
                "Spring Boot",
                "Flutter",
                "Android Development",
                "REST API Development"
              ]
            })
          }}
        />
      </head>
      <body>
        <div className="app-container">
          {/* Background Ambience */}
          <div className="ambient-light-1"></div>
          <div className="ambient-light-2"></div>
          {children}
        </div>
      </body>
    </html>
  )
}
