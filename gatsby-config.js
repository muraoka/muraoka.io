module.exports = {
  siteMetadata: {
    title: 'muraoka.io',
    siteUrl: 'https://muraoka.io',
    description: 'I’m Taiga Muraoka: a developer.',
    twitterUserName: '@muraoka__',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Noto Sans JP'],
        display: 'swap',
      },
    },
  ],
};
