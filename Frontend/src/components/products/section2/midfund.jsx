import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import { mid_fund } from '../../../data/data';

Modal.setAppElement('#root');

const AvgFund = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContentPopup = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeContentPopup = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section className='py-14'>
      <div className="max-w-screen-xl px-4 mx-auto text-gray-600 md:px-8">
        <div className='relative max-w-xl mx-auto sm:text-center'>
          <h3 className='text-3xl font-semibold text-gray-800 sm:text-4xl'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>ChitFunds</span> 608 Days !
          </h3>
          <div className='max-w-xl mt-3'>
            <p>
            Fuel your financial destiny with ChitFunds—an odyssey to unmatched prosperity. Join our community for strategic investments and unparalleled wealth growth.
            </p>
          </div>
        </div>
        <div className='justify-center gap-6 mt-16 space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
          {mid_fund.map((product, idx) => (
            <div key={idx} className='relative flex flex-col items-stretch flex-1 p-8 border-2 rounded-xl'>
              <div>
                <h4 className='font-medium text-center text-black text-indigo-600'>
                  Chit Schema
                </h4>
                <p className='mt-4 text-3xl font-semibold text-gray-800'>
                  ₹{product.amount}
                </p>
                <p className="text-sm text-gray-600">{product.timeline}</p>
              </div>
              <div className='py-8 space-y-3'>
                              {product.additionalInfo && (
                  <div className='flex items-center gap-5'>
                    {/** SVG */}
                    
                    {/** Details */}
                    <div className='flex flex-col'>
                      <span>Monthly Pay: ₹{product.monthlypay}</span>
                      <span>Daily Pay: ₹{product.dailypay}</span>
                      <span>Weekly Pay: ₹{product.weeklypay}</span>
                    </div>
                  </div>
                )}

              </div>
              <div className="flex items-end flex-1">
              <Button
  className='w-full px-3 py-3 text-sm font-semibold duration-150 rounded-lg  cta-view-more-product'
  onClick={() => openContentPopup(product)}
>
More Details
</Button>



              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeContentPopup}
        contentLabel="Additional Information"
        className="cta-popup-product"
      >
        {selectedProduct && selectedProduct.imageSrc && (
          <div className="main-content">
            {/* Display image */}
            <img
              src={selectedProduct.imageSrc}
              alt="Additional Information"
              className="additional-info-image"
            />

            {/* Close button */}
            <Button
              className="cta-btn"
              variant="outlined"
              onClick={closeContentPopup}
            >
              Close
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default AvgFund;
