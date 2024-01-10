import React from "react";
import FeaturesSection from "../../components/AboutUs/Values/FeaturesSection";
import ValueHero from "../../components/AboutUs/Values/ValueHero";
import { Helmet } from 'react-helmet';
const Values = () => {
  return (
    <>
     <Helmet>
        <title>Vanmoh | Values</title>
      </Helmet>
    <div>
      <ValueHero />
      <FeaturesSection />
    </div>
    </>
  );
};

export default Values;
