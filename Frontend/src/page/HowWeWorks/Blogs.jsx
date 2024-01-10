import React from "react";
import { Routes, Route } from "react-router-dom";
import Background from "../../components/blog/section1/background";
import BlogPage from "../../components/blog/section2/BlogPage";
import BlogPost from "../../components/blog/section2/BlogPost";
import { Helmet } from 'react-helmet';

function CaseStudy() {
  const isBlogPageOpen = window.location.pathname.startsWith("/blog/");

  return (
    <>
     <Helmet>
        <title>Vanmoh | Blogs</title>
      </Helmet>
    <main className="casestudy">
      {isBlogPageOpen ? null : <Background />}
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </main>
    </>
  );
}

export default CaseStudy;
