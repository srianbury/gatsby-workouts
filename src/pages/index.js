import React, { useEffect } from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";

const Home = ({ location }) => {
  useEffect(() => {
    navigate("/wos");
  }, []);

  return (
    <Layout title="Home" url={location.href}>
      <div></div>
    </Layout>
  );
};

export default Home;
