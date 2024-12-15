import styled from "styled-components";

export const ShortLine = styled.hr`
  border-bottom: 8px solid var(--M70);
  width: 48px;
  margin: 0 0 20px;
`;

export const LongLine = styled.hr`
  border-bottom: 4px solid var(--M70);
  margin-top: 40px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 50px;
`;

export const HeaderText = styled.p`
  font: var(--PC_LoginText);
  word-break: break-all;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Text = styled.p`
  margin-top: 40px;
  font: var(--PC_ButtonText);
  color: var(--Primary);
`;

export const Date = styled.p`
  margin-top: 40px;
  font: var(--PC_BodyText);
  color: var(--M70);
`;

export const Label = styled.label`
  font: var(--PC_ButtonText);
  display: inline-block;
  margin-top: 40px;
`;

export const Content = styled.p`
  width: 100%;
  padding: 15px 20px;
  margin-top: 20px;
  box-sizing: border-box;
  text-align: justify;
  font: var(--PC_InputText);
  color: var(--Primary);
  border: none;
  background-color: var(--M5);
  overflow: hidden;
  min-height: 300px;
  white-space: pre-line;
`;
