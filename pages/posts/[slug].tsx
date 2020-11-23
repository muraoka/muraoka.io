import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import { Post as PostType } from '../../interfaces/post';
import Layout from '../../components/layouts';
import Header from '../../components/header';
import PostBody from '../../components/postBody';
import PostHeader from '../../components/postHeader';

type Props = { post: PostType };
const Post: NextPage<Props> = ({ post }) => (
  <>
    <Head>
      <title>{post.title} - muraoka.io</title>
    </Head>
    <Layout>
      <Header />
      <PostHeader post={post} />
      <PostBody body={post.content} />
    </Layout>
  </>
);

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string);
  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => post.date);
  return {
    paths: paths.map((path) => ({ params: { slug: path } })),
    fallback: false,
  };
};
