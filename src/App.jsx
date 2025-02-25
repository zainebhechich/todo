import { useState } from 'react'
import './App.css'
import AddTask from "./component/Addtask"
import ListTask from "./component/ListTask";

function App() {
    const [filter, setFilter] = useState("all");

    return (
      <div className="app-container">
        <header className="app-header">
          <h1>ToDo App</h1>
        </header>
        <AddTask />
        <div className="filter-section">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("done")}>Done</button>
          <button onClick={() => setFilter("notDone")}>Not Done</button>
        </div>
        <ListTask filter={filter} />
      </div>
    );
  };

export default App
