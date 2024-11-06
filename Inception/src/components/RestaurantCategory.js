import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const [showData, setShowData] = useState(false);
  const handleClick = () => {
    setShowIndex();
    setShowData(!showData);
  };
  console.log(dummy, "from restaurabt category");
  return (
    <div>
      <div className="w-6/12 mx-auto shadow-2xl bg-gray-200 my-8 p-6  rounded-md">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        <div>
          {showItems && showData && (
            <ItemList ItemsData={data.itemCards} dummy={dummy} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
