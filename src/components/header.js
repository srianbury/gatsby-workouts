import { Link } from "gatsby";
import React from "react";

const Header = ({ siteTitle }) => (
  <div className="py-2 bg-gradient-to-r from-purple-400 to-green-500">
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Link to="/">
            <h1 className="text-4xl">{siteTitle}</h1>
          </Link>
        </div>
        <div className="flex m-0">
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
        </div>
      </div>
    </div>
  </div>
);

const NavItem = ({ children }) => (
  <span className="my-0 ml-3 hover:underline">{children}</span>
);

export default Header;
