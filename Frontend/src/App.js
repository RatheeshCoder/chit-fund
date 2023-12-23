
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footermain from './components/footer/Footermain';
import './style/style.css'
import Share from './components/share/share';
import Gallery from './page/gallery/gallery';
import CaseStudy from './page/HowWeWorks/Blogs';
import BlogPost from './components/blog/section2/BlogPost';
import Product from './page/product/product';
import Jobs from './page/jobs/Jobs';
import ContactMain from './page/Contact/Contact';
import Home from './page/Home/pages';
import FAQsPage from './components/FAQs/FAQsPage';
import AboutUs from './page/AboutUs/CompanyProfile';
import Directors from './page/AboutUs/Directors';
import KeyBenefits from './page/AboutUs/KeyBenefits';
import Values from './page/AboutUs/Values';
import FAQs from './page/HowWeWorks/FAQs';
import ComparisonsHero from './page/HowWeWorks/Comparisons';
import ServiesMain from './page/Servies/ServiesMain';
import FloatingButton from './components/Floating/Floating';
import HowWeWork from './page/HowWeWorks/HowWeWork';

import Login from './components/Login/Login';
import MainJobs from './components/Dashboard/AddJob/MainJobs';
import BranchList from './components/Dashboard/AddBranch/Branch';
import MainDashBoard from './components/Dashboard/MainDashBoard/MainDashBoard';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <FAQsPage />
      <FloatingButton/>
      <Routes>

      <Route path="/Login" element={<Login />} />
        
        <Route path="/" element={<Home />} />

        <Route path="/MainDashBoard" element={<MainDashBoard />} />
        <Route path="/MainDashBoard/DashBoard/AddJobs" element={<MainJobs />} />
        <Route path="MainDashBoard/DashBoard/AddBranch" element={<BranchList />} />


        <Route path="/Products/Product" element={<Product />} />
        <Route path="/Products/Services" element={<ServiesMain />} />
        <Route path="/Gallery" element={<Gallery />} />


        <Route path="/about/Benefits" element={< Directors />} />
        <Route path="/about/CompanyPro" element={< AboutUs />} />
        <Route path="/about/Direction" element={<KeyBenefits />} />
        <Route path="/about/Values" element={<Values />} />



        <Route path="/how-it-works/HowWeWorks" element={<HowWeWork />} />
        <Route path="/how-it-works/Blogs" element={<CaseStudy />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/how-it-works/faq" element={<FAQs />} />
        <Route path="/how-it-works/Comparisons" element={<ComparisonsHero />} />

        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/ContactMain" element={<ContactMain />} />

      </Routes>
      <Footermain />
    </BrowserRouter>
  );
}

export default App;
