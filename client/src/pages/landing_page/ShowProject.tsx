import React from "react";
import IndividualProjects from "./IndividualProjects";

const ShowProject: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-amber-400 drop-shadow-lg">
          🚀 My Projects
        </h1>
        <IndividualProjects />
      </div>
    </div>
  );
};

export default ShowProject;
