import { ADD_TASK } from "./actiontype";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    // handle other actions...
    default:
      return state;
  }
};

export default taskReducer;
