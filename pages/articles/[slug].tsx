import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getAllArticles, getArticleBySlug } from '../../lib/api';
import { Article as ArticleType } from '../../interfaces/article';
import Layout from '../../components/layouts';
import Header from '../../components/header';
import ArticleBody from '../../components/articleBody';
import ArticleHeader from '../../components/articleHeader';

type Props = { article: ArticleType };
const Article: NextPage<Props> = ({ article }) => (
  <>
    <Head>
      <title>{article.title} - muraoka.io</title>
    </Head>
    <Layout>
      <Header />
      <ArticleHeader article={article} />
      <ArticleBody body={article.content} />
    </Layout>
  </>
);

export default Article;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = getArticleBySlug(params!.slug as string);
  return {
    props: { article },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles();
  const paths = articles.map((article) => article.date);
  return {
    paths: paths.map((path) => ({ params: { slug: path } })),
    fallback: false,
  };
};
