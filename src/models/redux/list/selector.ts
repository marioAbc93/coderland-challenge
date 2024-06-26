import { RootState } from "../store";
import { ListType } from "../../entities/event";

export const eventSelector = (state: RootState): ListType[] => state.list;
