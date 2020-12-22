import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import Footer from "../Footer/Footer";
import { homeObjThree } from "./Data";

function SignUp() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default SignUp;
