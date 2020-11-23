import React from 'react';

type Props = { body: string };
const ArticleBody: React.FC<Props> = ({ body }) => {
  return (
    <>
      <div className="content" dangerouslySetInnerHTML={{ __html: body }}></div>
      <style jsx>{`
        .content :global(p) {
          font-size: 1.15rem;
          padding-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

export default ArticleBody;
