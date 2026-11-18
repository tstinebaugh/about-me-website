import Head from "next/head";
import { Hero } from "@/components/Hero";
import { ImpactStats } from "@/components/ImpactStats";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { GITHUB_URL, LINKEDIN_URL, SITE_URL } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Travis Stinebaugh",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  jobTitle: "Senior Full Stack & Backend Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fukuoka",
    addressCountry: "JP",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Washington",
  },
  knowsAbout: ["Go", "TypeScript", "Python", "React", "Next.js", "AWS", "PostgreSQL", "Distributed systems"],
  knowsLanguage: ["English", "Japanese"],
  sameAs: [GITHUB_URL, LINKEDIN_URL],
};

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          key="og:description"
          property="og:description"
          content="Backend services, data pipelines, and full-stack web apps with Go, TypeScript, Python, React/Next.js, and AWS. Open to new roles."
        />
        <meta key="og:url" property="og:url" content={`${SITE_URL}/`} />
        <link key="canonical" rel="canonical" href={`${SITE_URL}/`} />
        <script
          key="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Head>
      <Hero />
      <ImpactStats />
      <Skills />
      <Contact />
    </div>
  );
}
