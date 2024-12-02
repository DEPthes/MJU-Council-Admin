import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 40px 0 60px;
  gap: 12px;
`;

export const PageButtonContainer = styled.button<{ $isactive: boolean }>`
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: ${(props) =>
    props.$isactive ? "var(--Primary)" : "var(--M30)"};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const PageText = styled.p`
  width: 48px;
  display: flex;
  justify-content: center;
  font: var(--ListTitle);
  color: var(--Primary);
`;
