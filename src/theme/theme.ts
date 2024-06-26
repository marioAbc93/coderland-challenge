type ThemeType = {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
  color: string;
  background: string;
  boxShadow: string;
  border: string;
  contentColor: string;
};

const defaultTheme = {
  primary: "#4d82bc",
  secondary: "#C6016B",
  success: "#A2DC8D",
  warning: "#FFC660",
  danger: "#EF8E8B",
};

const LightTheme = {
  ...defaultTheme,
  color: "#282c34",
  background: "white",
  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  border: "1px solid #282c34",
  contentColor: "#F9F9F9",
};

const DarkTheme = {
  ...defaultTheme,
  color: "white",
  background: "#282c34",
  boxShadow: " 0 2rem 3rem rgba(0, 0, 0, 0.4)",
  border: "1px solid #7a7a7a",
  contentColor: "#212121",
};

const Themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export const DEFAULT_THEME: ThemeType = LightTheme;

export default Themes;
