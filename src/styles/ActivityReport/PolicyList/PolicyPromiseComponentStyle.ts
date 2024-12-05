import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 60px;
`;

export const AddButton = styled.button`
  display: flex;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid var(--Primary);
  background-color: white;
  justify-content: center;
  align-items: center;
  font: var(--PC_ButtonText);
  color: var(--Primary);

  &:hover {
    border: 2px solid var(--Primary);
  }
`;
