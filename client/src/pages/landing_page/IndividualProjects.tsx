import React from "react";
import Image2 from "../../assets/30875866_7742218.jpg";
import { useProjectContext } from "../../Context/UserProjectContext";

const IndividualProjects: React.FC = () => {
  const { userProjects, fetchProjects } = useProjectContext();

  return (
    <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto py-10 px-4">
      {/* Fetch Button */}
      <div className="flex justify-center">
        <button
          className="bg-gradient-to-r from-amber-500 to-orange-400 text-black text-lg font-bold px-8 py-3 rounded-full hover:from-amber-400 hover:to-orange-300 transition-all shadow-lg hover:scale-105 cursor-pointer"
          onClick={fetchProjects}
        >
          🚀 GET PROJECTS
        </button>
      </div>

      {/* Project List */}
      {userProjects.length > 0 ? (
        userProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row w-full border border-gray-800 rounded-2xl overflow-hidden bg-[#1e1e1e] text-white shadow-xl hover:shadow-amber-500/20 transition-all duration-300"
          >
            {/* Left Image Section */}
            <div className="md:w-1/3 w-full h-64 md:h-auto">
              <img
                src={project.projectImages?.[0] || Image2}
                alt="project"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Project Details */}
            <div className="md:w-2/3 w-full p-6 flex flex-col justify-between gap-4">
              {/* Title and Description */}
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400 mb-2">
                  {project.projectTitle}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.projectDescription}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
                {project.projectGithub && (
                  <a
                    href={project.projectGithub}
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🧑‍💻 GitHub
                  </a>
                )}
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    className="text-green-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌐 Website
                  </a>
                )}
                {project.projectLinkedIn && (
                  <a
                    href={project.projectLinkedIn}
                    className="text-blue-300 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 LinkedIn
                  </a>
                )}
                {project.projectTwitter && (
                  <a
                    href={project.projectTwitter}
                    className="text-sky-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🐦 Twitter
                  </a>
                )}
                {project.projectSlack && (
                  <a
                    href={project.projectSlack}
                    className="text-purple-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 Slack
                  </a>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-center text-lg mt-10">
          No projects found. Click <span className="text-amber-400 font-semibold">"GET PROJECTS"</span> to load.
        </p>
      )}
    </div>
  );
};

export default IndividualProjects;
