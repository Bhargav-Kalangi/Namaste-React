import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  let { resId } = useParams();
  console.log(resId, "helloooo");
  const menu = useRestaurantMenu(resId);

  if (menu === null) return <Shimmer />;
  const { name, costForTwo, cuisines } = menu?.cards[2]?.card?.card?.info;

  const categories =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => {
      return (
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  // console.log(categories, "hellooo categories");
  return (
    <div className="text-center">
      <h3 className="font-bold my-6 text-2xl">{name}</h3>
      {categories.map((category) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
