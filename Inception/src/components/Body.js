// import resList from "../utils/resList";
import RestoCards from "./Restocards";

import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestCards,setListOfRestCards]=useState([]);
  // console.log(listOfRestCards)
 useEffect(()=>{
APIDATA();
 })
 const APIDATA=async()=>{
  let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  let json=await data.json();
   
   setListOfRestCards(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 }

 
    return (listOfRestCards.length===0)?<Shimmer/>: (
      <div className="body">
        <button className="filter-btn" onClick={()=>{
          const filteredData=listOfRestCards.filter((res) =>res.info.avgRating >4.1)
          setListOfRestCards(filteredData)
        

        }}>Top Rated Restaurants</button>
        <div className="resto-cards">
          {
            listOfRestCards.map((item)=>(
              <RestoCards key={item.info.id} resData={item} />
            ))
          }
         
         
        </div>
      </div>
    );
  };

  export default Body;