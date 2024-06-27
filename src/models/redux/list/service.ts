import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { ListType } from "../../entities";

export const listService: AsyncThunk<
  ListType[],
  void,
  Record<string, never>
> = createAsyncThunk("listService", async (_, { rejectWithValue }) => {
  const BASE_URL = "https://6172cfe5110a740017222e2b.mockapi.io/elements";
  try {
    const response = await fetch(`${BASE_URL}`);
    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }
    return (await response.json()) as ListType[];
  } catch (error) {
    return rejectWithValue("Failed due to network error");
  }
});
