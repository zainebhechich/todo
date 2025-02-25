import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../redux/action"; // Adjust the path as necessary


const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing && newDescription.trim() !== "") {
      dispatch(editTask(task.id, newDescription));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={handleToggle}>
        {task.isDone ? "Mark as Undone" : "Mark as Done"}
      </button>
      <button onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Task;
