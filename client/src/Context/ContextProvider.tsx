import { ReactNode } from "react";
import { UserContextProvider } from "./UserContext";
import { CPContextProvider } from "./CPContext";

interface Props {
  children: ReactNode;
}

const ContextsProvider = ({ children }: Props) => {
  return (
    <UserContextProvider>
      <CPContextProvider>
        {children}
      </CPContextProvider>
    </UserContextProvider>
  );
};

export default ContextsProvider;
