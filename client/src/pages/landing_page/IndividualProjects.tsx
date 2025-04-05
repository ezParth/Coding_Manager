import React from "react";
import Image2 from "../../assets/30875866_7742218.jpg";
import { useProjectContext } from "../../Context/UserProjectContext";
import {
  FaLinkedin,
  FaSlack,
  FaTwitter,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const IndividualProjects: React.FC = () => {
  const { userProjects, fetchProjects } = useProjectContext();

  return (
    <div className="flex flex-col gap-10 w-full px-4">
      {/* Fetch Button */}
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-amber-500 to-orange-400 text-black text-lg font-bold px-8 py-3 rounded-full hover:scale-105 transition-all shadow-md hover:shadow-amber-400/30"
          onClick={fetchProjects}
        >
          🚀 GET PROJECTS
        </button>
      </div>

      {/* Project Grid */}
      {userProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeInUp">
          {userProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-700 rounded-2xl overflow-hidden bg-[#0f0f0f] text-white shadow-xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="w-full h-52">
                <img
                  src={project.projectImages?.[0] || Image2}
                  alt="project"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-4 justify-between h-full">
                <div>
                  <h2 className="text-2xl font-bold text-amber-400 mb-2 drop-shadow-sm">
                    {project.projectTitle}
                  </h2>
                  <p className="text-gray-300 text-sm">{project.projectDescription}</p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-700">
                  {project.projectGithub && (
                    <a
                      href={project.projectGithub}
                      className="flex items-center gap-2 text-white bg-[#24292e] hover:bg-[#1c2024] px-3 py-2 rounded-md transition-all text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      className="flex items-center gap-2 text-white bg-green-700 hover:bg-green-600 px-3 py-2 rounded-md transition-all text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGlobe /> Website
                    </a>
                  )}
                  {project.projectLinkedIn && (
                    <a
                      href={project.projectLinkedIn}
                      className="flex items-center gap-2 text-white bg-[#0077b5] hover:bg-blue-700 px-3 py-2 rounded-md transition-all text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin /> LinkedIn
                    </a>
                  )}
                  {project.projectTwitter && (
                    <a
                      href={project.projectTwitter}
                      className="flex items-center gap-2 text-white bg-[#1DA1F2] hover:bg-[#0d8de1] px-3 py-2 rounded-md transition-all text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter /> Twitter
                    </a>
                  )}
                  {project.projectSlack && (
                    <a
                      href={project.projectSlack}
                      className="flex items-center gap-2 text-white bg-purple-700 hover:bg-purple-600 px-3 py-2 rounded-md transition-all text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSlack /> Slack
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 text-center text-lg mt-10 animate-pulse">
          No projects found. Click{" "}
          <span className="text-amber-400 font-semibold">"GET PROJECTS"</span>{" "}
          to load.
        </p>
      )}
    </div>
  );
};

export default IndividualProjects;
