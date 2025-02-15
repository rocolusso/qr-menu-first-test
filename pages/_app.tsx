import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {useEffect} from "react";
import {useThemeStore} from "@/lib/themeStore";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {

  const {theme} = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);


  return (

      <>
        <Head>
          <link rel="manifest" href="/manifest/manifest.json"/>
        </Head>
        <Component {...pageProps} />
      </>


  );
}
