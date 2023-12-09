import React from "react";
import { Routes, Route } from "react-router-dom";
import Background from "../../components/blog/section1/background";
import BlogPage from "../../components/blog/section2/BlogPage";
import BlogPost from "../../components/blog/section2/BlogPost";

function CaseStudy() {
  const isBlogPageOpen = window.location.pathname.startsWith("/blog/");

  return (
    <main className="casestudy">
      {isBlogPageOpen ? null : <Background />}
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </main>
  );
}

export default CaseStudy;
