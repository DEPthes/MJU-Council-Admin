import styled from "styled-components";

export const WholeDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 140px;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 66.6%;
  min-width: 500px;
  margin: 0 auto 20px auto;
  justify-content: center;
`;

export const IText = styled.p`
  width: 15%;
  height: 29px;
  color: var(--Black);
  font: var(--PC_ButtonText);
  margin: auto 20px auto 0;
`;

export const Input = styled.input`
    display: flex;
    height: 60px;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
    width: 80%;
    background: var(--M5);
    border-style:none;
    outline: none;
    margin: auto 0 auto 0;
    color: var(--Primary);
    font: var(--PC_InputText);
    &::placeholder {
        color: var(--M50);
        font: var(--PC_InputText);
    }
`;

export const FileUploadWrapper = styled.div`
  position: relative;
  padding-right: 40px;
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 120px;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
`;

export const UploadImg = styled.img`
  display: flex;
  height: 40px;
  object-fit: contain;
  z-inxex: 1;
`;

export const UploadPreviewWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 60px;
`;

export const UploadPreview = styled.img`
  display: flex;
  height: 60px;
  object-fit: contain;
  z-inxex: 1;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 12px;
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