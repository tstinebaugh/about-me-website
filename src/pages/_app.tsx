import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "../themes/darkTheme";
import Layout from "@/components/layout/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
