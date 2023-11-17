import React from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <>
      <div className="product">
         <div className="container5">
            <h1>Other Financial Products vs <span> Our Product</span></h1>

            <p>The comparison of our ideal financial products with other financial products for various financial needs.</p>

         </div>

         <div className="container6">
               <div className="wrapper2">
                <h2>Other Brands</h2>
                
                <ul>
                    <li className='li1'><AccountBalanceIcon className="custom-icon-color"/>High interest loan & low interest returns</li>
                    <li className='li1'><AccountBalanceIcon className="custom-icon-color" />     Upto 4%  of returns</li>
                    <li className='li1'><AccountBalanceIcon className="custom-icon-color"/>     Tedious disbursement process</li>
                    <li className='li1'><AccountBalanceIcon className="custom-icon-color"/>     More security documents for loan</li>
                </ul>

               </div>
               <div className="wrapper3">
                  <h2>#VANMOH</h2>
                   
                   <ul>
                 
                    <li className='li1' typeof='none'><SavingsIcon className="custom-icon-color"/>     Low interest loan & high interest returns</li>
                    <li className='li1'  typeof='none'><SavingsIcon className="custom-icon-color"/> Upto 12%  of returns</li>
                    <li className='li1'><SavingsIcon className="custom-icon-color"/>     Simple disbursement process</li>
                    <li className='li1'><SavingsIcon className="custom-icon-color"/>     Unsecure loan</li>
                 
                    </ul>
               </div>
         </div>

         <div className="container7">
                   <button><Link to="/Product">Know More</Link></button>
         </div>
      </div>
    </>
  )
}

export default Product;