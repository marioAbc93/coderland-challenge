import styled from "styled-components";

export const StyledButton = styled.button<{ orientation: string }>`
  display: flex;
  flex-direction: ${({ orientation }) => (orientation ? orientation : "row")};
  gap: 10px;
  align-items: center;
  align-self: center;
  border: none;
  padding: 5px;
  border-radius: 5px;
  justify-content: space-around;
  font-weight: bold;
  color: white;
  :active {
    transform: scale(0.9);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
