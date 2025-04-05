import React, { createContext, useState, useContext, useEffect } from "react";
import getProjects from "../api/GetProjects.api";

interface IUSERPROJECT {
    _id: string;
    projectTitle: string;
    projectDescription: string;
    projectGithub: string;
    projectLinkedIn: string;
    projectTwitter: string;
    projectLink: string;
    projectSlack: string;
    projectImages: [string];
}

interface ProjectContextType {
    userProjects: IUSERPROJECT[];
    fetchProjects: () => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userProjects, setUserProjects] = useState<IUSERPROJECT[]>([]);

    const fetchProjects = async () => {
        const res = await getProjects();
        if (res?.success) {
            setUserProjects(res.projects);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <ProjectContext.Provider value={{ userProjects, fetchProjects }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjectContext = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error("useProjectContext must be used within a ProjectProvider");
    }
    return context;
};
