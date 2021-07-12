/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

/*
 skipped: 
  1. canonical
  2. og:latitude
  3. og:longitude
  4. og:locality
  5. og:url
  6. og:type
  7. og:image:width
  8. og:image:height
*/
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description, lang, meta, title, imageUrl, type, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  );

  const siteUrl = site.siteMetadata.url;

  const siteDescription = site.siteMetadata.description;
  const pageDescription = description === null ? siteDescription : description;

  const siteTitle = site.siteMetadata.title;
  const pageTitle = title || siteTitle;

  const siteAuthor = site.siteMetadata.author;

  const imageFullPath = imageUrl ? `${siteUrl}${imageUrl}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={pageTitle ? `%s | ${pageTitle}` : null}
      meta={[
        {
          name: `description`,
          content: pageDescription,
        },
        {
          property: "og:site_name",
          content: siteTitle,
        },
        // {
        //   property: "og:url",
        //   content: pageUrl,
        // },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: pageDescription,
        },
        imageFullPath
          ? {
              property: `og:image`,
              content: imageFullPath,
            }
          : null,
        {
          property: `og:type`,
          content: type,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteAuthor,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        imageFullPath
          ? {
              name: `twitter:image`,
              content: imageFullPath,
            }
          : null,
        {
          name: `twitter:description`,
          content: pageDescription,
        },
        {
          itemprop: "name",
          content: pageTitle,
        },
        {
          itemprop: "description",
          content: pageDescription,
        },
        imageFullPath
          ? {
              itemprop: "thumbnailUrl",
              content: imageFullPath,
            }
          : null,
        imageFullPath
          ? {
              itemprop: "image",
              content: imageFullPath,
            }
          : null,
        {
          itemprop: "author",
          content: siteAuthor,
        },
        {
          itemprop: "headline",
          content: pageTitle,
        },
      ]
        .filter(node => node !== null)
        .concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  type: "website",
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Seo;
