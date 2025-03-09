import React from "react";

const Codeforces: React.FC = () => {
  return (
    <div className="w-1/2 h-96 flex items-center justify-center text-white">
      <div className="w-full h-96 border-none bg-black text-white flex ">
        {/* Logo & Username Container */}
        <div className="flex ml-4 mt-4 gap-x-4">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png?f=webp&w=256"
            alt="Codeforces Logo"
            className="h-10 w-10"
          />
          <p className="text-xl font-semibold mt-1">parth_cf</p>
        </div>
      </div>
    </div>
  );
};

export default Codeforces;
