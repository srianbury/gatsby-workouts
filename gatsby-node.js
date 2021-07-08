/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const CONSTANTS = {
  woPath: "wo",
};

function getWorkoutPath(pageNum) {
  return pageNum === 1 ? `/wos` : `/wos/${pageNum}`;
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const dir = node.fileAbsolutePath.split("/");
    if (dir[dir.length - 3] === "content") {
      // now we have the markdown items under the content directory
      actions.createNodeField({
        node,
        name: `slug`,
        value: `/${CONSTANTS.woPath}${createFilePath({ node, getNode })}`,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { ne: null } } }
        sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      ) {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const posts = result.data.allMarkdownRemark.edges;
  const POSTS_PER_PAGE = 4;
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  Array.from({ length: numPages }).forEach((_, i) => {
    const currentPageNum = i + 1;
    const prevPageNum = currentPageNum - 1;
    const nextPageNum = currentPageNum + 1;

    actions.createPage({
      path: getWorkoutPath(currentPageNum), // currentPageNum === 1 ? `/wos` : `/wos/${currentPageNum}`,
      component: path.resolve("./src/templates/wo-list.js"),
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        numPages,
        currentPageNum,
        prevPageNum: prevPageNum > 0 ? getWorkoutPath(prevPageNum) : null,
        nextPageNum:
          nextPageNum <= numPages ? getWorkoutPath(nextPageNum) : null,
      },
    });
  });

  posts.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/wo-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
