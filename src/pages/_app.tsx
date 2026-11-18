import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "../themes/darkTheme";
import Layout from "@/components/layout/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title key="title">Travis Stinebaugh - Senior Full Stack & Backend Engineer</title>
        <meta
          key="description"
          name="description"
          content="Travis Stinebaugh is a Senior Full Stack & Backend Engineer building scalable backend services, data pipelines, and web apps with Go, TypeScript, Python, React/Next.js, and AWS."
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content="Travis Stinebaugh" />
        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta name="theme-color" content="#0b0f19" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
