import React, { useEffect } from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";

const Home = () => {
  useEffect(() => {
    navigate("/wos");
  }, []);

  return (
    <Layout title="Home">
      <div className="mx-auto max-w-screen-md"></div>
    </Layout>
  );
};

export default Home;
