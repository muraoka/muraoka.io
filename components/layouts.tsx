import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          margin: 2rem auto;
          padding: 0 2rem;
          max-width: 800px;
        }
      `}</style>
    </>
  );
}

export default Layout;
