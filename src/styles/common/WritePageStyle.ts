import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 0 160px;
  margin: 0 10%;
  box-sizing: border-box;

  > hr {
    border-top: 1px solid var(--M30);
  }
`;

export const NoneList = styled.p`
  margin-top: 40px;
  font: var(--PC_BodyText);
  color: #6b6b6b;
`;

export const GridContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 40px;
`;
