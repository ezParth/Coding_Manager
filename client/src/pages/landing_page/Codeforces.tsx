import React from "react";
import { useContext } from "react";
import { CodeforcesContext } from "../../Context/CodeforcesContext";

const Codeforces: React.FC = () => {
    const {    
      name,
      problemCount,
      contestRating,
      maxRating,
      rank,
      country,
      contribution,
    profilePic,} = useContext(CodeforcesContext)

  return (
    <div className="w-1/2 h-96 flex text-white ">
      <div className="w-160 h-96 border-2 border-gray-800 bg-[#101010] text-white flex flex-col rounded-md p-5">
        {/* Logo & Username Container */}
        <div className="flex items-center gap-x-4">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png?f=webp&w=256"
            alt="Codeforces Logo"
            className="h-10 w-10"
          />
          <p className="text-xl font-semibold">{name || "parth_cf"}</p>
        </div>

        {/* Profile & Stats Section */}
        <div className="flex mt-6 gap-x-10">
          {/* Profile Picture (Below Logo & Left-Aligned) */}
          <img
            src={profilePic}
            alt="Profile"
            className="w-20 h-20 rounded-md border-2 border-gray-700 mt-1"
          />

          {/* Stats (Right-Aligned with 15px Gap) */}
          <div className="flex flex-col text-left ml-4 gap-y-1">
            <p className="text-lg font-semibold">
             Name:  <span className="text-orange-400">{name}</span>
            </p>
            <p className="text-lg font-semibold">
              Problem Solved:  <span className="text-red-300">{problemCount}</span>
            </p>
            <p className="text-lg font-semibold">
              Contest Rating:  <span className="text-blue-400">{contestRating}</span>
            </p>
            <p className="text-lg font-semibold">
              Max Rating:  <span className="text-green-400">{maxRating}</span>
            </p>
            <p className="text-lg font-semibold">
            Rank:  <span className="text-pink-400">{rank}</span>
            </p>
            <p className="text-lg font-semibold">
              Country:  <span className="text-red-400">{country}</span>
            </p>
            <p className="text-lg font-semibold">
            contribution:  <span className="text-yellow-400">{contribution}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Codeforces;
