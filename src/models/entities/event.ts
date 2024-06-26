export type EventType = {
  id: string;
  name: string;
  markets: MarketType[];
};

export type ResponseType = EventType[];

export type MarketType = {
  selections: SelectionType[];
  id: string;
  name: string;
  markets: MarketEvent[];
};

export type MarketEvent = {
  id: string;
  name: string;
  selections: SelectionType[];
};
export type SelectionType = {
  id: string;
  name: string;
  price: number;
};

export interface SelectionState {
  totalEvents: number;
  events: SelectionType[];
}

export const initiaSelectionlState: SelectionState = {
  totalEvents: 0,
  events: [],
};
export const initialEventState: EventType = {
  id: "",
  name: "",
  markets: [],
};
