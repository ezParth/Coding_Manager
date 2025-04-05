import React, { useContext, useEffect, useState } from "react";
import "../../styles/Fonts.css";
import { CPContext } from "../../Context/CPContext";
import codeforces_API from "../../api/codeforces";
import { CodeforcesContext } from "../../Context/CodeforcesContext";
import image1 from "../../assets/31798960_7763254.jpg";

const Center: React.FC = () => {
  const { cfHandle, setcfHandle, leetcodeHandle, setleetcodeHandle } =
    useContext(CPContext);

  const [isLoading, setIsLoading] = useState(false);

  const {
    setName,
    setContestRating,
    setMaxRating,
    setRank,
    setCountry,
    setContribution,
    setProblemCount,
    setProfilePic,
  } = useContext(CodeforcesContext);

  useEffect(() => {
    handleSetHandle()
  }, [])

  const handleSetHandle = async () => {
    try {
      setIsLoading(true);
      const handle = localStorage.getItem('CFHANDLE')
      let res
      if(handle){
         res = await codeforces_API(handle);
      }else{
         res = await codeforces_API(cfHandle);
      }

      console.log("response here", res.numberOfProbelms);
      console.log("response here", res.data);

      if (res.data && res.data.result && res.data.result.length > 0) {
        const userData = res.data.result[0];

        // Setting values with default fallback
        setName(userData.handle || "");
        setContestRating(userData.rating ?? 0);
        setMaxRating(userData.maxRating ?? 0);
        setRank(userData.rank || "");
        setCountry(userData.country || "India");
        setContribution(userData.contribution ?? 0);
        setProblemCount(res.numberOfProbelms || 0);
        setProfilePic(userData.avatar ?? image1);
      } else {
        console.log("Invalid response format", res.data);
        resetValues();
      }
    } catch (error) {
      console.log("Error in Center.tsx:", error);
      resetValues();
    } finally{
      setIsLoading(false);
    }
  };

  const handleCFHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setcfHandle(value);
    localStorage.setItem("CFHANDLE", value);
  };

  useEffect(() => {
    const savedHandle = localStorage.getItem("CFHANDLE");
    if (savedHandle) {
      setcfHandle(savedHandle);
    }
  }, [setcfHandle]);
  
  

  const resetValues = () => {
    setName("");
    setContestRating(0);
    setMaxRating(0);
    setRank("");
    setCountry("");
    setContribution(0);
    setProblemCount(0);
    setProfilePic("");
  };

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
            // onChange={(e) => setcfHandle(e.target.value)}
            onChange={handleCFHandle}
          />

          {/* Leetcode Input */}
          <input
            type="text"
            placeholder="Add your Leetcode Profile"
            className="w-4/5 p-4 text-gray-200 bg-transparent border-2 border-gray-600 placeholder-gray-700 font-medium rounded-md focus:outline-none hover:border-gray-300"
            value={leetcodeHandle}
            onChange={(e) => setleetcodeHandle(e.target.value)}
          />

          {/* Create Button */}
          <button
           className={`w-4/5 p-4 text-white text-lg font-semibold rounded-md cursor-pointer  
            ${isLoading ? "!bg-gray-500 cursor-not-allowed" : "!bg-[#FF6423] hover:!bg-[#FF6433]"}`}
            onClick={handleSetHandle}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "ADD YOUR ACCOUNT +"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Center;
