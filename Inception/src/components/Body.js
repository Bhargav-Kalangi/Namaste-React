// import resList from "../utils/resList";
import RestoCards from "./Restocards";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/resList";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestCards, setListOfRestCards] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [searchFilteredData, setSearchFilteredData] = useState([]);
  const onlinestatus = useOnlineStatus();
  // console.log("helloooo");
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

  return listOfRestCards.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestCards.filter(
              (res) => res.info.avgRating > 4.2
            );
            setSearchFilteredData(filteredData);
            console.log(listOfRestCards, "hellooooooooooooo");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-cards">
        {searchFilteredData.map((item) => (
          <Link key={item.info.id} to={"/restaurants/" + item.info.id}>
            <RestoCards resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
