import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { extractVideoId } from "../utils";

// <div className="py-4 mx-auto max-w-screen-md">
const BlogPost = ({ data, location }) => {
  return (
    <Layout
      title={data.markdownRemark.frontmatter.title}
      type="article"
      imageUrl={data.markdownRemark.frontmatter.banner.publicURL}
      description=""
      url={location.href}
    >
      <div className="text-center">
        <h1 className="capitalize">{data.markdownRemark.frontmatter.title}</h1>
        <h3>{data.markdownRemark.frontmatter.channel}</h3>
      </div>
      <div className="text-center">
        <div
          className="relative"
          style={{
            paddingTop: "56.25%",
          }}
        >
          <iframe
            // width="560"
            // height="315"
            src={`https://www.youtube.com/embed/${extractVideoId(
              data.markdownRemark.frontmatter.url
            )}?playsinline=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
      <div
        className="pt-4"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </Layout>
  );
};

const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        channel
        date(formatString: "MMMM DD, YYYY")
        url
        tags
        banner {
          publicURL
        }
      }
    }
  }
`;

export default BlogPost;
export { query };
