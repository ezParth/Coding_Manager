import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ReactNodeInterface{
    children: ReactNode
}

interface UserContextType{
    username: string | null
    setUsername: Dispatch<SetStateAction<string | null>>
}

export const UserContext = createContext<UserContextType>({
    username: null,
    setUsername: () => {}
});

export const UserContextProvider = ({ children }: ReactNodeInterface) => {
    const [username, setUsername] = useState<string | null>(null);

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};
