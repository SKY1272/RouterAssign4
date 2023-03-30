import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";

const Home = () => {
  return (
    <>
      <h1 style={{ fontSize: "25px", fontFamily: "sans serif" }}>
        Welcome Home Page
      </h1>
      <Navbar />
      <Section />
    </>
  );
};
export default Home;
