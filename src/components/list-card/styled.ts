import styled from "styled-components";

export const ListCardContainer = styled.div`
  width: 95%;
  height: 40px;
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: ${({ theme }) => theme.contentColor};
  border: ${({ theme }) => `1px solid ${theme.color}`};
  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  span {
    font-weight: bold;
    font-size: 14px;
  }
  svg {
    width: 35px;
    height: 35px;
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
