import React from "react";
import SmallFund from "./smallfund";
import AvgFund from "./avgfund";
import HighFund from "./highfund";
import MidFund from "./midfund";

const MainProduct = () => {
  return (
    <section>
      <SmallFund />
      <MidFund />
      <AvgFund />
      <HighFund />
    </section>
  );
};

export default MainProduct;
