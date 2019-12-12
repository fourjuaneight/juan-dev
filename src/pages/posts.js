import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import List from '../components/list';
import Title from '../components/title';

const Posts = ({ location }) => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/posts/" }
          frontmatter: { draft: { eq: false } }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            excerpt(format: HTML, pruneLength: 256, truncate: false)
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
      <List edges={edges} />
    </Layout>
  );
};

Posts.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Posts;
