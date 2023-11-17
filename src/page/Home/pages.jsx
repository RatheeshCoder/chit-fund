import React from 'react'
import Onetouch from '../../components/home/onetouch/onetouch';
import Secure from '../../components/home/secure/secure';
import Read from '../../components/home/readmore/read';
import Product from '../../components/home/product/product';
import Content from '../../components/home/content/content';
import Casestudy from '../../components/home/casestudy/casestudy';


const Home = () => {
  return (
   <section className='cta-main-home'>
   
      <Onetouch />
      <Secure />
      <Read />
      <Content />
      <Product />
      <Casestudy />

      
      </section>
  
  )
}

export default Home