import styled from "styled-components";

export const Container = styled.div<{ isHome: boolean }>`
  max-width: 750px;
  margin: 0 auto;
  padding: 10px;
  width: 90%;
  height: 100%;
  border: ${({ theme, isHome }) => !isHome && `2px solid ${theme.color}`};
  background: ${({ theme, isHome }) => !isHome && theme.background};
  box-shadow: ${({ theme, isHome }) => !isHome && theme.boxShadow};
  border-radius: 10px;
  margin-top: 10px;
`;

export const ContainerHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 750px;
  margin: 0 auto;
  padding: 10px;
  width: 80%;
  /* background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow}; */
  button {
    background: none;
    border: ${({ theme }) => `1px solid ${theme.color}`};
    padding: 5px;
    cursor: pointer;
    svg {
      color: ${({ theme }) => theme.color};
      width: 24px;
      height: 24px;
    }
  }
  span {
    font-weight: bold;
    font-size: 16px;
  }
`;
