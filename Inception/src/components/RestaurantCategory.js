import React from "react";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    /**Accordion header created */
    <div className="w-6/12 mx-auto shadow-2xl bg-gray-200 my-8 p-6 flex justify-between rounded-md">
      <span className="font-bold text-lg">
        {data.title}({data.itemCards.length})
      </span>
      <span>⬇</span>
    </div>
  );
};

export default RestaurantCategory;
