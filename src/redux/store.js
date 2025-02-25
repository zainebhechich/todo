// store.js

import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(
  reducer,
  // Optional: If you have Redux DevTools extension, you can add:
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
