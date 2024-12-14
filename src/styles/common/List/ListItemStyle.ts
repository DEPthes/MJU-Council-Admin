import styled from "styled-components";

export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 10px;
  border-top: 1px solid var(--M30);
  cursor: pointer;
`;

export const Title = styled.h5`
  color: var(--Black);
  font: var(--PC_SubeaderText);
`;

export const RightWrap = styled.div`
  display: flex;
  gap: 20px;
  font: var(--PC_BodyText);
  color: var(--Primary);
  white-space: nowrap;
`;
