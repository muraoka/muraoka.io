import React from 'react';
import { Article } from '../interfaces/article';

type Props = { article: Article };
const ArticleHeader: React.FC<Props> = ({ article }) => {
  return (
    <>
      <p>{article.date}</p>
      <h1>{article.title}</h1>
      <style jsx>{`
        p {
          font-size: 1rem;
          padding-bottom: 0.1rem;
        }
        h1 {
          font-size: 2rem;
          padding-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

export default ArticleHeader;
