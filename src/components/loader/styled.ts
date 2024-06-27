import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: none;
  background: none;
  color: ${({ theme }) => theme.color};
  padding: 10px;
  font-weight: bold;
`;
export const LoaderComponent = styled.div`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: ${({ theme }) => `2px solid ${theme.color}`};
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 1s linear infinite;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
