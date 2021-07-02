import React from "react";
import Layout from "../components/layout";

const About = () => (
  <Layout title="About">
    <div className="mx-auto max-w-screen-md">
      <h1>About me</h1>
      <p>
        My name is Brian Sunbury and I'm a Software Engineer located in Phoenix,
        Arizona. Shortly after graduating from Drake University in 2018, I
        joined PayPal as a Software Engineer 2. The languages and technologies I
        use on a daily basis include MS SQL, react (javascript), and python.
        More specifically, I work on internal apps related to the Payments
        Platform. Some of the projects I work on include managing a database,
        building data pipe lines, and building full stack apps (front end, back
        end, and database).
      </p>
      <p>
        Outside of work I like to hangout with my family and our 7 dogs, read,
        play music, and also code more and work on weird pet projects.
      </p>
    </div>
  </Layout>
);

export default About;
