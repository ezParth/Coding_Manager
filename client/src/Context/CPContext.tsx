import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ReactNodeInterface{
    children: ReactNode
}

interface HandleInterface{
    cfHandle: string
    setcfHandle: Dispatch<SetStateAction<string>>
    leetcodeHandle: string
    setleetcodeHandle: Dispatch<SetStateAction<string>>
}

export const CPContext = createContext<HandleInterface>({
    cfHandle: "parth_cf",
    setcfHandle: () => {},
    leetcodeHandle: "ps_5",
    setleetcodeHandle: () => {}
});

export const CPContextProvider = ({ children }: ReactNodeInterface) => {
    const [cfHandle, setcfHandle] = useState("parth_cf");
    const [leetcodeHandle, setleetcodeHandle] = useState("ps_5");

    return (
        <CPContext.Provider value={{ cfHandle, setcfHandle, leetcodeHandle, setleetcodeHandle }}>
            {children}
        </CPContext.Provider>
    );
};
