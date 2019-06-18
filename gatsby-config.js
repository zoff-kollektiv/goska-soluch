module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images-hello',
        path: `${__dirname}/data/blocks`
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blocks',
        path: `${__dirname}/data/blocks`
      }
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- excerpt-end -->'
      }
    },

    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
};
