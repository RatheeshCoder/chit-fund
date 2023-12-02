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
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className='relative max-w-xl mx-auto sm:text-center'>
          <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
          ChitFunds 608 Days !
          </h3>
          <div className='mt-3 max-w-xl'>
            <p>
            Fuel your financial destiny with ChitFunds—an odyssey to unmatched prosperity. Join our community for strategic investments and unparalleled wealth growth.
            </p>
          </div>
        </div>
        <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
          {mid_fund.map((product, idx) => (
            <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
              <div>
                <h4 className='text-indigo-600 font-medium text-center text-black'>
                  Chit Schema
                </h4>
                <p className='mt-4 text-gray-800 text-3xl font-semibold'>
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
              <div className="flex-1 flex items-end">
              <Button
  className=' cta-view-more-product px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150  '
  onClick={() => openContentPopup(product)}
>
  Get Started
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
        {selectedProduct && selectedProduct.additionalInfo && (
          <div className='main-table'>
            <table>
              <tbody>
                <tr>
                  {selectedProduct.additionalInfo.tableData[0].map((heading, colIndex) => (
                    <th key={colIndex}>{heading}</th>
                  ))}
                </tr>
                {selectedProduct.additionalInfo.tableData.slice(1, Math.min(11, selectedProduct.additionalInfo.tableData.length)).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td key={colIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {selectedProduct.additionalInfo.tableData[0] && selectedProduct.additionalInfo.tableData.length > 15 && (
              <table>
                <tbody>
                  <tr>
                    {selectedProduct.additionalInfo.tableData[0].map((heading, colIndex) => (
                      <th key={colIndex}>{heading}</th>
                    ))}
                  </tr>
                  {selectedProduct.additionalInfo.tableData.slice(11, Math.min(31, selectedProduct.additionalInfo.tableData.length)).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, colIndex) => (
                        <td key={colIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
        <Button className='cta-btn' variant="outlined" onClick={closeContentPopup}>
          Close
        </Button>
      </Modal>
    </section>
  );
}

export default AvgFund;
