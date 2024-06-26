import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListType } from "../../entities";
import { listService } from "./service";

const listSlice = createSlice({
  name: "List",
  initialState: [] as ListType[],
  reducers: {
    setList: (state, action: PayloadAction<ListType[]>) => {
      return [...state, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listService.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const { setList } = listSlice.actions;
export default listSlice.reducer;
