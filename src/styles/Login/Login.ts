import styled from "styled-components";

export const LDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: auto;
`;
export const LText = styled.div`
    display: flex;
    color: var(--Black);
    text-align: center;
    font: var(--PC_LoginText);
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    margin: 60px 0 60px 0;
`;

export const LID= styled.input<{$isid:string}>`
    display: flex;
    height: 60px;
    padding: 0px 20px;
    border-radius: 4px;
    background: ${({$isid})=>($isid=="true")?`White`:`var(--M5)`};
    border-style: none;
    border: ${({$isid})=>($isid=="true")?`1px solid var(--M30)`:``};
    outline: none;
    text-justify: center;
    line-height: 80px;
    font: var(--PC_InputText);
    align-items:center;
    justify-content: center;
    &::placeholder {
        color: var(--M30);
        font: var(--PC_InputText);
    }
`;

export const PWDiv = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
`;

export const LPW = styled.input<{$ispw:string}>`
    display: flex;
    height: 60px;
    padding: 0px 20px;
    border-radius: 4px;
    background: ${({$ispw})=>($ispw=="true")?`White`:`var(--M5)`};
    border-style: none;
    border: ${({$ispw})=>($ispw=="true")?`1px solid var(--M30)`:``};
    outline: none;
    text-justify: center;
    line-height: 80px;
    font: var(--PC_InputText);
    align-items:center;
    justify-content: center;
    &::placeholder {
        color: var(--M30);
        font: var(--PC_InputText);
    }
    width: 100%;
    background-img: url('@assets/image/View_light.svg');
`;

export const PWBtn = styled.img`
    display: flex;
    cursor: pointer;
    position: absolute;
    transform: translate(350px,50%);
    width: 32px;
    height: 32px;
`;

export const LBtn = styled.button<{$isclick: string}>`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 60px;
    border-radius: 4px;
    background: ${({ $isclick }) => ($isclick=="true" ? `var(--Primary)` : `var(--M50)`)};
    color: var(--White);
    font: var(--PC_ButtonText);
    cursor: pointer;
    border:none;
`;

export const ErrDiv = styled.div`
    display: flex;
    width: auto;
    justify-content: center;
`;

export const LError = styled.p`
    display: flex;
    color: var(--Secondary);
    font: var(--PC_BodyText);
    margin: 0 0 60px 0;
`;