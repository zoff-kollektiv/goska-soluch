import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';

import Block from '../components/blocks/block';
import BlockContent from '../components/blocks/block-content';
import Contact from '../components/blocks/contact';
import Header from '../components/header';
import Hello from '../components/blocks/hello';
import withLayout from '../components/with-layout';

export default withLayout(
  ({
    data: {
      contact,
      hello,
      helloImages: { nodes: helloImages },
      blocks: { nodes: blocks }
    }
  }) => (
    <main>
      <Helmet>
        <title>Goska Soluch | Trainerin • Referentin • Supervisorin</title>
      </Helmet>

      <Header title="Trainerin • Referentin • Prozessbegleiterin" />

      <Hello images={helloImages} {...hello} />

      {blocks.map(
        (
          {
            excerpt,
            body,
            frontmatter: { title, theme, image, imagePortrait = false }
          },
          index
        ) => (
          <Block id={title && title.toLowerCase()} theme={theme}>
            <BlockContent
              title={title}
              excerpt={excerpt}
              body={body}
              index={index + 1}
              image={imagePortrait || image}
            />
          </Block>
        )
      )}

      <Contact id="kontakt" {...contact} />
    </main>
  )
);

export const query = graphql`
  query {
    hello: markdownRemark(fileAbsolutePath: { regex: "/hello.md$/" }) {
      intro: rawMarkdownBody
      frontmatter {
        title
        theme
      }
    }

    contact: markdownRemark(fileAbsolutePath: { regex: "/05-contact.md$/" }) {
      intro: rawMarkdownBody
      frontmatter {
        title
        theme
        email
        telephone
      }
    }

    helloImages: allFile(
      filter: {
        sourceInstanceName: { eq: "images-hello" }
        absolutePath: { regex: "/jpg|png$/" }
      }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 400, srcSetBreakpoints: [400, 200]) {
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }

    blocks: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/^((?!hello|contact.md).)*$/" } }
      sort: { fields: [frontmatter___order] }
    ) {
      nodes {
        body: html
        excerpt(format: HTML)
        frontmatter {
          title
          theme
          imagePortrait {
            childImageSharp {
              fluid(maxWidth: 400, srcSetBreakpoints: [400, 200]) {
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 400, srcSetBreakpoints: [400, 200]) {
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  }
`;
