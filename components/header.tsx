import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <>
      <h1>
        <Link href="/">
          <a>muraoka.io</a>
        </Link>
      </h1>

      <style jsx>{`
        h1 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        a {
          color: #222;
        }
      `}</style>
    </>
  );
};
export default Header;
