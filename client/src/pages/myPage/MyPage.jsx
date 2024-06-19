import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import ListItemsCard from "../../components/listItemCard/ListItemsCard";
import ItemListComp from "../../components/ItemListComp/ItemListComp";
const MyPage = () => {
  return (
    <div className="flex flex-col py-6 md:py-20 md:pr-12 md:pl-3 gap-4">
      <div className="flex flex-row pb-9 justify-between border-b-[1px] border-b-slate-800">
        <div className="flex flex-col text-white text-md">
          <label className="flex  items-center justify-start align-bottom font-bold text-xs md:text-lg md:gap-2">
            <h1 className="">Subscribe to enjoy Disney + Hotstar</h1>
            <FaAngleRight size={20} />
          </label>
          <label>+9181*******7</label>
        </div>

        <div className="flex flex-col ">
          <div className="flex lg:flex-row flex-col gap-4 w-full">
            <div className="flex flex-col justify-center items-center gap-1">
              <button className="btn btn-xs sm:btn-sm md:btn-md text-white md:text-lg md:px-20 bg-blue-700  w-full">
                Subscribe
              </button>
              <label className="text-xs sm:text-sm">Plans Start at 299</label>
            </div>
            <button className="flex btn btn-xs sm:btn-sm md:btn-md text-white md:text-lg bg-slate-800">
              <IoSettingsOutline />
              Help & Settings
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex w-full justify-between">
          <label className="font-bold">Profiles</label>
          <button className="flex items-center gap-1 md:text-lg font-bold">
            <RiEdit2Fill />
            Edit
          </button>
        </div>
        <div className="flex py-5 px-3">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>

      <ListItemsCard title={"Watchlist"} />
      <ItemListComp title={"Continue Watching for User"} />
    </div>
  );
};

export default MyPage;
