/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Seo from "./seo";

const Layout = ({
  title,
  children,
  afterMainBeforeFooter,
  imageUrl,
  description,
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Seo title={title} imageUrl={imageUrl} description={description} />
      <div className="flex flex-col h-screen justify-between">
        <header className="mb-2">
          <Header siteTitle={data.site.siteMetadata.title || `Title`} />
        </header>
        <main className="mb-auto">
          <div className="container">
            <div className="mx-auto max-w-screen-md">
              <main>{children}</main>
            </div>
          </div>
        </main>
        <div className="mt-2">
          {afterMainBeforeFooter}
          <footer className="py-10 mt-2 bg-gradient-to-r from-green-400 to-purple-500">
            <div className="container">
              <h1 className="text-4xl">{data.site.siteMetadata.title}</h1>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
