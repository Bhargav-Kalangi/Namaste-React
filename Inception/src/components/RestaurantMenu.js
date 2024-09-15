import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { Res_API } from "../utils/constants";
const RestaurantMenu = () => {
  let { resId } = useParams();
  console.log(resId, "helloooo");
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    menuList();
  }, []);
  const menuList = async () => {
    const MenuData = await fetch(Res_API + resId);
    const Jsondata = await MenuData.json();
    console.log(Jsondata.data.cards[2].card.card.info);
    setMenu(Jsondata.data);
    //  Jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards
    // .cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
    //.groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  };
  // console.log();

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
