export default function StructuredData() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI & Machine Learning Club – OCT',
    url: 'https://umeshcode1.github.io/aimlclub_website',
    logo: 'https://umeshcode1.github.io/aimlclub_website/assets/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/ai-ml-club-oct',
      'https://github.com/aimlclub-oct',
      'https://www.instagram.com/aimlclub_oct'
    ],
    contactPoint: [{
      '@type': 'ContactPoint',
      email: 'aimlclub@oct.edu',
      contactType: 'community',
      areaServed: 'IN'
    }],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhopal',
      addressRegion: 'MP',
      addressCountry: 'IN'
    }
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI & Machine Learning Club – OCT',
    url: 'https://umeshcode1.github.io/aimlclub_website',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://umeshcode1.github.io/aimlclub_website/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
