import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Center from "./Center";
import Display from "./Display";
import Bottom from "./Bottom";
import SideBar from "./SideBar";
import Cp_panel from "./Cp_panel";
import ShowProject from "./ShowProject";

const Home: React.FC = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.add("overflow-x-hidden"); // Prevent horizontal scroll
    return () => document.body.classList.remove("overflow-x-hidden");
  }, []);

  return (
    <div className="relative flex min-h-screen min-w-0 overflow-x-hidden">
      {/* Sidebar on the left */}
      <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />

      {/* Main Content Area */}
      <div
        className={`flex flex-col flex-1 ${isSideBarOpen ? "opacity-50" : ""}`}
      >
        <div className="fixed top-0 left-0 w-full z-30 backdrop-blur-[3px]">
          <Navbar />
        </div>
        <div className="pt-24">
          <Center />
          <Cp_panel />
          <ShowProject />
          <Display />
          <Bottom />
        </div>
      </div>

      {/* 🔥 Orange Glow Effect at Right Edge */}
      <div
        className="absolute top-1/4 right-[-52%] h-[70%] w-[105%] pointer-events-none z-[9999]"
        style={{
          background:
            "radial-gradient(circle, #ff7300 30%, #ff8c00 50%, rgba(255,120,0,0.8) 65%, rgba(255,100,0,0.6) 75%, rgba(255,80,0,0.4) 85%, transparent 95%)",
          transform: "translate(50%, -50%)",
          borderRadius: "10%",
          filter: "blur(25px)",
        }}
      />
    </div>
  );
};

export default Home;
