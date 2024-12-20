import styled from "styled-components";

export const Label = styled.label`
  font: var(--PC_ButtonText);
  display: inline-block;
  margin-top: 40px;
`;

export const TitleInput = styled.input`
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  text-align: justify;
  padding: 15px 20px;
  font: var(--PC_InputText);
  color: var(--Primary);
  background-color: var(--M5);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--M50);
    font: var(--PC_InputText);
  }

  &:focus {
    border: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 15px 20px;
  margin-top: 20px;
  box-sizing: border-box;
  text-align: justify;
  font: var(--PC_InputText);
  color: var(--Primary);
  border: none;
  background-color: var(--M5);
  resize: none;
  overflow: hidden;

  &::placeholder {
    color: var(--M50);
    font: var(--PC_InputText);
  }

  &:focus {
    outline: none;
  }
`;

export const FileButton = styled.button`
  display: flex;
  gap: 4px;
  border-radius: 2px;
  padding: 8px 7px;
  cursor: pointer;
  background-color: var(--M70);
  font-size: var(--PC_BodyText);
  color: var(--White);
  border: none;
  margin-top: 20px;
`;

export const FileContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 8px 20px;
  align-items: center;
  justify-content: space-between;
  background-color: var(--M5);
  font: var(--PC_BodyText);
  color: var(--Primary);
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  aspect-ratio: 1;
`;

export const ImageDeleteButton = styled.div`
  position: absolute;
  top: 10px;
  right: 8px;
  cursor: pointer;
`;

export const AddImageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  aspect-ratio: 1;
  background-color: var(--M5);
`;

export const DateContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  align-items: center;

  > P {
    font: var(--BodyText);
    color: var(--M70);
  }
`;

export const DateInput = styled.input`
  padding: 20px;
  font: var(--PC_InputText);
  color: var(--Primary);
  background-color: var(--M5);
  border: none;
  outline: none;
  text-align: center;

  &:focus {
    border: none;
  }
`;
