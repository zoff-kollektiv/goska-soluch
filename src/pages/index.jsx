import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import Header from '../components/header';
import Hello from '../components/blocks/hello';
import withLayout from '../components/with-layout';

export default withLayout(({ data: { hello } }) => (
  <main>
    <Helmet>
      <title>Goska Soluch</title>
    </Helmet>

    <Header title="Trainerin • Referentin • Prozessbegleiterin" />

    <Hello {...hello} />
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
  }
`;
