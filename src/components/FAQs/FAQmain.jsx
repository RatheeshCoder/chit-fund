import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FAQsPage from "./FAQsPage";

const FAQmain = () => {
  return (
    <Router>
      <div className="leading-relaxed mt-12 mx-4 md:mx-8">
        <div className="fixed bottom-4 right-4">
          <Link
            to="/faqs"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          ></Link>
        </div>

        <Route path="/faqs" component={FAQsPage} />
      </div>
    </Router>
  );
};

export default FAQmain;
