import React from "react";
import MainProduct from "../../components/products/section2/mainproduct";
import DynamicH1 from "../../components/products/section1/productstart";
import ProductAd from "../../components/products/section3/productad";
import CustomerTrust from "../../components/products/section4/CustomerTrust";
import ProductHero from "../../components/products/Section5/productHero";
import { Helmet } from 'react-helmet';

const Product = () => {
  return (
    <>
     <Helmet>
        <title>Vanmoh | Scheme</title>
      </Helmet>
    <main className="font-sans text-lg">
      <DynamicH1 />
      <ProductHero />
      <MainProduct />
      <CustomerTrust />
      <ProductAd />
    </main>
    </>
  );
};

export default Product;
