module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images-hello',
        path: `${__dirname}/static/images`
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blocks',
        path: `${__dirname}/data/blocks`
      }
    },

    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
};
