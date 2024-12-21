import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  pointer-events: all;
`;

export const MDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40%;
  min-width: 500px;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1000;
  padding: 80px 120px;
  border: 1px solid black;
  gap: 60px;
  border-radius: 4px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const MText = styled.p`
  display: flex;
  justify-content: center;
  color: var(--Black);
  font: var(--SectionTitle);
  margin: 0 0 60px 0;
`;

export const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MButton = styled.button`
  display: flex;
  border-radius: 4px;
  border: 1px solid var(--Primary);
  color: var(--Primary);
  font: var(--MenuTitle);
  width: 180px;
  height: 60px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
`;

export const MCButton = styled(MButton)`
  margin-left: 20px;
  color: white;
  background-color: var(--Primary);
`;
