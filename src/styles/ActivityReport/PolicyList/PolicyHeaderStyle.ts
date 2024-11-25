import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 40px 0;
  gap: 20px;
  border-bottom: 4px solid var(--M70);
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
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
