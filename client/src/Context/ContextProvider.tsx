import { ReactNode } from "react";
import { UserContextProvider } from "./UserContext";
import { CPContextProvider } from "./CPContext";
import { CodeforcesProvider } from "./CodeforcesContext";
import { ProjectContextProvider } from "./ProjectContext";

interface Props {
  children: ReactNode;
}

const ContextsProvider = ({ children }: Props) => {
  return (
    <ProjectContextProvider>
    <CodeforcesProvider>
      <UserContextProvider>
        <CPContextProvider>{children}</CPContextProvider>
      </UserContextProvider>
    </CodeforcesProvider>
    </ProjectContextProvider>
  );
};

export default ContextsProvider;
