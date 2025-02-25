import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, FILTER_TASKS } from "./actiontype";

// 1. Add Task
export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

// 2. Toggle Task (for marking done/undone)
export const toggleTask = (taskId) => {
  return {
    type: TOGGLE_TASK,
    payload: taskId,
  };
};

// 3. Edit Task
export const editTask = (taskId, updatedDescription) => {
  return {
    type: EDIT_TASK,
    payload: { taskId, updatedDescription },
  };
};

// 4. Filter Tasks
export const filterTasks = (filterValue) => {
  return {
    type: FILTER_TASKS,
    payload: filterValue, // "done", "notDone", or "all"
  };
};
