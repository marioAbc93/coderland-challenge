import { combineReducers } from "@reduxjs/toolkit";
import eventSelectionSlice from "./selection/slice";
import eventSlice from "./events/slice";

const rootReducer = combineReducers({
  events: eventSlice,
  eventSelection: eventSelectionSlice,
});

export default rootReducer;
