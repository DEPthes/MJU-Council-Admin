import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0;
  margin: 0 10%;
`;

export const CoalitionContainer = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 80px;
`;

export const EmptyText = styled.p`
  font: var(--PC_LoginText);
  color: var(--Black);
  text-align: center;
  padding: 20% 0 30%;
`;
