import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layouts/Layout";
import { Analytics } from "@vercel/analytics/react";

const NextNProgress = dynamic(() => import("nextjs-progressbar"), {
  ssr: false,
});

import "react-medium-image-zoom/dist/styles.css";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        height={5}
        color="linear-gradient(to right, #00c6ff, #0072ff)"
        options={{ easing: "ease", speed: 500, showSpinner: false }}
      />
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}

export default MyApp;
