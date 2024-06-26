import { HeaderContainer, ThemeToggle, Avatar, UserData } from "./styled";
import { HeaderProps } from "../../constants";
import { useState } from "react";
import TicketButton from "../ticket-button";
import { Moon, Sun } from "../../assets/icons";
import User from "../../assets/user.jpg";

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
      <div
        style={{
          maxWidth: 750,
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          margin: "0 auto",
          padding: 10,
          width: 750,
        }}
      >
        <ThemeToggle
          onClick={() => {
            handleTheme();
          }}
          theme={theme}
          data-testid="theme-toggle"
        >
          {theme === "dark" ? <>{Moon}</> : <> {Sun}</>}
        </ThemeToggle>

        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <UserData>
            <p>Hello,</p>
            <span>Iridian</span>
          </UserData>
          <Avatar src={User} />
          <TicketButton data-testid="ticket-button" />
        </div>
      </div>
    </HeaderContainer>
  );
}
