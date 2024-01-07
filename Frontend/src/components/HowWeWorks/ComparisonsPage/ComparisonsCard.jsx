import React from "react";
import { ComparisonsCards } from "../../../data/data";

const CardComponent = () => {
  return (
    <div className="flex flex-wrap p-8 -mx-4">
      {ComparisonsCards.map((card) => (
        <div key={card.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div data-aos="fade-up"   data-aos-anchor-placement="bottom-bottom"className="mb-4 overflow-hidden bg-white rounded-lg shadow-md">
            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
