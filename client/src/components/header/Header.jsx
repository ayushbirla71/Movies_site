import { Link } from "react-router-dom";
import { IoMdSearch, IoIosHome, IoIosTv } from "react-icons/io";
import { MdMovieFilter, MdOutlineSportsSoccer } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import "./header.css";

export const Header = () => {
  return (
    <>
      <div className="mobile-header-logo sm:hidden flex py-2 pl-2 fixed w-full">
        <img src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" />
      </div>
      <div className="header-cont hidden sm:flex flex-col h-screen pl-1 gap-10 fixed">
        <div className="top-0 flex flex-col gap-2 pl-1">
          <img
            className="p-1 w-12 sm:w-14 md:w-16 pl-3"
            src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
          />
          <Link>
            <button className="flex items-center  text-[13px] rounded-full px-2 bg-[rgba(255,204,117,.1)] text-[#ffcc75]">
              Subscribe <FaAngleRight />
            </button>
          </Link>
        </div>

        <div className="nav-Items ">
          <ul className="">
            <li className="p-5">
              <Link
                to="/profile"
                className=" transition ease-in-out hover:scale-110 hover:-translate-x-1 flex items-center cursor-pointer hover:text-white text-gray-300 gap-2"
              >
                <FaRegUserCircle size={22} />
                <span className="hidden navText text-sm font-bold">
                  My Scope
                </span>
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="search"
                className="transition ease-in-out hover:scale-110 hover:-translate-x-1 flex items-center cursor-pointer hover:text-white text-gray-300 gap-2"
              >
                <IoMdSearch size={22} />
                <span className="hidden navText text-sm font-bold">Search</span>
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="/"
                className="transition ease-in-out hover:scale-110 hover:-translate-x-1 flex items-center cursor-pointer hover:text-white text-gray-300 gap-2"
              >
                <IoIosHome size={22} />
                <span className="hidden navText text-sm font-bold">Home</span>
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="Tv"
                className="transition ease-in-out hover:scale-110 hover:-translate-x-1 flex items-center cursor-pointer hover:text-white text-gray-300 gap-2"
              >
                <IoIosTv size={22} />
                <span className="hidden navText text-sm font-bold">Series</span>
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="movies"
                className="transition ease-in-out hover:scale-110 hover:-translate-x-1 flex items-center cursor-pointer hover:text-white text-gray-300 gap-2"
              >
                <MdMovieFilter size={22} />
                <span className="hidden navText text-sm font-bold">Movies</span>
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="sports"
                className="transition ease-in-out hover:scale-110 hover:-translate-x-1 flex items-center cursor-pointer hover:text-white text-gray-300 gap-2"
              >
                <MdOutlineSportsSoccer size={22} />
                <span className="hidden navText text-sm font-bold">
                  {" "}
                  Sports
                </span>
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="categories"
                className="transition ease-in-out hover:scale-110 hover:-translate-x-1 flex items-center cursor-pointer hover:text-white text-gray-300 gap-2"
              >
                <BiCategory size={22} />
                <span className="hidden navText text-sm font-bold">
                  Categories
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
