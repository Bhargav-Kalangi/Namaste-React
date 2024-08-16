import resList from "../utils/resList";
import RestoCards from "./Restocards";
import { useState } from "react";
const Body = () => {
  const [listOfRestCards,setListOfRestCards]=useState(resList);
  console.log(listOfRestCards)
 
    return (
      <div className="body">
        <button className="filter-btn" onClick={()=>{
          const filteredData=listOfRestCards.filter((res) =>res.info.avgRating >4.2)
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