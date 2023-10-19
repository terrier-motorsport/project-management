import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LinkBar from "./components/LinkBar";
import BoardForm from "./components/BoardForm";

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <div className="m-5">
          <LinkBar />
          <BoardForm />
        </div>
        
      </div>
    </div>
  )
}

export default App
