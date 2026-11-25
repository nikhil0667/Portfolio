import PortfolioPage from '../components/PortfolioPage';
import { HOME_DESCRIPTION, SITE_NAME, SITE_URL, getHomeStructuredData } from '../lib/site';

export const metadata = {
  title: SITE_NAME,
  description: HOME_DESCRIPTION,
  alternates: {
    canonical: `${SITE_URL}/`,
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
};

export default function HomePage() {
  const structuredData = getHomeStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioPage />
    </>
  );
}
