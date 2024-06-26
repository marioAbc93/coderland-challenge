import styled from "styled-components";

export const AppContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.color};
`;
