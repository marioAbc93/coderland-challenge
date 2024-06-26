import { combineReducers } from "@reduxjs/toolkit";
import eventSelectionSlice from "./tasks/slice";
import listSlice from "./list/slice";

const rootReducer = combineReducers({
  list: listSlice,
  eventSelection: eventSelectionSlice,
});

export default rootReducer;
