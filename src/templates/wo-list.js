import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function alphaSort(a, b) {
  return a.toLowerCase() > b.toLowerCase
    ? 1
    : a.toLowerCase() < b.toLowerCase()
    ? -1
    : 0;
}

// max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl
const PageNavigator = ({ pageContext }) => (
  <div className="container">
    <div className="max-w-md mx-auto md:max-w-2xl">
      <div className="flex justify-between">
        <div className="my-2">
          {pageContext.prevPageNum !== null ? (
            <Link
              className="p-2 bg-purple-500 rounded text-white font-semibold tracking-wide"
              to={pageContext.prevPageNum}
            >
              Prev
            </Link>
          ) : null}
        </div>
        <div className="my-2">
          {pageContext.nextPageNum !== null ? (
            <Link
              className="p-2 bg-purple-500 rounded text-white font-semibold tracking-wide"
              to={pageContext.nextPageNum}
            >
              Next
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  </div>
);

const Home = ({ data, pageContext, location }) => {
  return (
    <Layout
      title="Home"
      url={location.href}
      afterMainBeforeFooter={<PageNavigator pageContext={pageContext} />}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div
          key={node.id}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4"
        >
          <Link to={node.fields.slug} className="md:flex">
            <div className="md:flex-shrink-0">
              <GatsbyImage
                className="h-64 w-full object-cover md:h-full md:w-64"
                image={getImage(node.frontmatter.banner)}
                alt="banner"
              />
            </div>
            <div className="px-4 py-2">
              <h2 className="hover:underline">{node.frontmatter.title}</h2>
              <div>{node.frontmatter.channel}</div>
              <p className="mt-2 text-gray-500">
                {node.frontmatter.tags
                  .split(",")
                  .map(val => val.trim())
                  .sort(alphaSort)
                  .join(", ")}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { slug: { ne: null } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            channel
            date
            tags
            banner {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, height: 200)
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Home;
export { query };
