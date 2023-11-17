import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { small_fund } from '../../../data/data';
import pig_bank from '../../../asset/imgs/pig-bank.png';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function AvgFund() {
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

  const calculateColumnSum = (colIndex) => {
    return tableData.reduce((sum, row) => sum + row[colIndex], 0);
  };

  return (
    <section className="small-chit-funds">
      <div className="cta-title">
        <h1>term chit details - 10 months</h1>
      </div>

      <div className="cta-all-small-fund">
        {small_fund.map((product, index) => (
          <div key={product.id} className="cta-product-details">
            <div className="cta-fund-amount">
              <h5>chit schema</h5>
             
              <p>₹{product.amount}</p>
              <h6>return {product.timeline}</h6>
            </div>

            <div className="cta-small-fund">
              {/* <div className="cta-amount">
                <p>You pay: <span>{product.youpay}</span></p>
                <p>You get: <span>{product.youget}</span></p>
              </div> */}

              {/* <div className="cta-pay">
                <p>monthly pay:₹{product.monthlypay}</p>
                <p>weekly pay:₹{product.weeklypay}</p>
                <p>daily pay:₹{product.dailypay}</p>
              </div> */}
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
      {tableData[0] && (
        <table>
          <tbody>
            <tr>
              {tableData[0].map((heading, colIndex) => (
                <th key={colIndex}>{heading}</th>
              ))}
            </tr>
            {tableData.slice(1, Math.min(16, tableData.length)).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {tableData[0] && tableData.length > 15 && (
        <table>
          <tbody>
            <tr>
              {tableData[0].map((heading, colIndex) => (
                <th key={colIndex}>{heading}</th>
              ))}
            </tr>
            {tableData.slice(16, Math.min(31, tableData.length)).map((row, rowIndex) => (
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
