import { RootState } from "../store";
import { SelectionState } from "../../entities";

export const eventSelectionSelector = (state: RootState): SelectionState =>
  state.tasks;
