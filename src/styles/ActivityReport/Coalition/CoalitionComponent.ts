import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  gap: 12px;
  background-color: var(--M5);
  border-radius: 4px;
  cursor: pointer;
`;

export const HeacerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font: var(--SectionTitle);
  align-items: center;
`;

export const Text = styled.p`
  font: var(--Heading);
  color: var(--M70);
`;
