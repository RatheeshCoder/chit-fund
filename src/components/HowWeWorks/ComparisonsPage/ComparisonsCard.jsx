import React from "react";
import { ComparisonsCards } from "../../../data/data";

const CardComponent = () => {
  return (
    <div className="-mx-4 flex flex-wrap p-8">
      {ComparisonsCards.map((card) => (
        <div key={card.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="bg-white rounded-lg overflow-hidden shadow-md mb-4">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
