import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksType } from "../../entities";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [] as TasksType[],
  reducers: {
    setTasks: (state, action: PayloadAction<TasksType[]>) => {
      return [...state, ...action.payload];
    },
    addTask: (state, action: PayloadAction<TasksType>) => {
      state.push(action.payload);
    },
  },
});

export const { setTasks, addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
