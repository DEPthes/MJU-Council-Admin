import styled from "styled-components";

export const OrgDiv = styled.div`
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

export const FakeDiv = styled.div`
    display: flex;
    width: 170%;
`;