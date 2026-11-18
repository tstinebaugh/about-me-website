import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "../themes/darkTheme";
import Layout from "@/components/layout/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/data/site";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title key="title">{SITE_TITLE}</title>
        <meta key="description" name="description" content={SITE_DESCRIPTION} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
        <meta key="og:title" property="og:title" content={SITE_TITLE} />
        <meta key="og:description" property="og:description" content={SITE_DESCRIPTION} />
        <meta key="og:image" property="og:image" content={OG_IMAGE} />
        <meta key="og:image:width" property="og:image:width" content="1200" />
        <meta key="og:image:height" property="og:image:height" content="630" />
        <meta
          key="og:image:alt"
          property="og:image:alt"
          content="Travis Stinebaugh, Senior Full Stack & Backend Engineer, open to new roles"
        />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:image" name="twitter:image" content={OG_IMAGE} />
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
