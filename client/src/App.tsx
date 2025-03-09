import React from 'react'
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Outlet /> {/* This is where the page content will be rendered */}
    </div>
  );
}

export default App;
