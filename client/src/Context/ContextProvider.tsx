import { ReactNode } from "react";
import { UserContextProvider } from "./UserContext";
import { CPContextProvider } from "./CPContext";
import { CodeforcesProvider } from "./CodeforcesContext";
import { ProjectContextProvider } from "./ProjectContext";
import { ProjectProvider } from "./UserProjectContext";

interface Props {
  children: ReactNode;
}

const ContextsProvider = ({ children }: Props) => {
  return (
    <ProjectProvider>
    <ProjectContextProvider>
    <CodeforcesProvider>
      <UserContextProvider>
        <CPContextProvider>{children}</CPContextProvider>
      </UserContextProvider>
    </CodeforcesProvider>
    </ProjectContextProvider>
    </ProjectProvider>
  );
};

export default ContextsProvider;
