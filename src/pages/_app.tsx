import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import darkTheme from "../themes/darkTheme";
import Layout from "@/components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
