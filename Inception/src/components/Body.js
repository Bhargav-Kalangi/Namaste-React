// import resList from "../utils/resList";
import RestoCards from "./Restocards";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/resList";
const Body = () => {
  const [listOfRestCards, setListOfRestCards] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [searchFilteredData, setSearchFilteredData] = useState([]);

  useEffect(() => {
    APIDATA();
  });
  const APIDATA = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.44840&lng=79.98880&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    // console.log(json.data.cards);
    setListOfRestCards(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchFilteredData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
            setListOfRestCards(filteredData);
            console.log(filteredData, "hellooooooooooooo");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-cards">
        {searchFilteredData.map((item) => (
          <RestoCards key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
