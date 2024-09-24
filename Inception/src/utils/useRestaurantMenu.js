import { useState, useEffect } from "react";
import { Res_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    menuList();
  }, []);

  const menuList = async () => {
    const MenuData = await fetch(Res_API + resId);
    const Jsondata = await MenuData.json();
    console.log(Jsondata.data.cards[2].card.card.info);
    setMenu(Jsondata.data);
  };
  return menu;
};

export default useRestaurantMenu;
