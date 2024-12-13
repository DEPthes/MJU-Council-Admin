import styled from "styled-components";

export const AddEachOrgContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 170%;
`;

export const Caption = styled.p`
    display: flex;
    margin: 0 0 12px 0;
    font: var(--PC_ButtonText);
`;

export const Input = styled.input`
    display: flex;
    height: 20px;
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
