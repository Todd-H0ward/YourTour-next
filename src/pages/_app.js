import '@/assets/styles/globals.scss';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['cyrillic'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
