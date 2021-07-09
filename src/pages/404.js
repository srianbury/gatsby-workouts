import React from "react";
import Layout from "../components/layout";

const NotFoundPage = location => (
  <Layout title="404: Not found" url={location.href}>
    <h1>404: Not Found</h1>
  </Layout>
);

export default NotFoundPage;
