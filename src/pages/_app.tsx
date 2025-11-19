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
        <title>Travis Stinebaugh - Portfolio</title>
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
