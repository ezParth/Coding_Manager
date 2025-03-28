import React from "react";
import Image2 from "../../assets/30875866_7742218.jpg";
import Image3 from "../../assets/31798960_7763254.jpg";

const projects = [
    {
        title: "Project One",
        description: "A brief description of Project One.",
        image: Image2,
        github: "https://github.com/user/project-one",
        slack: "https://slack.com/project-one",
        website: "https://project-one.com",
        techStack: ["React", "Tailwind CSS", "Node.js"],
    },
    {
        title: "Project Two",
        description: "A brief description of Project Two.",
        image: Image3,
        github: "https://github.com/user/project-two",
        slack: "https://slack.com/project-two",
        website: "https://project-two.com",
        techStack: ["Next.js", "MongoDB", "Express"],
    },
];

const IndividualProjects: React.FC = () => {
    return (
        <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
            {projects.map((project, index) => (
                <div key={index} className="flex w-full border border-gray-500 rounded-lg overflow-hidden bg-gray-900 text-white h-96">
                    {/* Left Image Section */}
                    <div className="w-1/3 h-full">
                        <img src={project.image} alt="project" className="w-full h-full object-cover" />
                    </div>

                    {/* Right Project Details */}
                    <div className="w-2/3 p-6 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                        <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                        <div className="mt-4 flex flex-col gap-2">
                            <a href={project.github} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                            <a href={project.slack} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                Slack
                            </a>
                            <a href={project.website} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                                Website
                            </a>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-md font-semibold">Tech Stack:</h3>
                            <ul className="flex gap-3 mt-2 text-sm text-gray-400">
                                {project.techStack.map((tech, idx) => (
                                    <li key={idx} className="px-3 py-1 bg-gray-700 rounded-md">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IndividualProjects;
