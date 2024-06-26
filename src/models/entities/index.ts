export type ListType = {
  createdAt: string;
  name: string;
  avatar: string;
  id: number;
  username?: string;
  password?: string;
};

export type TasksType = {
  id: string;
  description: string;
};

export type ResponseType = ListType[];

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

export const initialEventState: ListType = {
  createdAt: "",
  name: "",
  avatar: "",
  id: 0,
  username: "",
  password: "",
};
