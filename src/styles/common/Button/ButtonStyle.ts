import styled from "styled-components";

export const BlueBtn = styled.button<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props) => props.$color};
  border: none;

  &:disabled {
    cursor: default;
    background-color: var(--M50);
  }

  > p {
    font: var(--PC_ButtonText2);
    color: var(--White);
    text-align: center;
  }
`;

export const WhiteBtn = styled.button<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  border: ${(props) => `1px solid ${props.$color}`};

  &:disabled {
    border: 1px solid var(--M50);
    cursor: default;

    > p {
      color: var(--M50);
    }
  }

  > p {
    font: var(--PC_ButtonText2);
    color: ${(props) => props.$color};
    text-align: center;
  }
`;

export const BigBlueBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background-color: var(--Primary);
  border: none;

  > p {
    font: var(--PC_ButtonText);
    color: var(--White);
    text-align: center;
  }
`;

export const BigWhiteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid var(--Primary);

  > p {
    font: var(--PC_ButtonText);
    color: var(--Primary);
    text-align: center;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 40px;
  margin-bottom: 40px;
  cursor: pointer;
  background-color: var(--M5);
  font: var(--PC_ButtonText2);
  color: var(--Primary);
  border: none;
  text-align: center;
`;
