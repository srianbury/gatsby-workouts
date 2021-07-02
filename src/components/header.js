import { Link } from "gatsby";
import React from "react";
import * as CONSTANTS from "../constants";

const Header = ({ siteTitle }) => (
  <div className="flex justify-between items-center">
    <div className="flex justify-center items-center">
      <Link to="/">
        <h1 className="text-4xl">{siteTitle}</h1>
      </Link>
    </div>
    <ul className="flex m-0">
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem>
        <Link to={`/${CONSTANTS.blogPath}`}>Blog</Link>
      </NavItem>
    </ul>
  </div>
);

const NavItem = ({ children }) => (
  <li className="my-0 ml-3 hover:underline">{children}</li>
);

export default Header;
