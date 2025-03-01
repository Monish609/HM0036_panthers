import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}

export default App;