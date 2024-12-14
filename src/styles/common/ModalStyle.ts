import styled from "styled-components";

export const Container = styled.div`
  margin: auto 25%;
  display: flex;
  padding: 5%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  min-width: 700px;
  box-sizing: border-box;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
`;

export const Text = styled.p`
  font: var(--SectionTitle);
  text-align: center;
  margin: 0;
  white-space: pre-line;
`;

export const DeleteText = styled.p`
  font: var(--MenuTitle);
  color: var(--Secondary);
  margin-top: 40px;
`;

export const DeleteInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  margin-top: 20px;
  box-sizing: border-box;
  text-align: justify;
  font: var(--PC_InputText);
  color: var(--Primary);
  border: none;
  background-color: var(--M5);

  &::placeholder {
    color: var(--M50);
    font: var(--PC_InputText);
  }
`;
