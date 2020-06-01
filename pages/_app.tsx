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
          font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue,
            Segoe UI, Hiragino Kaku Gothic ProN, Hiragino Sans,
            ヒラギノ角ゴ ProN W3, Arial, メイリオ, Meiryo, sans-serif;
        }
      `}</style>
    </>
  );
}

export default MyApp;
