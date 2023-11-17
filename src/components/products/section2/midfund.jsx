import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { mid_fund } from '../../../data/data';
import pig_bank from '../../../asset/imgs/pig-bank.png';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function MidFund() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (selectedProduct) {
      setTableData(selectedProduct.additionalInfo.tableData);
    }
  }, [selectedProduct]);

  const openContentPopup = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeContentPopup = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

 

  return (
    <section className="small-chit-funds">
      <div className="cta-title">
        <h1>term chit details - 20 months</h1>
      </div>

      <div className="cta-all-small-fund">
        {mid_fund.map((product, index) => (
          <div key={product.id} className="cta-product-details">
            <div className="cta-fund-amount">
              <h5>chit schema</h5>
              {/* <img src={pig_bank} alt={`Product ${product.id}`} /> */}
              <p>₹{product.amount}</p>
              <h6>return {product.timeline}</h6>
            </div>

            <div className="cta-small-fund">
              
            <div className="cta-pay">
                <ul>
                  <li>monthly pay:₹{product.monthlypay}</li>
                  <li>weekly pay:₹{product.weeklypay}</li>
                  <li>daily pay:₹{product.dailypay}</li>
                </ul>
                
              </div>
            </div>

            <div className="cta-view-more">
              <Button
                className='cta-btn'
                variant="outlined"
                onClick={() => openContentPopup(product)}
              >
                View More
              </Button>
            </div>
          </div>
        ))}
      </div>

    
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeContentPopup}
  contentLabel="Additional Information"
  className="cta-popup-product"
>
  {tableData.length > 0 && (
    <div className='main-table'>
      <table>
        <tbody>
          <tr>
            {tableData[0].map((heading, colIndex) => (
              <th key={colIndex}>{heading}</th>
            ))}
          </tr>
          {tableData.slice(1, 11).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {tableData.length > 11 && (
        <table>
          <tbody>
            <tr>
              {tableData[0].map((heading, colIndex) => (
                <th key={colIndex}>{heading}</th>
              ))}
            </tr>
            {tableData.slice(11).map((row, rowIndex) => (
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

export default MidFund;
