import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Article from '../components/article';
import Layout from '../components/layout';
import Title from '../components/title';

const Posts = ({ location }) => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query PostsQuery {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/posts/" }
          frontmatter: { draft: { eq: false } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            excerpt(pruneLength: 272)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              tag
              title
            }
          }
        }
      }
    }
  `);

  return (
    <Layout pageTitle="Posts" location={location}>
      <Title text="Posts" />
      <section>
        {edges.map(({ node }, i) => {
          const {
            excerpt,
            fields: { slug },
            frontmatter: { date, tag, title },
          } = node;

          return (
            <Article
              key={slug}
              date={date}
              html={excerpt}
              index={i}
              list
              slug={slug}
              tag={tag}
              title={title}
            />
          );
        })}
      </section>
    </Layout>
  );
};

Posts.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Posts.defaultProps = {
  location: {
    pathname: '',
  },
};

export default Posts;
