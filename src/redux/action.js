
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
  // filterValue can be "done" or "notDone" or "all"
  return {
    type: FILTER_TASKS,
    payload: filterValue,
  };
};
