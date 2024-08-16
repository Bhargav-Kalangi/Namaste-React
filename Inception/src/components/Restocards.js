import { CDN_URL } from "../utils/constants";

const RestoCards = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    return (
      <div className="res-cards">
        <img
          className="img-size"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(" ,")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>

      </div>
    );
  };

  export default RestoCards