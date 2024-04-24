import React from "react";
import Onetouch from "../../components/home/onetouch/onetouch";
import Secure from "../../components/home/secure/secure";
import Read from "../../components/home/readmore/read";
import Product from "../../components/home/product/product";
import Content from "../../components/home/content/content";
import Carousel from "../../components/home/casestudy/casestudy";
import FourCard from "../../components/home/FinancialFreedom/FourCard";
import StatsSection from "../../components/home/onetouch/StatsSection";
import DoorstepHero from "../../components/home/Doorstep/DoorstepHero";
import Benefit from "../../components/home/KeyBenefits/Benefit";

const Home = () => {
  return (
    <section className="font-sans text-lg cta-main-home">
      <Carousel />
      <StatsSection />
      <Product />
       <FourCard />
      {/* <Secure /> */}
      {/* <Read /> */}
      <Benefit/>
      <DoorstepHero />
    </section>
  );
};

export default Home;
