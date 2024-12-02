import styled from "styled-components";

export const Container = styled.div<{ $isEnd: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  height: 48px;
  border-bottom: ${(props) => !props.$isEnd && "1px solid var(--M30)"};
  padding: 0 20px;
`;

export const Title = styled.p`
  font: var(--ListTitle);
`;

export const AuthorContainer = styled.div`
  display: flex;
  gap: 12px;
  font: var(--Caption);
  color: var(--M50);
`;
