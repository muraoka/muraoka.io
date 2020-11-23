import React from 'react';
import Link from 'next/link';
import { join } from 'path';
import { Posts } from '../interfaces/post';

type Props = { posts: Posts };
const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map((post, index) => (
      <li key={index}>
        <p className="date">{post.date}</p>
        <p className="post">
          <Link href={join('posts', post.slug)}>
            <a>{post.title}</a>
          </Link>
        </p>
      </li>
    ))}

    <style jsx>{`
      li {
        list-style-type: none;
        margin-bottom: 1.5rem;
      }
      .date {
        font-size: 1rem;
        padding-bottom: 0.1rem;
      }
      .post {
        font-size: 1.15rem;
      }
    `}</style>
  </>
);

export default PostList;
