import React from 'react'
import MainProduct from '../../components/products/section2/mainproduct'
import DynamicH1 from '../../components/products/section1/productstart'
import ProductAd from '../../components/products/section3/productad'
import CustomerTrust from '../../components/products/section4/CustomerTrust'

const Product = () => {
  return (
    <main>
        <DynamicH1/>
        <MainProduct/>
        <CustomerTrust/>
        <ProductAd/>
    </main>
  )
}

export default Product
