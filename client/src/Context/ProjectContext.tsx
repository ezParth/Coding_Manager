import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface ReactNodeInterface{
    children: ReactNode
}

export interface ProjectInterface {
  image: File | null;
  image2: File | null;
  title: string;
  description: string;
  titleWarning: string;
  descWarning: string;
  setImage: Dispatch<SetStateAction<File | null>>;
  setImage2: Dispatch<SetStateAction<File | null>>;
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
    image: null,
    image2: null,
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

    const [image, setImage] = useState<File | null>(null);
    const [image2, setImage2] = useState<File | null>(null);
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

