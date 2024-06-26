import styled from "styled-components";

export const ModalContainer = styled.div<{ open: boolean }>`
  position: absolute;
  display: ${({ open }) => (open ? "flex" : "none")};
  background: ${({ theme }) => theme.contentColor};
  color: ${({ theme }) => theme.color};
  padding: 40px 20px;
  border-radius: 8px;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  top: 80px;
  max-width: 700px;
  margin: auto;
  padding: 10px;
  width: 70%;
  input {
    background-color: none;
    background: none;
    color: ${({ theme }) => theme.color};
    padding: 10px;
    border-radius: 4px;
    width: 300px;
    border: ${({ theme }) => `1px solid ${theme.color}`};
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  margin: 10px;
  padding: 5px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  button {
    width: 180px;
    font-size: 16px;
  }
`;

export const ButtonComponent = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  &:focus {
    outline: none;
  }
  padding: 10px;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  place-self: right;
  background: hsl(223, 10%, 50%, 0.2);
  border: none;
  flex: 1;
  &:active {
    transform: scale(0.9);
  }
`;
