import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../components/layouts';
import { getAllArticles } from '../lib/api';
import { Articles } from '../interfaces/article';
import ArticleList from '../components/articleList';
import Header from '../components/header';

type Props = { allArticles: Articles };
const Index: NextPage<Props> = ({ allArticles }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>muraoka.io</title>
        </Head>
        <Header />
        <ArticleList articles={allArticles} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allArticles = getAllArticles();
  return {
    props: { allArticles },
  };
};

export default Index;
