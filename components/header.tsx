import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Header: React.FC = () => {
  const router = useRouter();
  const Tag = router.pathname === '/' ? 'h1' : 'p';
  return (
    <header>
      <Tag className="title">
        <Link href="/">
          <a>muraoka.io</a>
        </Link>
      </Tag>
      <div>
        <p>
          <a href="https://github.com/muraoka" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://twitter.com/muraoka_jp"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </p>
      </div>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          padding: 0 1rem 2rem 0;
        }
        .title {
          font-size: 1.5rem;
          font-weight: 600;
        }
        div {
          display: flex;
          align-items: flex-end;
        }
        div > p {
          padding-left: 10px;
        }
        a {
          color: #222;
        }
      `}</style>
    </header>
  );
};
export default Header;
