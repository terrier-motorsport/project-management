import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LinkBar from "./components/LinkBar";
import TaskCard from "./components/TaskCard";
import Board from "./components/Board";
import BoardForm from "./components/BoardForm";
import CardForm from "./components/CardForm";
import ColumnForm from "./components/ColumnForm";

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <LinkBar />
        <div className="flex">
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        <div className="flex">
          <BoardForm/>
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  )
}

export default App
