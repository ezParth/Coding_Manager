import React from "react";
import Image2 from "../../assets/30875866_7742218.jpg";
import { useProjectContext } from "../../Context/UserProjectContext";

const IndividualProjects: React.FC = () => {
    const { userProjects, fetchProjects } = useProjectContext();

    return (
        <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto py-8">
            {/* Fetch Button */}
            <button
                className="bg-amber-500 text-xl font-semibold text-black px-6 py-3 rounded-lg hover:bg-amber-400 transition-all duration-300"
                onClick={fetchProjects}
            >
                GET PROJECTS
            </button>

            {/* Project List */}
            {userProjects.length > 0 ? (
                userProjects.map((project, index) => (
                    <div
                        key={index}
                        className="flex w-full border border-gray-700 rounded-xl overflow-hidden bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        {/* Left Image Section */}
                        <div className="w-1/3 h-64">
                            <img
                                src={project.projectImages?.[0] || Image2}
                                alt="project"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Project Details */}
                        <div className="w-2/3 p-6 flex flex-col justify-between">
                            {/* Project Title & Description */}
                            <div>
                                <h2 className="text-3xl font-bold text-amber-400">{project.projectTitle}</h2>
                                <p className="text-md text-gray-300 mt-2">{project.projectDescription}</p>
                            </div>

                            {/* Links Section */}
                            <div className="mt-4 flex gap-6 flex-wrap border-t border-gray-700 pt-3">
                                <a href={project.projectLink} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                    🌐 Website
                                </a>
                                <a href={project.projectLinkedIn} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                    🔗 LinkedIn
                                </a>
                                <a href={project.projectTwitter} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                    🐦 Twitter
                                </a>
                                <a href={project.projectSlack} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                    💬 Slack
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-400 text-center text-lg">No projects found. Click "GET PROJECTS" to load.</p>
            )}
        </div>
    );
};

export default IndividualProjects;
