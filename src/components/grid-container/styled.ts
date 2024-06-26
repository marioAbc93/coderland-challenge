import styled from "styled-components";

export const GridContainerComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding-bottom: 50px;
  width: 100%;
  padding: 20px;
  flex: 1;
`;
