import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import Footer from "../Footer/Footer";
import { homeObjTwo } from "./Data";

function Products() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
      <Footer />
    </>
  );
}

export default Products;
