import { RootState } from "../store";
import { ListType } from "../../entities";

export const listSelector = (state: RootState): ListType[] => state.list;
