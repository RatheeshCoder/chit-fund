import React from 'react'
import rightImg from '../../../asset/imgs/customer-bond.jpg'

const CustomerTrust = () => {
  return (
    <section className="px-3 py-5  lg:py-10">
    <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
      <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
        <p className="text-4xl font-bold md:text-7xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"> our customers </p>
        <p className="text-4xl font-bold md:text-7xl">love what we do</p>
      </div>
      <div className="order-1 lg:order-2">
        <img
          className="h-100 w-100 object-cover lg:w-[500px] lg:h-[500px]"
          src={rightImg}
          alt=""
        />
      </div>
    </div>
  </section>
  )
}

export default CustomerTrust
