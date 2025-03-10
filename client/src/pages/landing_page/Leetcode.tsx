import React from "react";

const Leetcode: React.FC = () => {
  const leetCodeUrl = `https://leetcard.jacoblin.cool/ps_5?ext=heatmap`;
  return (
    <div className="w-1/2 h-96 flex items-center justify-center text-white">
      <iframe
        src={leetCodeUrl}
        title="Leecode status"
        className="w-full h-96 border-none"
      ></iframe>
    </div>
  );
};

export default Leetcode;
