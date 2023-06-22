import React, { useState, useEffect } from "react";
import Hero from "../components/sections/Hero";
import Numbers from "../components/Numbers";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Index = () => {
  const [activeProp, setActiveProp] = useState("-70px");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScrollPos > prevScrollPos) {
        setActiveProp("-70px");
      } else if (currentScrollPos < prevScrollPos && currentScrollPos > 70) {
        setActiveProp("0px");
      } else if (currentScrollPos === 0) {
        setActiveProp("-70px");
      }
  
      setPrevScrollPos(currentScrollPos);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  
  return (
    <>
      <Nav
        navPos="fixed"
        navTop={activeProp}
        backgroundColor="#00856F"
        textColor="#fff"
        borderColor="#fff"
      />
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
