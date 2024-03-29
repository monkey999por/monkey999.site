import { AppProps } from "next/app";
import Head from "next/head";
import "@styles/globals.css";
import Script from "next/script";

import ErrorBoundary, { ErrorPage } from "components/ErrorBoundary";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link href=' https://unpkg.com/sanitize.css ' rel=' stylesheet ' />
    </Head>
    <ErrorBoundary fallback={<ErrorPage />}>
      <Component {...pageProps} />
    </ErrorBoundary>
    <Script src='https://code.createjs.com/1.0.0/createjs.min.js' />
    <Script src='https://cdn.rawgit.com/ics-creative/ParticleJS/release/1.0.0/libs/particlejs.min.js' />
  </>
);

export default App;
