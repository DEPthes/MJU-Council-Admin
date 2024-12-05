import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 40px;
`;

export const AllDeleteButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  background-color: white;
  color: black;

  border: 1px solid var(--M70);
`;

export const NewPostButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  color: white;
  background-color: var(--Primary);
`;

export const Text = styled.p`
  font: var(--PC_ButtonText2);
  text-align: center;
`;
