import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListType } from "../../entities";

export const listService = createAsyncThunk("listService", async () => {
  const BASE_URL = import.meta.env.VITE_MAIN_API;
  const response = await fetch(`${BASE_URL}`);

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return (await response.json()) as ListType[];
});
