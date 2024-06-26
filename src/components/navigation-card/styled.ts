import styled from "styled-components";

export const NavigationCardComponent = styled.div`
  border: ${({ theme }) => `1px solid ${theme.color}`};
  padding: 10px;
  border-radius: 6px;
  flex: 1;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;
