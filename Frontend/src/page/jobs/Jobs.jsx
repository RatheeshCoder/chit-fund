import React from "react";
import Bottom from "../../components/Jobs/Section3/Bottom/Bottom";
import Hiring from "../../components/Jobs/Section2/Hiring/Hiring";
import Head from "../../components/Jobs/Section1/Head/Head";
import { Helmet } from 'react-helmet';

const Jobs = () => {
  return (
    <>
     <Helmet>
        <title>Vanmoh | Careers</title>
      </Helmet>
    <main>
      <Head />
      <Bottom />
      <Hiring />
    </main>
    </>
  );
};

export default Jobs;
