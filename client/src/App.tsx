import React from "react";
import { Outlet } from "react-router-dom";
import ContextsProvider from "./Context/ContextProvider";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      <ContextsProvider>
        <Outlet /> {/* This is where the page content will be rendered */}
      </ContextsProvider>
    </div>
  );
};

export default App;
