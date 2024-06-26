import styled from "styled-components";

export const Container = styled.div<{ ishome: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  margin: 0 auto;
  padding: 10px;
  width: 90%;
  height: 100%;
  border: ${({ theme, ishome }) =>
    ishome === false ? `2px solid ${theme.color}` : "none"};
  background: ${({ theme, ishome }) =>
    ishome === false ? theme.background : ""};
  box-shadow: ${({ theme, ishome }) =>
    ishome === false ? theme.boxShadow : ""};
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

export const DataContainer = styled.div<{ routeName: string }>`
  overflow-y: hidden;
  height: ${({ routeName }) => (routeName === "Home" ? "auto" : "100%%")};
  background: red;
`;

export const PaginationContainer = styled.div`
  background: red;
  margin-top: 10px;
  padding: 5px;
  display: flex;
  gap: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  button {
    display: flex;
    align-items: "center";
    svg {
      width: 20px;
      height: 18px;
      margin-left: 3px;
    }
  }
`;
