import React from 'react'
import Onetouch from '../../components/home/onetouch/onetouch';
import Secure from '../../components/home/secure/secure';
import Read from '../../components/home/readmore/read';
import Product from '../../components/home/product/product';
import Content from '../../components/home/content/content';
import Carousel from '../../components/home/casestudy/casestudy';
import FourCard from '../../components/home/FinancialFreedom/FourCard';


const Home = () => {
  return (
   <section className='cta-main-home'>
   
      <Onetouch />
      <Secure />
      <Read />

      <FourCard />
      <Product />
      <Carousel />
    

      
      </section>
  
  )
}

export default Home