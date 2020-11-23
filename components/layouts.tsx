import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          margin: 1.5rem auto;
          padding: 0 1rem;
          max-width: 640px;
        }
      `}</style>
    </>
  );
}

export default Layout;
