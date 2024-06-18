import React from "react";
import { GiSelfLove } from "react-icons/gi";
import { MdLink } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

function SmallitemCard() {
  return (
    <div className=" md:max-w-28 min-w-28 sm:min-w-32 md:min-w-48 overflow-hidden origin-center hover:rotate-6 cursor-pointer shadow-2xl rounded-md p-1">
      <div className=" flex flex-col items-end ">
        <label className="relative text-white font-bold px-1 top-5 text-xs ">
          Hindi
        </label>
        <img
          className="image-full overflow-auto rounded-md"
          src="https://th.bing.com/th/id/OIP.VtttQ1HHa68G8eaMoWlVrAHaK-?rs=1&pid=ImgDetMain"
          alt="movies logo"
        />
      </div>
      <div className="pb-1">
        <label className="text-[8px] sm:text-xs md:text-sm font-bold">
          Light (2024){" "}
        </label>
        <div className="flex justify-between text-[6px] sm:text-xs ">
          <label>2024</label>
          <div className="flex gap-1 items-center">
            <GiSelfLove />
            <MdLink size={10} />
            <label className="flex items-center gap-1">
              <FaStar size={9} /> 2.5
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallitemCard;
