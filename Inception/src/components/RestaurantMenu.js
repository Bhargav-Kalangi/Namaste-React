import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  let { resId } = useParams();

  const menu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const dummy = "dummy data";
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
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
