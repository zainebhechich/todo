import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task"; // Adjust the path as necessary

const ListTask = ({ filter }) => {
  const tasks = useSelector((state) => state.tasks);

  // Apply filtering
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <p>No tasks found.</p>
      )}
    </div>
  );
};

export default ListTask;
