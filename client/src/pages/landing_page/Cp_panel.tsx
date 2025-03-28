import React from "react";
import Codeforces from "./Codeforces";
import Leetcode from "./Leetcode";

const Cp_panel: React.FC = () => {
  return (
    <div className="w-full h-116 flex items-center border-t border-b border-gray-600 shadow-md">
      <div className="flex w-full">
        {/* <Leetcode /> */}
        <Codeforces />
      </div>
    </div>
  );
}

export default Cp_panel;
