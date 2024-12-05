import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  height: 80px;
`;
export const Nav = styled.div<{isloginpage:string}>`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  min-width: 950px;
  left: 0;
  top: 0;
  z-index: 100;
  background-color: white;
  border-bottom: ${({isloginpage})=>(isloginpage=="true")?`nond`: `1px solid var(--M30)`};
`;

export const Logo = styled(Link)`
  height: 35px;
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

export const Bar = styled.img`
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
  align-items: center;
`;

export const CouncilText = styled.p`
  display: flex;
  color: var(--Primary);
  font: var(--PC_SubeaderText);
  margin-right: auto;
`;

export const Menu = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  padding: 0;
  color: var(--Primary);
  font: var(--PC_MenuText);
  cursor: pointer;
  height: 80px;
  width: 100%;
`;

export const Manager = styled.div`
  display: flex;
  margin: 0 40px 0 auto;
`;

export const Img = styled.img`
  display: flex;
  width: 20px;
  margin-right: 4px;
`;

export const NText = styled.p`
  display: flex;
  color: var(--M70);
  font: var(--ListTitle);
`;

export const NLogoutText = styled(Link)`
  display: flex;
  color: var(--M70);
  font: var(--ListTitle);
  margin: auto 0 auto 20px;
  cursor: pointer;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-position: from-font;
`;

export const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  width: 13%;
  // flex-grow: 1;
`;

// 하위 메뉴 Wrapper
export const SubMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--M5);
  z-index: 10;
  width: 100%;
  color: var(--Primary);
  font: var(--HeaderTitle);
  min-width: 150px;

  ${MenuWrapper}:hover & {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;
  }
`;

// 하위 메뉴 항목
export const SubMenuItem = styled(Link)`
  display: block;
  padding: 8px 20px;
  color: var(--Primary);
  text-decoration: none;
  font: var(--PC_SubMenuText);
`;
