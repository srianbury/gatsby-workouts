import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Blog = ({ data }) => {
  return (
    <Layout title="Blog">
      <div className="mx-auto max-w-screen-md">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div
            key={node.id}
            className="border-2 border-black mb-2 p-2 grid grid-cols-3 gap-4"
          >
            <GatsbyImage
              image={getImage(node.frontmatter.banner)}
              alt="banner"
            />
            <div className="col-span-2">
              <Link to={node.fields.slug} className="hover:underline">
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <div>{node.frontmatter.date}</div>
              <div>{node.excerpt}</div>
              <Link
                to={node.fields.slug}
                className="text-purple-900 hover:underline"
              >
                View
              </Link>
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
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            banner {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG, height: 100)
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

export default Blog;
export { query };
