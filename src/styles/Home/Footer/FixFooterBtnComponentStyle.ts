import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterBtn = styled(Link)`
    display: flex;
    width: 66.6%;
    height: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    text-decoration: none;
    border: 2px solid var(--Primary);
    background-color: white;
    color: var(--Primary);
    font: var(--PC_ButtonText);
    cursor: pointer;
    margin: 0 auto 100px auto;
`;