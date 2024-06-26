import styled from "styled-components";

export const ViewContainerComponent = styled.div<{ routeName: string }>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  padding-top: ${({ routeName }) => (routeName === "Home" ? "30%" : "0")};
`;
