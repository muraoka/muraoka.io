import Head from 'next/head';
import Layout from '../components/layouts';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>muraoka.io</title>
        </Head>
        <h1>muraoka.io</h1>
        <div>
          <p>
            GitHub : <a href="https://github.com/muraoka">muraoka</a>
          </p>
          <p>
            Twitter : <a href="https://twitter.com/muraoka_jp">muraoka_jp</a>
          </p>
          <p>
            Scrapbox :{' '}
            <a href="https://scrapbox.io/muraokajp/">muraokaのScrapbox</a>
          </p>
          <p>Mail : taigamuraoka1998@gmail.com</p>
        </div>
      </Layout>
      <style jsx>{`
        h1 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
        }
        p {
          font-size: 1rem;
          margin-bottom: 0.6rem;
        }
      `}</style>
    </>
  );
};

export default Index;
