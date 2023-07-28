import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script
        src="https://cdn.tailwindcss.com"
        strategy="beforeInteractive"
      ></Script>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
