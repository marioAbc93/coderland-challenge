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
