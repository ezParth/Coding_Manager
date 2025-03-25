import React, { useContext } from "react";
import { CPContext } from "../../Context/CPContext";

const Leetcode: React.FC = () => {
  const { leetcodeHandle } = useContext(CPContext)
  
  // const leetCodeUrl = `https://leetcard.jacoblin.cool/${leetcodeHandle}?ext=heatmap`;
  const leetCodeUrl = `https://leetcard.jacoblin.cool/${leetcodeHandle}?ext=heatmap&theme=dark`;
  return (
    <div className="w-1/2 h-96 flex items-center justify-center text-white bg-black">
      <iframe
        src={leetCodeUrl}
        title="Leecode status"
        className="w-full h-96 border-none"
      ></iframe>
    </div>
  );
};

export default Leetcode;
