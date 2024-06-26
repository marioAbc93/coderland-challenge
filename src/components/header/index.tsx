import {
  HeaderContainer,
  ThemeToggle,
  Avatar,
  UserData,
  HeaderContent,
  AppLogo,
  LogoDiv,
} from "./styled";
import { HeaderProps } from "../../constants";
import { useState } from "react";
import { Moon, Sun } from "../../assets/icons/index";
import User from "../../assets/user.jpg";
import Logo from "../../assets/tarea.png";
export default function Header(props: HeaderProps) {
  const { theme, setTheme } = props;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const handleTheme = () => {
    if (isDarkMode === false) {
      setTheme("dark");
      setIsDarkMode(true);
    } else {
      setTheme("light");
      setIsDarkMode(false);
    }
  };

  return (
    <HeaderContainer data-testid="header-container">
      <HeaderContent>
        <LogoDiv>
          <AppLogo src={Logo} alt="app logo" />
          <ThemeToggle
            onClick={() => {
              handleTheme();
            }}
            theme={theme}
            data-testid="theme-toggle"
          >
            {theme === "dark" ? <>{Moon}</> : <> {Sun}</>}
          </ThemeToggle>
        </LogoDiv>

        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <UserData>
            <p>Hello,</p>
            <span>Mario</span>
          </UserData>
          <Avatar src={User} />
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}
