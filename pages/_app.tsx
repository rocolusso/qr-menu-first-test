import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {useEffect} from "react";
import {useThemeStore} from "@/lib/themeStore";

export default function App({ Component, pageProps }: AppProps) {

  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);


  return <Component {...pageProps} />;
}
