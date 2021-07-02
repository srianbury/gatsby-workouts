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

const Layout = ({ title, children }) => {
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
      <Seo title={title} />
      <div className="flex flex-col h-screen justify-between">
        <header className="border-b-2 border-black py-2 mb-2">
          <div className="container">
            <Header siteTitle={data.site.siteMetadata.title || `Title`} />
          </div>
        </header>
        <main className="mb-auto">
          <div className="container">
            <main>{children}</main>
          </div>
        </main>
        <footer className="py-10 border-t-2 border-black">
          <div className="container">
            <h1 className="text-4xl">footer</h1>
          </div>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
