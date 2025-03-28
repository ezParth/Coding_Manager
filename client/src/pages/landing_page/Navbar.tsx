import React from "react";
import "../../styles/Fonts.css"; // Assuming you have your CSS in App.css
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleLoginRoute = () => {
    navigate("/login");
  };
  return (
    <div className="">
      <div className="w-full h-14 flex items-center px-4 shadow-md border-b-[0.5px] border-gray-800">
        <span className="text-4xl font-medium text-white cursor-pointer hover:text-blue-500 moondance-font ml-44">
          coding manager
        </span>
      </div>

      <div className="w-full h-18 flex items-center px-4 shadow-md border-b-[0.5px] border-gray-800 justify-between">
        <div className="ml-44">
          <span className="text-white text-2xl cursor-pointer hover:text-gray-400 inter-font font-thin">
            🏗️ ADD
          </span>
        </div>
        <div className="flex space-x-12 mr-44">
          <span className="text-gray-400 text-[20px] cursor-pointer hover:text-gray-300 font-sans font-bold">
            About
          </span>
          <span
            className="text-gray-400 text-[20px] cursor-pointer hover:text-gray-300 font-sans font-bold"
            onClick={handleLoginRoute}
          >
            Login
          </span>
          <span className="text-gray-400 text-[20px] cursor-pointer hover:text-gray-300 font-sans font-bold">
            Support
          </span>
          <span className="text-gray-400 text-[20px] cursor-pointer hover:text-gray-300 font-sans font-bold">
            Open Source
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
