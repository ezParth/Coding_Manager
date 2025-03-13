import { ReactNode } from "react";
import { UserContextProvider } from "./UserContext";
import { CPContextProvider } from "./CPContext";
import { CodeforcesProvider } from "./CodeforcesContext";

interface Props {
  children: ReactNode;
}

const ContextsProvider = ({ children }: Props) => {
  return (
    <CodeforcesProvider>
      <UserContextProvider>
        <CPContextProvider>{children}</CPContextProvider>
      </UserContextProvider>
    </CodeforcesProvider>
  );
};

export default ContextsProvider;
