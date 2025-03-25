import { createContext, useState, ReactNode } from "react";

interface CodeforcesData {
  name: string;
  problemCount: number;
  contestRating: number;
  maxRating: number;
  rank: string;
  country: string;
  contribution: number;
  profilePic: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setProblemCount: React.Dispatch<React.SetStateAction<number>>;
  setContestRating: React.Dispatch<React.SetStateAction<number>>;
  setMaxRating: React.Dispatch<React.SetStateAction<number>>;
  setRank: React.Dispatch<React.SetStateAction<string>>;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  setContribution: React.Dispatch<React.SetStateAction<number>>;
  setProfilePic: React.Dispatch<React.SetStateAction<string>>;
}

export const CodeforcesContext = createContext<CodeforcesData>({
    name: "",
    problemCount: 0,
    contestRating: 0,
    maxRating: 0,
    rank: "",
    country: "",
    profilePic: "",
    contribution: 0,
    setName: () => {},
    setProblemCount: () => {},
    setContestRating: () => {},
    setMaxRating: () => {},
    setRank: () => {},
    setCountry: () => {},
    setContribution: () => {},
    setProfilePic: () => {},
  });
  

export const CodeforcesProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("");
  const [problemCount, setProblemCount] = useState<number>(0);
  const [contestRating, setContestRating] = useState<number>(0);
  const [maxRating, setMaxRating] = useState<number>(0);
  const [rank, setRank] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [contribution, setContribution] = useState<number>(0);
  const [profilePic, setProfilePic] = useState<string>("");

  return (
    <CodeforcesContext.Provider
      value={{
        name,
        problemCount,
        contestRating,
        maxRating,
        rank,
        country,
        contribution,
        profilePic,
        setName,
        setProblemCount,
        setContestRating,
        setMaxRating,
        setRank,
        setCountry,
        setContribution,
        setProfilePic,
      }}
    >
      {children}
    </CodeforcesContext.Provider>
  );
};
