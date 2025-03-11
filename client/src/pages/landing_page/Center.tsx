import React, { useContext } from "react";
import "../../styles/Fonts.css";
import { CPContext } from "../../Context/CPContext";

const Center: React.FC = () => {

  const {cfHandle, setcfHandle, leetcodeHandle, setleetcodeHandle} = useContext(CPContext)

  return (
    <div className="w-full flex items-center justify-center mt-16 pb-10">
      <div className="flex flex-col text-center w-4/5">
        {/* Heading */}
        <div className="text-4xl text-gray-100 font-sans font-bold">
          <p>
            ADD YOUR{" "}
            <a
              href="https://codeforces.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-50 hover:text-blue-400 cursor-pointer"
            >
              Codeforces
            </a>{" "}
            AND{" "}
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-gray-50 hover:text-blue-400 cursor-pointer"
            >
              Leetcode
            </a>{" "}
            PROFILE
          </p>
        </div>

        {/* Input Fields & Button */}
        <div className="flex flex-col items-center justify-center pt-8 space-y-4">
          {/* Codeforces Input */}
          <input
            type="text"
            placeholder="Add your Codeforces Profile"
            className="w-4/5 p-4 text-gray-200 bg-transparent border-2 border-gray-600 placeholder-gray-700 font-medium rounded-md focus:outline-none hover:border-gray-300"
            value={cfHandle}
            onChange={e => setcfHandle(e.target.value)}
          />

          {/* Leetcode Input */}
          <input
            type="text"
            placeholder="Add your Leetcode Profile"
            className="w-4/5 p-4 text-gray-200 bg-transparent border-2 border-gray-600 placeholder-gray-700 font-medium rounded-md focus:outline-none hover:border-gray-300"
            value={leetcodeHandle}
            onChange={e => setleetcodeHandle(e.target.value)}
          />

          {/* Create Button */}
          <button className="w-4/5 p-4 bg-[#ff6423] text-white text-lg font-semibold rounded-md cursor-pointer hover:bg-[#ff6433]" onClick={}>
            ADD YOUR ACCOUNT +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Center;
