import resList from "../utils/resList";
import RestoCards from "./Restocards";
const Body = () => {
    return (
      <div className="body">
        <div className="search-data">search</div>
        <div className="resto-cards">
          {
            resList.map((item)=>(
              <RestoCards key={item.info.id} resData={item} />
            ))
          }
         
         
        </div>
      </div>
    );
  };

  export default Body;