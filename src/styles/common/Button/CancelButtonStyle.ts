import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background-color: white;
  border: 1px solid var(--M70);
`;

export const Text = styled.p`
  font: var(--PC_ButtonText);
  color: var(--M70);
  text-align: center;
`;
