import React from "react";
import ItemCard from "../../components/itemCard/ItemCard";
import VideoHeader from "./../../components/videoComp/VideoHeader";


const ViewPage = () => {
    
  return (
    <div className="py-3">
      <h1 className="text-[30px] text-center py-16 font-bold ">Continue Waching</h1>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 lg:gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((itme, index) => (
          <ItemCard  key={index} />
        ))}{" "}
      </div>
    </div>
  );
};

export default ViewPage;
