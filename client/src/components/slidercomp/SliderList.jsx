import React, { useState } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function SliderList() {
  const [sliderImg, setSliderImg] = useState(0
  );

  const imgList = [
    "https://wallpapercave.com/wp/wp3173712.jpg",
    "https://th.bing.com/th/id/R.983b8085251688a15240a6ab11b97c39?rik=MlZlZUcTUEgjyw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1946050.jpg&ehk=s%2fbeqrs6stRqTs%2bO5MOpsePOb%2bQbXA2KyK8HwRy4jCw%3d&risl=&pid=ImgRaw&r=0",
    "https://wallpapercave.com/wp/wp3160287.jpg",
  ];

  // setInterval(() => {
  //   SliderListHandel("Right")
  // },10000)

  const SliderListHandel = (type) => {
    if (type === "Left") {
      if (sliderImg === 0) {
        setSliderImg(imgList.length - 1);
      }
      else {
        setSliderImg(sliderImg - 1);
      }
    }
    if (type === "Right") { 
      if (sliderImg === imgList.length - 1) {
        setSliderImg(0);
      }
      else {
        setSliderImg(sliderImg + 1);
      }
    }
    
  };

  return (
    <div className="max-h-36 md:max-h-60 w-full overflow-hidden">
      <div className="flex justify-center ">
        <label className=" flex relative left-5 max-h-36 md:max-h-60 items-center cursor-pointer hover:text-white">
          <FaAngleLeft id="Left" onClick={() => SliderListHandel("Left")} />
        </label>
        <div>
          <img
            className="overflow-hidden rounded-lg"
            src={imgList[sliderImg]}
            alt=""
          />
        </div>
        <label className=" flex relative right-5 max-h-36 md:max-h-60 items-center cursor-pointer hover:text-white">
          <FaAngleRight id="Right" onClick={() => SliderListHandel("Right")} />
        </label>
      </div>
    </div>
  );
}

export default SliderList;
