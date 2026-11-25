import './globals.css';
import './redesign.css';
import { HOME_DESCRIPTION, SITE_NAME, SITE_URL } from '../lib/site';

export const viewport = {
  themeColor: '#101215',
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: HOME_DESCRIPTION,
  keywords: [
    'Nikhil Khambhayta',
    'Nikhil Khambhayta Software Engineer',
    'Software Engineer Portfolio',
    'Flutter Developer',
    'Dart',
    'Java Developer',
    'Spring Boot Developer',
    'REST APIs',
    'MySQL',
    'Firebase',
    'Next.js',
    'Android Developer',
  ],
  authors: [{ name: SITE_NAME, url: `${SITE_URL}/` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: HOME_DESCRIPTION,
    url: `${SITE_URL}/`,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: HOME_DESCRIPTION,
    creator: '@NKhambhayt35917',
  },
  verification: {
    google: 'HcdIgNjCKcidU7i7vt_gTUF88Z_ADK2TgWDmFaN8j6k',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
