import React, { useContext, useEffect, useState } from "react";
import CodeforcesLogo from "../../assets/logo/code-forces.svg";
import LeetcodeLogo from "../../assets/logo/leetcode.svg";
import { motion } from "framer-motion";
import "../../styles/Fonts.css";
import { CPContext } from "../../Context/CPContext";
import codeforces_API from "../../api/codeforces";
import { CodeforcesContext } from "../../Context/CodeforcesContext";
import image1 from "../../assets/31798960_7763254.jpg";

const Center: React.FC = () => {
  const { cfHandle, setcfHandle, leetcodeHandle, setleetcodeHandle } =
    useContext(CPContext);

  const [isLoading, setIsLoading] = useState(false);
  const [cfFocused, setCfFocused] = useState(false);
  const [lcFocused, setLcFocused] = useState(false);

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
    handleSetHandle();
  }, []);

  const handleSetHandle = async () => {
    try {
      setIsLoading(true);
      const handle = localStorage.getItem("CFHANDLE");
      let res;
      if (handle) {
        res = await codeforces_API(handle);
      } else {
        res = await codeforces_API(cfHandle);
      }

      if (res.data && res.data.result && res.data.result.length > 0) {
        const userData = res.data.result[0];

        setName(userData.handle || "");
        setContestRating(userData.rating ?? 0);
        setMaxRating(userData.maxRating ?? 0);
        setRank(userData.rank || "");
        setCountry(userData.country || "India");
        setContribution(userData.contribution ?? 0);
        setProblemCount(res.numberOfProbelms || 0);
        setProfilePic(userData.avatar ?? image1);
      } else {
        resetValues();
      }
    } catch (error) {
      console.log("Error in Center.tsx:", error);
      resetValues();
    } finally {
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
    <motion.div
      className="w-full flex items-center justify-center mt-16 pb-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col text-center w-4/5 bg-black/30 backdrop-blur-md rounded-xl shadow-2xl p-8"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl text-gray-100 font-sans font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
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
            className="underline text-gray-50 hover:text-yellow-300 cursor-pointer"
          >
            Leetcode
          </a>{" "}
          PROFILE
        </motion.h1>

        {/* Input Fields & Button */}
        <motion.div
          className="flex flex-col items-center justify-center pt-8 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Codeforces Input */}
          <motion.div className="relative w-4/5">
            <motion.div
              animate={{
                x: cfFocused ? 4 : 0,
                y: cfFocused ? -4 : 0,
                scale: cfFocused ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute left-3 top-3 w-8 h-8"
            >
              <img
                src={CodeforcesLogo}
                alt="Codeforces Logo"
                className="w-full h-full"
              />
            </motion.div>
            <motion.input
              type="text"
              placeholder="Add your Codeforces handle"
              className="pl-14 w-full p-4 text-gray-200 bg-transparent border-2 border-gray-600 placeholder-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              value={cfHandle}
              onFocus={() => setCfFocused(true)}
              onBlur={() => setCfFocused(false)}
              onChange={handleCFHandle}
            />
          </motion.div>

          {/* Leetcode Input */}
          <motion.div className="relative w-4/5">
            <motion.div
              animate={{
                x: lcFocused ? 4 : 0,
                y: lcFocused ? -4 : 0,
                scale: lcFocused ? 1.1 : 1,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute left-3 top-3 w-8 h-8"
            >
              <img
                src={LeetcodeLogo}
                alt="Leetcode Logo"
                className="w-full h-full"
              />
            </motion.div>
            <motion.input
              type="text"
              placeholder="Add your Leetcode handle"
              className="pl-14 w-full p-4 text-gray-200 bg-transparent border-2 border-gray-600 placeholder-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              value={leetcodeHandle}
              onFocus={() => setLcFocused(true)}
              onBlur={() => setLcFocused(false)}
              onChange={(e) => setleetcodeHandle(e.target.value)}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            className={`w-4/5 p-4 text-white text-lg font-semibold rounded-md transition-all duration-300
              ${
                isLoading
                  ? "!bg-gray-500 cursor-not-allowed"
                  : "!bg-[#FF6423] hover:!bg-[#FF6433]"
              }`}
            onClick={handleSetHandle}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? "Loading..." : "ADD YOUR ACCOUNT +"}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Center;
