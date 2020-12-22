import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import Footer from "../Footer/Footer";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <Footer />
    </>
  );
}

export default Home;
