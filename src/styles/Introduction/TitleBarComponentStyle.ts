import styled from "styled-components";

export const TDiv = styled.div`
    display: flex;
    width: 66.6%;
    min-width: 500px;
    border-bottom: 4px solid var(--M70);
    border-radius: 4px;
    margin: 0 auto 80px auto;
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
