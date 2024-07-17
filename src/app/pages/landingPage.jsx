import React from "react";

import HeroHeader8 from "../../components/Hero";
import Navigation1 from "../../components/Navbar";
import Skills2 from "../../components/Skills2";
import AboutMe from "../../components/about";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <div>
      <Navigation1 />
      <HeroHeader8 />
      <AboutMe />
      <Skills2 />
      <Projects />
      <Footer />
    </div>
  );
}

export default LandingPage;
