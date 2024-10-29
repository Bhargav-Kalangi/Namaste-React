import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
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
        <div>{showItems && <ItemList ItemsData={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
