import React, { useEffect } from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";

const Home = () => {
  useEffect(() => {
    navigate("/wos");
  }, []);

  return (
    <Layout title="Home">
      <div></div>
    </Layout>
  );
};

export default Home;
