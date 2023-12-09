import React from "react";
import ComparisonsHero from "../../components/HowWeWorks/ComparisonsPage/ComparisonsHero";
import ComparisonsTitle from "../../components/HowWeWorks/ComparisonsPage/ComparisonsTitle";
import CardComponent from "../../components/HowWeWorks/ComparisonsPage/ComparisonsCard";

const Comparisons = () => {
  return (
    <div>
      <ComparisonsHero />
      <ComparisonsTitle />
      <CardComponent />
    </div>
  );
};

export default Comparisons;
