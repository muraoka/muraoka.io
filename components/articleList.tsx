import React from 'react';
import Link from 'next/link';
import { join } from 'path';
import { Articles } from '../interfaces/article';

type Props = { articles: Articles };
const ArticleList: React.FC<Props> = ({ articles }) => (
  <ul>
    {articles.map((article, index) => (
      <li key={index}>
        <p className="date">{article.date}</p>
        <p className="title">
          <Link href={join('articles', article.slug)}>
            <a>{article.title}</a>
          </Link>
        </p>
      </li>
    ))}

    <style jsx>{`
      li {
        list-style-type: none;
        padding-bottom: 1.5rem;
      }
      .date {
        font-size: 1rem;
        padding-bottom: 0.1rem;
      }
      .title {
        font-size: 1.2rem;
      }
    `}</style>
  </ul>
);

export default ArticleList;
