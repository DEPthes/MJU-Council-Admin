import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  background-color: white;
  border: 1px solid var(--M70);
`;

export const Text = styled.p`
  font: var(--PC_ButtonText2);
  color: var(--M70);
  text-align: center;
`;
