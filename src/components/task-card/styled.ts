import styled from "styled-components";

export const TaskCardContainer = styled.div`
  width: 95%;
  height: 40px;
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.contentColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: ${({ theme }) => `1px solid ${theme.color}`};

  span {
    font-weight: bold;
    font-size: 14px;
  }
`;

export const PlaceholderIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
