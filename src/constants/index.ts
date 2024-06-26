import Themes from "../theme/theme";

export type ThemeMode = keyof typeof Themes;

export interface Theme {
  themeMode: ThemeMode;
}

export interface ThemeSelection {
  themeMode: "light" | "dark";
}

export const AppRoutes = [
  { name: "Tasks", path: "/tasks" },
  { name: "List", path: "/list" },
];

export interface AppContainerProps {
  theme: ThemeSelection;
  children: React.ReactNode;
  setTheme: (theme: "light" | "dark") => void;
}

export interface HeaderProps {
  theme: string;
  setTheme: (theme: "light" | "dark") => void;
}

type ThemeType = typeof Themes.light;

export interface ButtonProps {
  color?: "primary" | "secondary" | "warning" | "danger" | "success";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: JSX.Element;
  description?: string;
  theme?: ThemeType;
  orientation?: "row" | "column";
}

export type AlertColor = "success" | "warning" | "error";

export const getColorFromTheme = (colorKey: string) => {
  switch (colorKey) {
    case "#4d82bc":
      return "#005187";
    case "#C6016B":
      return "#e44f9c";
    case "#A2DC8D":
      return "#d0fdd7";
    case "#FFC660":
      return "#ecab0f";
    case "#EF8E8B":
      return "#e97377";
    default:
      return "#FFFFFF";
  }
};

export interface InputProps {
  type: string;
  placeholder: string;
  align?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (newValue: number) => void;
}

export interface NavigationProps {
  name: string;
  path: string;
}

export interface ListCardProps {
  name: string;
  avatar: string;
}

export interface RouteProviderProps {
  children: React.ReactNode;
}

export type RouteNames = {
  [key: string]: string;
};
