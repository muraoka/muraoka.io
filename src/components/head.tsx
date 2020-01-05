import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const Head = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            twitterUserName
          }
        }
      }
    `,
  );

  return (
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:site"
        content={data.site.siteMetadata.twitterUserName}
      />
      <meta
        name="twitter:creator"
        content={data.site.siteMetadata.twitterUserName}
      />
    </Helmet>
  );
};

export default Head;
