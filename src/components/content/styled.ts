import styled from "styled-components";

export const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 10px;
  width: 90%;
  height: 100%;
  border: ${({ theme }) => `2px solid ${theme.color}`};
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 10px;
  margin-top: 10px;
  overflow-y: auto;
`;
