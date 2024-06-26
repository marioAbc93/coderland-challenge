import { RootState } from "../store";
import { SelectionState } from "../../entities/event";

export const eventSelectionSelector = (state: RootState): SelectionState =>
  state.eventSelection;

export const totalEventsSelectedSelector = (state: RootState): number =>
  eventSelectionSelector(state).totalEvents;
