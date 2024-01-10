import React from 'react'
import Doorstep from '../../components/Servies/Section1/Doorstep'
import Monthly from '../../components/Servies/Section2/Monthly'
import Online from '../../components/Servies/Section3/Online'
import Diverse from '../../components/Servies/Section4/Diverse'
import TitleHero from '../../components/Servies/ServicesHero/TitleHero'
// import ImageServies from '../../components/Servies/Section5/gallery'
import { Helmet } from 'react-helmet';
const ServiesMain = () => {

  return (
    <>
     <Helmet>
        <title>Vanmoh | Servies</title>
      </Helmet>
    <div>
        <TitleHero/>
      <Doorstep/>
      <Monthly/>
      <Online/>
      <Diverse/>
      {/* <ImageServies/> */}
    </div>
    </>
  )
}

export default ServiesMain
