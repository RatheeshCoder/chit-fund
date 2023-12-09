import React from "react";
import googleplaystore from "../../../asset/play-store-apple.png";
import ad_img from "../../../asset/imgs/Ad_img.png";

const ProductAd = () => {
  return (
    <section className="Ad-main bg-[#0c52a6] ">
      <div className="cta-wrapper-ad">
        <div className="cta-details">
          <h1>Join any Chit Scheme today with us!</h1>

          <p>Download #VanMoh app on your mobile now</p>
          <p>One Step Solution for all your financial needs!</p>
        </div>

        <div className="cta-play-store">
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.mazenet.jeeva.vanmoh_chit_customer"
          >
            <img src={googleplaystore} alt="" />
          </a>
        </div>
      </div>

      <div className="cta-right-img">
        <img src={ad_img} alt="" />
      </div>
    </section>
  );
};

export default ProductAd;
