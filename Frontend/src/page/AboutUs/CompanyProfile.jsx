import React from "react";
import CompanyPro from "../../components/AboutUs/CompanyProfile/Section1";
import HeroSection from "../../components/AboutUs/CompanyProfile/Section2";
import { Helmet } from 'react-helmet';
function AboutUs() {
  return (
    <>
     <Helmet>
        <title>Vanmoh | Abouts Us</title>
      </Helmet>
    <div>
      <HeroSection />
      <CompanyPro />
    </div>
    </>
  );
}

export default AboutUs;
