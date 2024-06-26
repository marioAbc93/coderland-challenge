import styled from "styled-components";
import { getColorFromTheme } from "../../constants";

export const NotificationContainer = styled.div<{ severity: string }>`
  position: fixed;
  top: 0.5rem;
  right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  border-left: ${({ theme, severity }) =>
    `8px solid ${getColorFromTheme(theme[severity])}`};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 5px 20px;
  border-radius: 8px;
  width: 280px;
`;
