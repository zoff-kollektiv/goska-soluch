import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';
import Page from '../components/blocks/page';
import PageContent from '../components/blocks/page-content';
import withLayout from '../components/with-layout';

export default withLayout(({ data: { blocks: { nodes: blocks } } }) => (
  <>
    <main>
      <Helmet>
        <title>Goska Soluch | Trainerin • Referentin • Supervisorin</title>
      </Helmet>

      <Header title="Trainerin • Referentin • Supervisorin" />

      {blocks.map(({ excerpt, body, frontmatter: { title, theme } }, index) => (
        <Page id={`${index + 1}`} theme={theme}>
          <PageContent title={title} excerpt={excerpt} body={body} />
        </Page>
      ))}
    </main>
    <Footer />
  </>
));

export const query = graphql`
  query {
    blocks: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/datenschutz.md$/" } }
    ) {
      nodes {
        body: html
        excerpt(format: HTML)
        frontmatter {
          title
          theme
        }
      }
    }
  }
`;
