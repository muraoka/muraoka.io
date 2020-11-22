import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../components/layouts';
import { getAllPosts } from '../lib/api';
import { Posts } from '../interfaces/post';
import PostList from '../components/postList';

type Props = { allPosts: Posts };
const Index: NextPage<Props> = ({ allPosts }) => {
  return (
    <>
      <Layout>
        <Head>
          <title>muraoka.io</title>
        </Head>
        <h1>muraoka.io</h1>
        <PostList posts={allPosts} />
      </Layout>

      <style jsx>{`
        h1 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }
      `}</style>
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
