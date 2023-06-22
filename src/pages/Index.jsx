import React from "react";
import Hero from "../components/sections/Hero";
import Numbers from "../components/Numbers";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Index = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Numbers />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
