import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 40px 0;
  gap: 20px;
  border-bottom: 4px solid var(--M70);
  /* min-width: 650px; */
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const TextInput = styled.input`
  width: 100%;
  margin-top: 0;
  box-sizing: border-box;
  text-align: justify;
  font: var(--PC_LoginText);
  color: var(--Primary);
  background-color: white;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--M30);
    font: var(--PC_LoginText);
  }

  &:focus {
    border: none;
  }
`;

export const ButtonContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
`;

export const Bar = styled.div`
  width: 48px;
  height: 8px;
  background-color: var(--M70);
`;

export const Text = styled.p`
  font: var(--PC_LoginText);
  margin: 0;
`;
