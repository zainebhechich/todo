import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/action"; // Adjust the path if needed

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) return;
    
    // Create a new task object
    const newTask = {
      id: Date.now(),
      description,
      isDone: false,
    };

    dispatch(addTask(newTask)); // Dispatches the action
    setDescription("");         // Clear input
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </form>
  );
};

export default AddTask;
