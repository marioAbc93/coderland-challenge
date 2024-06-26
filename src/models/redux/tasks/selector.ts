import { RootState } from "../store";
import { TasksType } from "../../entities";

export const tasksSelector = (state: RootState): TasksType[] => state.tasks;
