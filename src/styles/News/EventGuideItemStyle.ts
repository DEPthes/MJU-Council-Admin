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
    border-radius: 4px;
  }
`;

export const Title = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  font: var(--PC_ButtonText);
  align-items: center;
`;

export const Text = styled.p`
  font: var(--PC_BodyText);
  color: var(--M70);
`;
