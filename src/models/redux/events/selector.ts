import { RootState } from "../store";
import { EventType } from "../../entities/event";

export const eventSelector = (state: RootState): EventType[] => state.events;
