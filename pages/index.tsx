import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../components/layouts';
import { getAllPosts } from '../lib/api';
import { Posts } from '../interfaces/post';
import PostList from '../components/postList';
import Header from '../components/header';

type Props = { allPosts: Posts };
const Index: NextPage<Props> = ({ allPosts }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>muraoka.io</title>
        </Head>
        <Header />
        <PostList posts={allPosts} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
};

export default Index;
