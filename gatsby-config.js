module.exports = {
  plugins: [
    'gatsby-plugin-styled-jsx',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blocks',
        path: `${__dirname}/data/blocks`
      }
    }
  ]
};
