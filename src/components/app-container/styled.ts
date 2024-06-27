import styled from "styled-components";

export const AppContainer = styled.section`
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  overflow: hidden;
`;

export const ChildrenContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  justify-content: center;
  align-items: center;
  position: relative;
  align-self: center;
  width: 100vw;
  background: ${({ theme }) => theme.contentColor};
  overflow-y: hidden;
  height: 100%;
  padding: 40px 20px;
  padding-bottom: 80px;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2d749c;
    border-radius: 10px;
    border: 1px solid #2d749c;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 10px;
  width: 90%;
  height: 100%;
  border: ${({ theme }) => `2px solid ${theme.color}`};
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  margin-top: 10px;
  overflow-y: auto;
`;
