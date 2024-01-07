import React from 'react'
import HeroSection from '../../components/HowWeWorks/HowWeWork/Section1'
import ChitAct from '../../components/HowWeWorks/HowWeWork/Section2'
import ChitProcess from '../../components/HowWeWorks/HowWeWork/Section3'
import ComparisonsHero from '../../components/HowWeWorks/ComparisonsPage/ComparisonsHero'
import ComparisonsTitle from '../../components/HowWeWorks/ComparisonsPage/ComparisonsTitle'
import CardComponent from '../../components/HowWeWorks/ComparisonsPage/ComparisonsCard'


const HowWeWork = () => {
  return (
    <main>
      <HeroSection />
      <ChitAct />
      <ChitProcess />

      <ComparisonsHero />
      <ComparisonsTitle />
      <CardComponent />

    </main>
  )
}

export default HowWeWork
