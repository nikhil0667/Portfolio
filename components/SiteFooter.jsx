import Link from 'next/link';
import { SITE_NAME } from '../lib/site';

/**
 * Shared site footer rendered across the homepage and project case-study pages.
 */
export default function SiteFooter({
  actionHref = '#home',
  actionLabel = 'Back to top',
  className = '',
  useNextLink = false,
}) {
  return (
    <footer className={className || undefined}>
      <p>{`© 2026 ${SITE_NAME}. All rights reserved.`}</p>
      {useNextLink ? (
        <Link href={actionHref}>{actionLabel}</Link>
      ) : (
        <a href={actionHref}>{actionLabel}</a>
      )}
    </footer>
  );
}

