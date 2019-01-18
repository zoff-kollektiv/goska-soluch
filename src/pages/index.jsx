import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import Block from '../components/blocks/block';
import BlockContent from '../components/blocks/block-content';
import Header from '../components/header';
import Hello from '../components/blocks/hello';
import withLayout from '../components/with-layout';

export default withLayout(({ data: { hello, blocks: { edges: blocks } } }) => (
  <main>
    <Helmet>
      <title>Goska Soluch</title>
    </Helmet>

    <Header title="Trainerin • Referentin • Prozessbegleiterin" />

    <Hello {...hello} />

    {blocks.map(({ node: { intro, frontmatter: { title, theme } } }, index) => (
      <Block theme={theme}>
        <BlockContent title={title} intro={intro} index={index + 1} />
      </Block>
    ))}
  </main>
));

export const query = graphql`
  query {
    hello: markdownRemark(fileAbsolutePath: { regex: "/hello.md$/" }) {
      intro: rawMarkdownBody
      frontmatter {
        title
      }
    }

    blocks: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/^((?!hello.md).)*$/" } }
    ) {
      edges {
        node {
          intro: rawMarkdownBody
          frontmatter {
            title
            theme
          }
        }
      }
    }
  }
`;
