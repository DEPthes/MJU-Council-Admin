import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0;
  width: auto;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const Item = styled.div<{ $isSelected: boolean }>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 120px;
  font: ${(props) =>
    props.$isSelected ? "var(--PC_ButtonText)" : "var(--PC_InputText)"};
  color: ${(props) => (props.$isSelected ? "var(--Primary)" : "var(--M70)")};
  border-bottom: ${(props) => props.$isSelected && "4px solid var(--Primary)"};
`;
