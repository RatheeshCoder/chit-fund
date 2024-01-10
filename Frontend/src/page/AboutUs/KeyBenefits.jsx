import React from "react";
import DirectorsHero from "../../components/AboutUs/KeyBenefits.jsx/DirectorsHero";
import Team from "../../components/AboutUs/KeyBenefits.jsx/Team";
import { Helmet } from 'react-helmet';
const KeyBenefits = () => {
  return (
    <>
     <Helmet>
        <title>Vanmoh | Our Team</title>
      </Helmet>
    <div>
      <DirectorsHero />
      <Team />
    </div>
    </>
  );
};

export default KeyBenefits;
