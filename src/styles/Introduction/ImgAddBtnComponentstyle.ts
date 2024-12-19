import styled from "styled-components";

export const UploadBtnDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Caption = styled.p`
    display: flex;
    margin: 0 0 12px 0;
    font: var(--PC_ButtonText);
`;

export const AddWrapper = styled.div`
    display: flex;
    position: relative; 
    width: 66.6%;
    aspect-ratio: 1 / 1;
    background-color: var(--M5);
    padding: 7%;
    align-items: center;
    justify-content: center;
`;

export const AddInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%;
    opacity: 0; 
    cursor: pointer;
    z-index: 2;
`;

export const AddImg = styled.img`
    display: flex;
    width: 50%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
`;

export const FullImg = styled.img`
    display: flex;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    position: absolute;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.55);;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
`;


export const AddContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 170%;
`;

export const Caption2 = styled.p`
    display: flex;
    margin: 0 0 12px 0;
    font: var(--PC_ButtonText);
`;

export const Input = styled.textarea`
    display: flex;
    height: 100%;
    background-color: var(--M5);
    border: none;
    outline: none;
    padding: 20px;
    color: var(--Primary);
    font: var(--PC_InputText);
    resize: none;
    overflow: auto;
    text-align: left;
    &::placeholder {
        color: var(--M50);
        font: var(--PC_InputText);
    }
`;

