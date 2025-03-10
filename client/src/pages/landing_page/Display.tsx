import React from "react";
import Image1 from "../../assets/bored-ape-1/7748166.jpg"; // Update the correct path
import Image2 from "../../assets/30875866_7742218.jpg"
import Image3 from "../../assets/31798960_7763254.jpg"

const Display: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center font-sans font-bold text-gray-200 text-4xl pt-5 underline">
        UPLOAD YOUR PROJECTS HERE
      </div>
    <div className="pt-5 pb-10 pl-40 pr-40 mt-18">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="text-white h-96 w-110 rounded-[10px] border-2 border-gray-700 shadow-lg">
          <img src={Image1} alt="Display Image" className="w-full h-full object-cover rounded-[10px]" />
        </div>
        <div className="text-white h-96 w-110 rounded-[10px] border-2 border-gray-700 shadow-lg">
          <img src={Image2} alt="Display Image" className="w-full h-full object-cover rounded-[10px]" />
        </div>
        <div className="text-white h-96 w-110 rounded-[10px] border-2 border-gray-700 shadow-lg">
          <img src={Image3} alt="Display Image" className="w-full h-full object-cover rounded-[10px]" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Display;
