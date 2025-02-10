// import resList from "../utils/resList";
import RestoCards, { withLabelTop } from "./Restocards";

import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/resList";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Body = () => {
  const [listOfRestCards, setListOfRestCards] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [searchFilteredData, setSearchFilteredData] = useState([]);
  const onlinestatus = useOnlineStatus();
  const RestaurantLabel = withLabelTop(RestoCards);
  const { loggedInUser, setUserName } = useContext(userContext);
  // console.log("helloooo", searchFilteredData);
  useEffect(() => {
    APIDATA();
    // console.log("bhargav");
  }, []);

  const APIDATA = async () => {
    try {
      let data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4425987&lng=79.98645599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      let json = await data.json();
      // console.log(json.data.cards);
      setListOfRestCards(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setSearchFilteredData(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (e) {
      console.log("Error occurred, api got failed");
    }
  };
  if (onlinestatus === false) return <h1>You are offline</h1>;

  return listOfRestCards?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex">
        <div className="m-4">
          <input
          
            type="search"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded"
            onClick={() => {
              const SearchFilteredList = listOfRestCards.filter((res) =>
                res.info.name.toLowerCase().includes(searchData.toLowerCase())
              );
              setSearchFilteredData(SearchFilteredList);
            }}
          >
            search
          </button>
        </div>
        <div className=" text-center bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 p-1 border border-blue-700 rounded">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredData = listOfRestCards.filter(
                (res) => res.info.avgRating > 4.2
              );
              setSearchFilteredData(filteredData);
              // console.log(listOfRestCards, "hellooooooooooooo");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="m-4">
          <label className="p-2">Name:</label>
          <input
            className="border-solid border-4 border-slate-400 rounded-lg p-2 "
            type="search"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {searchFilteredData.map((item) => (
          <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
            {item.info.avgRating > 4.2 ? (
              <RestaurantLabel resData={item} />
            ) : (
              <RestoCards resData={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
