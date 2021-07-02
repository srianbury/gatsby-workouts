import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data }) => (
  <Layout title={data.markdownRemark.frontmatter.title}>
    <div className="py-4 mx-auto max-w-screen-md">
      <div className="text-center">
        <h1 className="capitalize">{data.markdownRemark.frontmatter.title}</h1>
        <h3>{data.markdownRemark.frontmatter.date}</h3>
        {data.markdownRemark.frontmatter.banner && (
          <div className="w-full">
            <GatsbyImage
              image={getImage(data.markdownRemark.frontmatter.banner)}
              alt="banner"
            />
          </div>
        )}
      </div>
      <div
        className="pt-4"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </div>
  </Layout>
);

const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        banner {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default BlogPost;
export { query };
