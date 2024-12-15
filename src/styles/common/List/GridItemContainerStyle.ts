import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;

  > img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
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

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font: var(--SectionTitle);
  align-items: center;
`;

export const Text = styled.p`
  font: var(--Heading);
  color: var(--M70);
`;
