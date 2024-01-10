import React from "react";
import Section1 from "../../components/AboutUs/Directors/Section1";
import JoinCommunity from "../../components/AboutUs/Directors/JoinCommunity";
import { Helmet } from 'react-helmet';
const Directors = () => {
  return (
    <>
     <Helmet>
        <title>Vanmoh | Company Profile</title>
      </Helmet>
    <div>
      <JoinCommunity />
      <Section1 />
    </div>
    </>
  );
};

export default Directors;
