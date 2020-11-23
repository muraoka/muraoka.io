import React from 'react';
import { Post } from '../interfaces/post';

type Props = { post: Post };
const PostHeader: React.FC<Props> = ({ post }) => {
  return (
    <>
      <p>{post.date}</p>
      <h1>{post.title}</h1>
      <style jsx>{`
        p {
          font-size: 1rem;
          padding-bottom: 0.1rem;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

export default PostHeader;
