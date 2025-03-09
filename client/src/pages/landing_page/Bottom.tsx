import React from "react";

const Bottom: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="ml-40 mb-10">
        <span className="text-2xl text-gray-200 underline font-sans font-bold mr-6 cursor-pointer hover:text-amber-200">
          Home
        </span>
        <span className="text-2xl text-gray-200 font-sans font-bold mr-10 cursor-pointer hover:text-amber-200">
          Login
        </span>
        <span className="text-2xl text-gray-400 font-sans font-bold mr-6 cursor-pointer hover:text-amber-100">
          Settings
        </span>
        <span className="text-2xl text-gray-400 underline hover:text-blue-500 font-sans font-bold mr-6 cursor-pointer">
          Support
        </span>
      </div>
      <div className="ml-40 mb-20">
        <p className="text-2xl text-gray-500 font-sans">
          This website is open-source and you can contribute to{" "}
          <span className="text-gray-300 hover:text-blue-500 underline font-400 cursor-pointer">
            Github
          </span>{" "}
          here.
        </p>
      </div>
    </div>
  );
};

export default Bottom;
