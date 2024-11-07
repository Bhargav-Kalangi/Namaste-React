import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestoCards = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { loggedInUser } = useContext(userContext);
  return (
    <div className="w-[220px] m-4 p-4 bg-slate-200  rounded-lg hover:bg-slate-400 ">
      <img
        className="w-48 h-32 rounded-lg    "
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold px-1">{name}</h3>
      <h4 className=" px-1">{cuisines.join(" ,")}</h4>
      <h4 className=" px-1">{costForTwo}</h4>
      <h4 className=" px-1 ">{avgRating} stars</h4>
      <h4 className=" px-1 ">Name: {loggedInUser} </h4>
    </div>
  );
};
//HOC
export const withLabelTop = (RestoCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-3 m-3 rounded-lg">
          Top rated
        </label>
        <RestoCards {...props} />
      </div>
    );
  };
};
export default RestoCards;
