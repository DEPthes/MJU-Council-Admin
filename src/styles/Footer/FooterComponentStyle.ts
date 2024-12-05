import styled from "styled-components";

export const Foot = styled.div`
  background: var(--Primary);
  display: flex;
  width: 100%;
  padding: 60px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.a`
  display: flex;
  padding: 4px;
  margin: 0 6px;
  border-radius: 4px;
  background-color: white;
  border: transparent;
`;

export const Text = styled.p`
  display: flex;
  color: var(--White);
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const CLogo = styled.img`
  display: flex;
  height: 28px;
`;

export const Divider = styled.div`
  display: flex;
  border-bottom: 1px solid white;
  margin: 40px 0;
  width: 67%;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
`;

export const Img = styled.div`
  display: flex;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  text-align: center;
  justify-content: center;
`;
