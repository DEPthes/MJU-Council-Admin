import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0 160px;
  margin: 0 10%;
  box-sizing: border-box;

  > hr {
    border-top: 1px solid var(--M30);
  }
`;

export const NoneList = styled.p`
  margin-top: 40px;
  font: var(--PC_BodyText);
  color: #6b6b6b;
`;

export const GridContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 40px;
`;

export const Label = styled.label`
  font: var(--PC_ButtonText);
  display: inline-block;
  margin-top: 40px;
`;

export const DateConatiner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  font: var(--BodyText);
  color: var(--M70);
  align-items: center;
`;

export const DateInput = styled.input`
  width: 140px;
  box-sizing: border-box;
  text-align: justify;
  padding: 15px 20px;
  font: var(--PC_InputText);
  color: var(--Primary);
  background-color: var(--M5);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--M50);
    font: var(--PC_InputText);
  }

  &:focus {
    border: none;
  }
`;
