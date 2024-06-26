import { createAsyncThunk } from "@reduxjs/toolkit";
import { EventType } from "../../entities/event";

export const eventService = createAsyncThunk("eventService", async () => {
  const BASE_URL = import.meta.env.VITE_MAIN_API;
  const response = await fetch(`${BASE_URL}/events`);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return (await response.json()) as EventType[];
});
