import React from "react";
import { IoMdSearch, IoIosHome, IoIosTv } from "react-icons/io";
import { MdMovieFilter } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  
  return (
    <div className="header-cont fixed sm:hidden bottom-0 w-full bg-black">
      <ul className="flex items-center justify-between px-2 rounded-lg overflow-hidden">
        <li className="flex">
          <Link to="/" className="flex-col justify-center items-center text-[8px]">
            <span className="flex items-center justify-center">
              {" "}
              <IoIosHome size={19} />
            </span>
            Home
          </Link>
        </li>
        <li className="flex">
          <Link to='/srarch' className="flex-col justify-center items-center text-[8px]">
            <span className="flex items-center justify-center">
              {" "}
              <IoMdSearch size={19} />
            </span>
            Search
          </Link>
        </li>
        <li className="flex ">
          <Link to='/movies' className="flex-col justify-center items-center text-[8px]">
            <span className="flex items-center justify-center">
              {" "}
              <MdMovieFilter size={19} />
            </span>
            Movi & Seri
          </Link>
        </li>
        <li className="flex">
          <Link to='downloads' className="flex-col justify-center items-center text-[8px]">
            <span className="flex items-center justify-center">
              {" "}
              <RiDownloadLine size={19} />
            </span>
            Downloads
          </Link>
        </li>
        <li className="flex">
          <Link className="flex-col justify-center items-center text-[8px]">
            <span className="flex items-center justify-center">
              {" "}
              <FaRegUserCircle size={19} />
            </span>
            My Scope
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileHeader;
