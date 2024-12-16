import div_bar from "@assets/image/Div_bar.svg";
import nav_logo from "@assets/image/Nav_logo.svg";
import ManagerLogo from "@assets/image/Manager.svg";
import NavDivRect from "@assets/image/NavDivRect.svg";
import * as S from "@styles/NavBar/NavBarComponentStyle";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      <S.Div></S.Div>
      <S.Nav $isloginpage={isLoginPage? "true": "false"}>
        <S.Logo to={isLoginPage? "/login" :"/"}>
          <img src={nav_logo} />
        </S.Logo>
        <S.Bar src={div_bar} />
        <S.CouncilText>총학생회</S.CouncilText>

        {/* 각 메뉴 항목 */}
        {!isLoginPage ? 
        <>
          <S.MenuWrapper>
            <S.Menu>총학생회</S.Menu>
            <S.SubMenu>
              <S.SubMenuItem to="/introduction/introduce">소개</S.SubMenuItem>
              <S.SubMenuItem to="/introduction/organization">조직도</S.SubMenuItem>
              <S.SubMenuItem to="/introduction/eachpart">국별 업무 소개</S.SubMenuItem>
              <S.SubMenuItem to="/introduction/centralCommitee">중앙운영위원회</S.SubMenuItem>
            </S.SubMenu>
          </S.MenuWrapper>
          <img src={NavDivRect}/>

          <S.MenuWrapper>
            <S.Menu>소식</S.Menu>
            <S.SubMenu>
              <S.SubMenuItem to="/">공지사항</S.SubMenuItem>
              <S.SubMenuItem to="/">행사</S.SubMenuItem>
            </S.SubMenu>
          </S.MenuWrapper>
          <img src={NavDivRect}/>

          <S.MenuWrapper>
            <S.Menu>활동보고</S.Menu>
            <S.SubMenu>
              <S.SubMenuItem to="/">정책 목록</S.SubMenuItem>
              <S.SubMenuItem to="/">사업 목록</S.SubMenuItem>
              <S.SubMenuItem to="/">제휴 현황</S.SubMenuItem>
            </S.SubMenu>
          </S.MenuWrapper>
          <img src={NavDivRect}/>

          <S.MenuWrapper>
            <S.Menu>자료집</S.Menu>
            <S.SubMenu>
              <S.SubMenuItem to="/">회의록</S.SubMenuItem>
              <S.SubMenuItem to="/login">학생회칙</S.SubMenuItem>
            </S.SubMenu>
          </S.MenuWrapper>

          <S.Manager>
            <S.Img src={ManagerLogo} />
            <S.NText>관리자</S.NText>
            <S.NLogoutText to={"/login"}>로그아웃</S.NLogoutText>
          </S.Manager>
        </> 
        :undefined}
      </S.Nav>
    </>
  );
};

export default NavBar;
