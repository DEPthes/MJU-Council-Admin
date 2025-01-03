import styled from "styled-components";

export const Container = styled.div<{ $isM70?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isM70 ? "var(--M70)" : "var(--Primary)"};
`;

export const Text = styled.p`
  font: var(--PC_ButtonText2);
  color: white;
  text-align: center;
`;
