import { AppProps } from 'next/app';
import 'ress';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        body {
          background: #f5f3f0;
          color: #080a11;
          font-family: 'Noto Sans JP', sans-serif;
        }
      `}</style>
    </>
  );
}

export default MyApp;
