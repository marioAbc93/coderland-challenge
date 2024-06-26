import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initiaSelectionlState, SelectionType } from "../../entities";

const eventSelectionSlice = createSlice({
  name: "tasks",
  initialState: initiaSelectionlState,
  reducers: {
    addEvent: (state, action: PayloadAction<SelectionType>) => {
      const existingEvent = state.events.find(
        (event) => event.id === action.payload.id
      );

      if (!existingEvent) {
        state.events.push(action.payload);
        state.totalEvents += 1;
      }
    },
    clearAllSelection: (state) => {
      state.events = [];
      state.totalEvents = 0;
    },
    removeItemFromSelection: (state, action: PayloadAction<string>) => {
      const index = state.events.findIndex(
        (event) => event.id === action.payload
      );
      if (index !== -1) {
        state.events.splice(index, 1);
        state.totalEvents -= 1;
      }
    },
  },
});

export const { addEvent, clearAllSelection, removeItemFromSelection } =
  eventSelectionSlice.actions;

export default eventSelectionSlice.reducer;
