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
    document.body.classList.add("overflow-x-hidden");
    return () => document.body.classList.remove("overflow-x-hidden");
  }, []);

  return (
    <div className="relative flex min-h-screen min-w-0 overflow-x-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#0a0a0a] text-white">
      {/* ✨ Floating Animated Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-purple-700 via-indigo-900 to-transparent rounded-full blur-3xl opacity-30 animate-pulse-slow top-[10%] left-[20%]" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-indigo-700 via-blue-900 to-transparent rounded-full blur-3xl opacity-20 animate-pulse-slower top-[50%] left-[60%]" />
      </div>

      {/* Sidebar */}
      <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />

      {/* Main Content */}
      <div className={`flex flex-col flex-1 z-10 ${isSideBarOpen ? "opacity-50" : ""}`}>
        <div className="fixed top-0 left-0 w-full z-30 backdrop-blur-[3px]">
          <Navbar />
        </div>
        <div className="pt-24 px-4 sm:px-6 md:px-10 lg:px-16">
          <Center />
          <Cp_panel />
          <ShowProject />
          <Display />
          <Bottom />
        </div>
      </div>

      {/* Optional Right Glow (Orange Accent) */}
      <div
        className="absolute top-1/2 right-[-45%] h-[70%] w-[100%] pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle at center, #ff7300 10%, #ff8c00 35%, rgba(255,120,0,0.3) 55%, transparent 70%)",
          transform: "translate(50%, -50%)",
          borderRadius: "40%",
          filter: "blur(80px)",
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default Home;












// import React, { useState, useEffect } from "react";
// import Navbar from "./Navbar";
// import Center from "./Center";
// import Display from "./Display";
// import Bottom from "./Bottom";
// import SideBar from "./SideBar";
// import Cp_panel from "./Cp_panel";
// import ShowProject from "./ShowProject";

// const Home: React.FC = () => {
//   const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

//   useEffect(() => {
//     document.body.classList.add("overflow-x-hidden"); // Prevent horizontal scroll
//     return () => document.body.classList.remove("overflow-x-hidden");
//   }, []);

//   return (
//     <div className="relative flex min-h-screen min-w-0 overflow-x-hidden">
//       {/* Sidebar on the left */}
//       <SideBar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />

//       {/* Main Content Area */}
//       <div
//         className={`flex flex-col flex-1 ${isSideBarOpen ? "opacity-50" : ""}`}
//       >
//         <div className="fixed top-0 left-0 w-full z-30 backdrop-blur-[3px]">
//           <Navbar />
//         </div>
//         <div className="pt-24">
//           <Center />
//           <Cp_panel />
//           <ShowProject />
//           <Display />
//           <Bottom />
//         </div>
//       </div>

//       {/* 🔥 Orange Glow Effect at Right Edge */}
//       <div
//         className="absolute top-1/4 right-[-52%] h-[70%] w-[105%] pointer-events-none z-[9999]"
//         style={{
//           background:
//             "radial-gradient(circle, #ff7300 30%, #ff8c00 50%, rgba(255,120,0,0.8) 65%, rgba(255,100,0,0.6) 75%, rgba(255,80,0,0.4) 85%, transparent 95%)",
//           transform: "translate(50%, -50%)",
//           borderRadius: "10%",
//           filter: "blur(25px)",
//         }}
//       />
//     </div>
//   );
// };

// export default Home;
