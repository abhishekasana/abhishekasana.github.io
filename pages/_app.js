import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NEXT_PUBLIC_GOOGLE_ANALYTICS_ID } from '../constants/default';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Abhishek Kasana | Developer | Personal Homepage</title>
        <meta
          name="description"
          key="description"
          content="Discover the world of software development with Abhishek Kasana, a passionate developer and tinkerer. Explore insightful blogs on coding, innovation, and the wonders of tech."
        />
        <meta
          name="keywords"
          key="keywords"
          content="Python, Database, Cryptography, React, Node.js, Docker, Software Engineering, Tech Innovation, Programming, Abhishek Kasana, Cuemath, Software Developer, Tech Blogger, Bangalore Tech Scene, India technology, PEC"
        />
        <link rel="shortcut icon" href="/static/images/logo/fav_icon.png" />

        <link
          rel="icon"
          href="/static/images/logo/fav_icon.png"
          type="image/png"
          sizes="16x16"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
    </>
  );
}

export default MyApp;
