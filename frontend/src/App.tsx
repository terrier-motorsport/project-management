import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LinkBar from "./components/LinkBar";
import TaskCard from "./components/TaskCard";

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
      </div>
    </div>
  )
}

export default App
