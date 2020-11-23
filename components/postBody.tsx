import React from 'react';

type Props = { body: string };
const PostBody: React.FC<Props> = ({ body }) => {
  return (
    <>
      <div className="content" dangerouslySetInnerHTML={{ __html: body }}></div>
      <style jsx>{`
        .content :global(p) {
          font-size: 1.15rem;
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
};

export default PostBody;
