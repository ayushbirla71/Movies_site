import React from "react";
import SmallitemCard from "../../components/smallItemCard/SmallitemCard";

const SearchPage = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center py-3 ">
        <form className="flex text-center w-4/5">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </form>
      </div>
      <div className="">
        <label>Trending in India</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6 gap-3 px-2">
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
          <SmallitemCard />
          <SmallitemCard />
          <SmallitemCard />
        </div>
      </div>
      <div className="peginations flex items-center w-full justify-end py-3 px-3">
        <div className="join">
          <button className="join-item btn btn-xs">1</button>
          <button className="join-item btn btn-xs btn-active">2</button>
          <button className="join-item btn btn-xs">3</button>
          <button className="join-item btn btn-xs">4</button>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
