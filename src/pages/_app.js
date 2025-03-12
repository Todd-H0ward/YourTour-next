import '@/assets/styles/globals.scss';
import { Roboto } from 'next/font/google';
import Head from 'next/head';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['cyrillic'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Your tour</title>
        <meta name="description" content="Traveling agency YourTour" />
        <meta name="keywords" content="traveling YourTour tour adventures" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
