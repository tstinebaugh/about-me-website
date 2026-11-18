import Head from "next/head";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          key="og:title"
          property="og:title"
          content="Travis Stinebaugh - Senior Full Stack & Backend Engineer"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Backend services, data pipelines, and full-stack web apps with Go, TypeScript, Python, React/Next.js, and AWS."
        />
      </Head>
      <Hero />
      <Skills />
      <Contact />
    </div>
  );
}
