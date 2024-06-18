import React from 'react';
import { AiFillCaretRight } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

const VideoHeader = () => {
  return (
      <div className="pt-5 sm:pt-1">
        <video
          className="h-full w-full
          sticky top-0
        "
          poster="path-to-poster.jpg"
          muted
          autoPlay
        >
          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="flex relative bottom-28  sm:bottom-36 pl-3 h-0 ">
          <div className="flex flex-col items-start justify-center gap-1 sm:gap-4 max-w-xs md:max-w-sm">
            <div className="font-bold flex flex-col text-white gap-1 sm:gap-3">
              <h1 className=" text-lg sm:text-[35px] text-red-500 ">
                BAAGHI 3
              </h1>
              <label>Popular with action viewers</label>
            </div>
            <div className="font-bold text-xs sm:text-sm">
              <ul className="flex gap-1 sm:gap-2 text-white">
                <li>2020</li>
                <li>2h 24m</li>
                <li>Hindi</li>
                <li>
                  <button className="">U/A 13+</button>
                </li>
              </ul>
            </div>
            <p className="text-wrap items-start text-xs sm:text-sm">
              In a twisted turn of events, when a group of deadly terrorists
              kidnap Ronnie's elder brother in Syria, he sets off on a mission
              to bring him back.
            </p>
            <div className="flex gap-2 text-center items-center text-white text-xs sm:text-sm">
              <label>Action</label>{" "}
              <span className="w-[2px] h-4 rounded-md bg-slate-500"></span>{" "}
              <label>Action</label>{" "}
              <span className="w-[2px] h-4 rounded-md bg-slate-500"></span>{" "}
              <label>Action</label>{" "}
              <span className="w-[2px] h-4 rounded-md bg-slate-500"></span>{" "}
              <label>Action</label>
            </div>
            <div className="gap-1 flex w-full justify-stretch items-center">
              <button className="btn size-min sm:size-auto text-xs sm:text-sm sm:w-4/6 bg-slate-300 text-black font-bold w-4/6">
                <AiFillCaretRight />
                <label>Subscribe to Watch</label>
              </button>
              <button className="btn text-xs sm:text-sm">
                <FaPlus />
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
  );
}

export default VideoHeader;