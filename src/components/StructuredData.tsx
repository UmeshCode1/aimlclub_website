export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AI & Machine Learning Club – OCT',
    alternateName: 'AI ML Club OCT Bhopal',
    url: 'https://umeshcode1.github.io/aimlclub_website',
    logo: 'https://umeshcode1.github.io/aimlclub_website/favicon.svg',
    description:
      'Student-led AI & ML community at Oriental College of Technology, Bhopal. Empowering students through workshops, hackathons, and research projects.',
    foundingDate: '2023',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Oriental College of Technology',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      postalCode: '462021',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'General Inquiries',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://linkedin.com/company/aimlclub-oct',
      'https://github.com/umeshcode1/aimlclub_website',
      'https://instagram.com/aimlclub.oct',
    ],
    keywords: 'AI, Machine Learning, Deep Learning, Data Science, Student Club, Workshops, Hackathons',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AI & ML Club – OCT',
    url: 'https://umeshcode1.github.io/aimlclub_website',
    description: 'Official website of AI & Machine Learning Club at Oriental College of Technology',
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Organization',
      name: 'AI & ML Club – OCT',
    },
  };

  const educationalOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'AI & Machine Learning Club – OCT',
    description:
      'Student organization focused on artificial intelligence and machine learning education',
    url: 'https://umeshcode1.github.io/aimlclub_website',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bhopal',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'IN',
    },
    memberOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Oriental College of Technology',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bhopal',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />
    </>
  );
}
