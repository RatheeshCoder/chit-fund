import React from 'react'
import Bottom from '../../components/Jobs/Section3/Bottom/Bottom'
import Hiring from '../../components/Jobs/Section2/Hiring/Hiring'
import Head from '../../components/Jobs/Section1/Head/Head'

const Jobs = () => {
  return (
    <main>
      <Head/>
        <Hiring/>
        <Bottom/>
    </main>
  )
}

export default Jobs