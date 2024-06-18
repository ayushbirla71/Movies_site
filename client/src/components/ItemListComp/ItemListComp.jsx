import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import ItemCard from "../itemCard/ItemCard";
import SmallitemCard from "../smallItemCard/SmallitemCard";

const ItemListComp = ({ title }) => {
  return (
    <div className="pl-2 flex flex-col">
      <div className="flex justify-between px-3 font-bold">
        <label className="text-white text-xs sm:text-lg">
          {title}
        </label>
        <label
          className="flex  items-center text-[8px] sm:text-sm cursor-pointer "
          type="button"
        >
          Viwe All <FaAngleRight />
        </label>
      </div>
      <div className="flex items-center gap-1 md:gap-2 lg:gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide">
        <SmallitemCard />
        <SmallitemCard />
        <SmallitemCard />
        <SmallitemCard />
        <SmallitemCard />
        <SmallitemCard />
        <SmallitemCard />
        <SmallitemCard />
        <SmallitemCard />
        <SmallitemCard />
        <SmallitemCard />
        <SmallitemCard />
      </div>
    </div>
  );
};

export default ItemListComp;
