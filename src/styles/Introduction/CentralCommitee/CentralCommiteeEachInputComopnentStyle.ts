import styled from "styled-components";

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 66.6%;
    margin: 0 auto 60px auto;
`;

export const TopDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export const BtnDiv = styled.div`
    display: flex;
    margin: 20px 0 0 auto;
`;

export const DeleteBtn = styled.button`
    display: flex;
    width: 100px;
    height: 40px;
    padding: 8px 18px;
    justify-content: center;
    align-items: center;
    color: var(--M50);
    border-radius: 2px;
    border: 1px solid var(--M50);
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background-color: white;
    cursor: pointer;
`;

export const Line = styled.div`
    background-color: pink;
    margin-top: 60px;
    display: flex;
    border-bottom: 1px solid var(--M30);
`;

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

export const Input = styled.input`
    display: flex;
    height: 10px;
    background-color: var(--M5);
    border: none;
    outline: none;
    padding: 20px;
    color: var(--Primary);
    font: var(--PC_InputText);
    resize: none;
    overflow: auto;
    text-align: left;
    margin-bottom: 5px;
    &::placeholder {
        color: var(--M50);
        font: var(--PC_InputText);
    }
`;


export const TDiv = styled.div`
    display: flex;
    width: 66.6%;
    min-width: 500px;
    border-bottom: 4px solid var(--M70);
    border-radius: 4px;
    margin: 0 auto 60px auto;
    padding: 40px 0;
`;

export const TP = styled.p`
    display: flex;
    padding-top: 20px;
    position: relative;
    color: var(--Black);
    font: var(--PC_LoginText);
    margin: 0;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 24px;
        height: 4px;
        background-color: var(--M70);
    }
`;

// export const BtnDiv = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-left: auto;
// `;

export const TitleNotEnterBtn = styled.button`
    display: flex;
    width: 100px;
    height: 40px;
    border-radius: 4px;
    background-color: var(--M50);
    padding: 8px 27px;
    justify-content: center;
    align-items: center;
    border: none;
    color: white;
    margin-top: 30px;
    font: var(--PC_ButtonText2);
`;

export const TitleBtnFix = styled.button`
    display: flex;
    width: 100px;
    height: 40px;
    border-radius: 4px;
    background-color: var(--Primary);
    padding: 8px 27px;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    color: white;
    margin-top: 30px;
    font: var(--PC_ButtonText2);
`;
