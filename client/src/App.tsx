import React from "react";
import { Outlet } from "react-router-dom";
import ContextsProvider from "./Context/ContextProvider";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <div>
      
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      <ContextsProvider>
        <Outlet /> 
      </ContextsProvider>
    </div>
  );
};

export default App;
