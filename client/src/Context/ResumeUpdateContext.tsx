import React, { createContext, useContext, useState, ReactNode } from "react";

interface ResumeContextType {
  IsUpdating: boolean;
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResumeUpdateContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeUpdateContextProvider = ({ children }: { children: ReactNode }) => {
  const [IsUpdating, setIsUpdating] = useState(false);

  return (
    <ResumeUpdateContext.Provider value={{ IsUpdating, setIsUpdating }}>
      {children}
    </ResumeUpdateContext.Provider>
  );
};

export const useResumeUpdateContext = () => {
  const context = useContext(ResumeUpdateContext);
  if (!context) throw new Error("useResume must be used within ResumeProvider");
  return context;
};
