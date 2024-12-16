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

export const AddCollageContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 170%;
`;

export const Caption = styled.p`
    display: flex;
    margin: 0 0 12px 0;
    font: var(--PC_ButtonText);
`;


export const EachDiv = styled.div`
    display: flex;
    margin-bottom: 20px;
    height: 15%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CollageText = styled.p`
    display: flex;
    color: var(--Black);
    font:var(--PC_ButtonText);
    margin-right: 20px;
    width: 200px;
`

export const Input = styled.input`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: var(--M5);
    border: none;
    outline: none;
    padding: 0 20px;
    align-items:center;
    justify-content: center;
    text-justify: center;
    color: var(--Primary);
    font: var(--PC_InputText);
    text-align: left;
    &::placeholder {
        color: var(--M50);
        font: var(--PC_InputText);
`;