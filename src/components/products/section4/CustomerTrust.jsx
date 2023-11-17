import React from 'react'
import rightImg from '../../../asset/imgs/customer-bond.jpg'

const CustomerTrust = () => {
  return (
   <section className='customer-trust'>

    <div className='customer-title'>
      <h1> our customers love what we do </h1>
    </div>
    <div className='customer-bond-img'>
      <img src={rightImg} alt="" />
    </div>

   </section>
  )
}

export default CustomerTrust
