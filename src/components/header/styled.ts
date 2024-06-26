import styled from "styled-components";

export const HeaderContainer = styled.nav`
  box-sizing: border-box;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.background};
  padding: 10px;
  width: 100vw;
  gap: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
export const ThemeToggle = styled.button<{ theme: string }>`
  cursor: pointer;

  color: ${({ theme }) => (theme === "light" ? "black" : theme.color)};
  &:focus {
    outline: none;
  }
  padding: 10px;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  background: ${({ theme }) => (theme === "light" ? "#FFC660" : "#4d82bc")};
  border: none;
  &:active {
    transform: scale(0.9);
  }
`;
export const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.color};
  &:focus {
    outline: none;
  }
`;
export const TicketButton = styled.button`
  cursor: pointer;

  color: ${({ theme }) => theme.color};
  &:focus {
    outline: none;
  }
  padding: 10px;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  background: hsl(223, 10%, 50%, 0.2);
  border: none;
  &:active {
    transform: scale(0.9);
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

export const UserData = styled.div`
  p {
    margin: 0;
    font-weight: 100;
    font-size: 12px;
  }
  span {
    margin: 0;
    font-weight: bold;
    color: ${({ theme }) => theme.primary};
  }
`;
