import React, { createContext, useContext, useState, ReactNode } from "react";

export interface ResumeData {
  [key: string]: any;
}

interface ResumeContextType {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

// 👇 This is the important part — provide a proper default value with correct type
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ResumeData>({});

  return (
    <ResumeContext.Provider value={{ data, setData }}>
      {children}
    </ResumeContext.Provider>
  );
};

// 👇 This helps you use the context cleanly
export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) throw new Error("useResume must be used within ResumeProvider");
  return context;
};
