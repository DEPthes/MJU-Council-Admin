import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  margin: 0 10%;

  > hr {
    border-top: 1px solid var(--M30);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 40px;
`;

export const ListContainer = styled.div`
  padding-top: 20px;
  border-bottom: 1px solid var(--M30);
`;

export const EmptyText = styled.p`
  font: var(--PC_LoginText);
  color: var(--Black);
  text-align: center;
  padding: 20% 0 30%;
`;
