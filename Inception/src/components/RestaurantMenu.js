import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  let { resId } = useParams();
  console.log(resId, "helloooo");
  const menu = useRestaurantMenu(resId);

  if (menu === null) return <Shimmer />;
  const { name, costForTwo, cuisines } = menu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  console.log(
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
  );
  return (
    <div>
      <h1>Restaurant menu list</h1>

      <h3>{name}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>Rs: {costForTwo / 100}</h3>
    </div>
  );
};
export default RestaurantMenu;
