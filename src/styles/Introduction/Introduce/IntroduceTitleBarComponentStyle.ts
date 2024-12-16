import styled from "styled-components";

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

export const BtnDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
`;

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
