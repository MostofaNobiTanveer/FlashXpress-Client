import React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import LilBanner from "../components/LilBanner";
import Services from "../components/Services";
import ScrollToTop from "../utils/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Hero />
      <LilBanner />
      <Features />
      <Services />
    </div>
  );
};

export default Home;
