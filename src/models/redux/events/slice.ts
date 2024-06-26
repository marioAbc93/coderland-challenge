import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EventType } from "../../entities/event";
import { eventService } from "./service";

const eventsSlice = createSlice({
  name: "events",
  initialState: [] as EventType[],
  reducers: {
    setEvents: (state, action: PayloadAction<EventType[]>) => {
      return [...state, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(eventService.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const { setEvents } = eventsSlice.actions;
export default eventsSlice.reducer;
