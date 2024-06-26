import { combineReducers } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/slice";
import listSlice from "./list/slice";

const rootReducer = combineReducers({
  list: listSlice,
  tasks: tasksSlice,
});

export default rootReducer;
