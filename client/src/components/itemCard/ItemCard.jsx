import { FaPlus } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import "./itemCard.css";

const ItemCard = () => {
  return (
    <div className=" max-w-56  overflow-hidden bg-gray-900 rounded-md">
      <div className="img-cont  cursor-pointer">
        <img
          className="bg-gradient-to-r from-gray-400 to-gray-900"
          src="https://th.bing.com/th/id/OIP.Z-f07Ifvzx6APq8qti2vMwHaE8?w=3054&h=2036&rs=1&pid=ImgDetMain"
        ></img>
      </div>
      <div className="contentBox w-full ">
        <div className="flex items-center justify-between px-2">
          <button
            className="btn w-[75%] bg-white text-black font-bold "
            type="button"
          >
            <FaPlay />
            Watch Now
          </button>
          <button className="btn bg-gray-700" type="button">
            <FaPlus className="text-white" />
          </button>
        </div>

        <div className="px-2">
          <ul className="text-white font-bold text-sm flex gap-2">
            <li>2024</li>
            <li>Hindi</li>
            <li>U/A 13+</li>
            <li>Drama</li>
          </ul>

          <p className="text text-wrap text-left text-sm">
            TODAY'S EP IS DELAYED. A tragic separation makes Sahiba find solace
            in Daljit and their son, Akeer. Years later, when her paths cross
            with Angad, will the long-lost love reignite?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
