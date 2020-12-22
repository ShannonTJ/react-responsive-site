import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import Footer from "../Footer/Footer";
import { homeObjOne } from "./Data";

function Services() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Pricing />
      <Footer />
    </>
  );
}

export default Services;
