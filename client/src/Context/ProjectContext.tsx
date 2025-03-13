import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface ReactNodeInterface{
    children: ReactNode
}

export interface ProjectInterface {
  image: string;
  image2: string;
  title: string;
  description: string;
  titleWarning: string;
  descWarning: string;
  setImage: Dispatch<SetStateAction<string>>;
  setImage2: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setTitleWarning: Dispatch<SetStateAction<string>>;
  setDescWarning: Dispatch<SetStateAction<string>>;
  githubLink: string;
  twitterLink: string;
  slackLink: string;
  linkedInLink: string;
  websiteLink: string;
  setlinkedInLink: Dispatch<SetStateAction<string>>;
  setGithubLink: Dispatch<SetStateAction<string>>;
  setTwitterLink: Dispatch<SetStateAction<string>>;
  setSlackLink: Dispatch<SetStateAction<string>>;
  setWebsiteLink: Dispatch<SetStateAction<string>>;
}

export const ProjectContext = createContext<ProjectInterface>({
    image: "",
    image2: "",
    title: "",
    description: "",
    titleWarning: "",
    descWarning: "",
    setImage: () => {},
    setImage2:() => {},
    setTitle:() => {},
    setDescription:() => {},
    setTitleWarning: () => {},
    setDescWarning: () => {},
    githubLink:"",
    twitterLink: "",
    slackLink: "",
    linkedInLink: "",
    websiteLink: "",
    setlinkedInLink: () => {},
    setGithubLink:() => {},
    setTwitterLink: () => {},
    setSlackLink: () => {},
    setWebsiteLink: () => {},
});

export const ProjectContextProvider = ({ children }: ReactNodeInterface) => {

    const [image, setImage] = useState<string>("");
    const [image2, setImage2] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [titleWarning, setTitleWarning] = useState<string>("");
    const [descWarning, setDescWarning] = useState<string>("");
    const [githubLink, setGithubLink] = useState<string>("");
    const [twitterLink, setTwitterLink] = useState<string>("");
    const [slackLink, setSlackLink] = useState<string>("");
    const [linkedInLink, setlinkedInLink] = useState<string>("");
    const [websiteLink, setWebsiteLink] = useState<string>("");

    return(
        <ProjectContext.Provider value={{
            image,
            image2,
            title,
            description,
            titleWarning,
            descWarning,
            setImage,
            setImage2,
            setTitle,
            setDescription,
            setTitleWarning,
            setDescWarning,
            githubLink,
            twitterLink,
            slackLink,
            linkedInLink,
            websiteLink,
            setlinkedInLink,
            setGithubLink,
            setTwitterLink,
            setSlackLink,
            setWebsiteLink,
          }}>
            { children }
        </ProjectContext.Provider>
    )
}

