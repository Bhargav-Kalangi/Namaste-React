import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ ItemsData, dummy }) => {
  // console.log(ItemsData);
  // console.log(dummy, "from itemlist");
  const dispatch = useDispatch();
  const handleAddProducts = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {ItemsData.map((item) => {
        return (
          <div
            className="flex justify-between  border-gray-400 border-b-4"
            key={item.card.info.id}
          >
            <div className="my-auto text-left py-6 w-9/12">
              <span className="font-bold text-lg">{item.card.info.name}</span>
              <p> ₹ {item.card.info.price / 100}</p>
              <p>{item.card.info.description}</p>
            </div>

            <div className=" w-2/12 mx-2 my-2">
              <div className="absoulte bg-white shadow-lg hover:bg-slate-400 m-auto ">
                <button onClick={() => handleAddProducts(item)}>Add +</button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
