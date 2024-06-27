import { configureStore } from "@reduxjs/toolkit";
import listReducer, { setList } from "./slice";
import { listService } from "./service";
import { ListType } from "../../entities";

describe("listSlice", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        list: listReducer,
      },
    });
  });

  it("should handle initial state", () => {
    expect(store.getState().list).toEqual([]);
  });

  it("should handle setList action", () => {
    const exampleList: ListType[] = [
      {
        id: 1,
        name: "Item 1",
        createdAt: "2020-01-01T00:00:00.000Z",
        avatar: "url1",
      },
    ];
    store.dispatch(setList(exampleList));
    expect(store.getState().list).toEqual(exampleList);
  });

  it("should update state correctly when listService.fulfilled is dispatched", async () => {
    const mockData: ListType[] = [
      {
        id: 2,
        name: "Item 2",
        createdAt: "2020-02-02T00:00:00.000Z",
        avatar: "url2",
      },
    ];
    // Simulate dispatching a fulfilled action returned by the async thunk
    const action = { type: listService.fulfilled.type, payload: mockData };
    store.dispatch(action);
    expect(store.getState().list).toEqual(mockData);
  });
});
