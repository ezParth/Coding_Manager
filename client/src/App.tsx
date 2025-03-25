import React from "react";
import { Outlet } from "react-router-dom";
import ContextsProvider from "./Context/ContextProvider";

const App: React.FC = () => {
  return (
    <div>
      <ContextsProvider>
        <Outlet /> {/* This is where the page content will be rendered */}
      </ContextsProvider>
    </div>
  );
};

export default App;
