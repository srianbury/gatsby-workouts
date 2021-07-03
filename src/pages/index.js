import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Home = ({ data }) => {
  return (
    <Layout title="Home">
      <div className="mx-auto max-w-screen-md">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Link to={node.fields.slug}>
                    <GatsbyImage
                      className="h-64 w-full object-cover md:h-full md:w-64"
                      image={getImage(node.frontmatter.banner)}
                      alt="banner"
                    />
                  </Link>
                </div>
                <div className="px-4 py-2">
                  <Link to={node.fields.slug} className="hover:underline">
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
                  <div>{node.frontmatter.channel}</div>
                  <p className="mt-2 text-gray-500">
                    {node.frontmatter.tags.split(",").join(", ")}
                  </p>
                  <Link
                    to={node.fields.slug}
                    className="text-purple-900 hover:underline"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { ne: null } } }
      limit: 5
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
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
