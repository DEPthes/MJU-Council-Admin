import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  padding: 80px 16% 160px 16%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const AddButton = styled.button`
  display: flex;
  width: 100%;
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
