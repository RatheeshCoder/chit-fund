import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footermain from './components/footer/Footermain';
import './style/style.css'
import Share from './components/share/share';
import Gallery from './page/gallery/gallery';
import CaseStudy from './page/caseStudy/caseStudy';
import BlogPost from './components/blog/section2/BlogPost';
import Product from './page/product/product';
import Jobs from './page/jobs/Jobs';
import ContactMain from './page/Contact/Contact';
import Home from './page/Home/pages';



function App() {
  return (
    <BrowserRouter>

      <Header />
     
      <Share/>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/Product" element={<Product />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/CaseStudy" element={<CaseStudy />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/Jobs" element={<Jobs />} /> 
        <Route path="/ContactMain" element={<ContactMain />} /> 
        
      </Routes>
      <Footermain />
    </BrowserRouter>
  );
}

export default App;
