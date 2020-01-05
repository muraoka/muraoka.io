import React from 'react';
import Head from '../components/head';

const Index = () => {
  return (
    <main>
      <Head />
      <h1>muraoka.io</h1>
      <p>
        <strong>GitHub</strong> :{' '}
        <a href="https://github.com/muraoka">muraoka</a>
        <br />
        <strong>Twitter</strong> :{' '}
        <a href="https://twitter.com/muraoka__">muraoka__</a>
        <br />
        <strong>Scrapbox</strong> :{' '}
        <a href="https://scrapbox.io/taigamuraoka/">muraokaのScrapbox</a>
        <br />
        <strong>Mail</strong> : taigamuraoka1998@gmail.com
      </p>
    </main>
  );
};

export default Index;
