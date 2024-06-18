import React from "react";
import movies from "../../assets/videos/demovideo.mp4";

import ItemListComp from "../../components/ItemListComp/ItemListComp";
import VideoHeader from "./../../components/videoComp/VideoHeader";
import ItemCard from "../../components/itemCard/ItemCard";

const MoviesList = () => {
  return (
    <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3">
      <VideoHeader />
      <div>
        <div>
          <ItemListComp title={"More Like This"} />
        </div>
        <ItemCard/>
      </div>
    </div>
  );
};

export default MoviesList;
