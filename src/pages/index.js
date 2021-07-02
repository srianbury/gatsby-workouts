import React from "react";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout title="Home">
    <div className="mx-auto max-w-screen-md">
      <h1>Hello, there!</h1>
      <p>
        My name is Brian Sunbury and I'm a coder person. With this site I'm
        hoping to share some code, which will likely be random thoughts of "How
        can I do this?" or "Can you do this?".
      </p>
      <p>
        I was inspired to write this blog by{" "}
        <a
          className="text-purple-900 hover:underline"
          href="https://robinwieruch.de"
          target="_blank"
          rel="noreferrer"
        >
          Robin Wieruch
        </a>
        . I've never talked with him, but I've read a lot of his articles
        related to react, node, javascript, and testing. They've helped me learn
        and grow so much in just a short time and I'm hoping to pay it forward.
      </p>
      <p>
        Another inspiration of mine is{" "}
        <a
          className="text-purple-900 hover:underline"
          href="https://kentcdodds.com"
          target="_blank"
          rel="noreferrer"
        >
          Kent C. Dodds
        </a>
        . I think I first stumbled upon him because he wrote some code for my
        org, and I see his name all over our enterprise github version. One
        artical he wrote talked about how to grow your career (yes part of this
        blog is for me) and suggests writing and sharing interesting problems
        and solutions. By writing about and sharing your code, you learn how to
        explain yourself and your code. And by sharing your code you can force
        yourself to write good code. I encourage anyone reading this to do the
        same! Feel free to clone the{" "}
        <a
          className="text-purple-900 hover:underline"
          href="https://github.com/srianbury/gatsby-srianbury-blog"
          target="_blank"
          rel="noreferrer"
        >
          repo for this site
        </a>{" "}
        and start your own!
      </p>
      <p>
        I'm by no means an expert and by sharing my code with the world, I'm
        hope to get feedback and constructive critism on how I can become a
        better developer.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
