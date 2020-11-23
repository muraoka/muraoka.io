import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Header: React.FC = () => {
  const router = useRouter();
  const Tag = router.pathname === '/' ? 'h1' : 'p';
  return (
    <>
      <Tag>
        <Link href="/">
          <a>muraoka.io</a>
        </Link>
      </Tag>

      <style jsx>{`
        ${Tag} {
          font-size: 1.5rem;
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
