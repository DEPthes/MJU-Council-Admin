import div_bar from "@assets/image/Div_bar.svg";
import ManagerLogo from "@assets/image/Manager.svg";
import nav_logo from "@assets/image/Nav_logo.svg";
import NavDivRect from "@assets/image/NavDivRect.svg";
import * as S from "@styles/NavBar/NavBarComponentStyle";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar:React.FC<{setOpenModal:(value: boolean)=>void, setLogoClick:(value:boolean)=>void,isFixModal:boolean}> = ({setOpenModal, setLogoClick,isFixModal}) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const isHome = location.pathname === "/home";
  const isMinutes = location.pathname === "/document/minutes";
  const isRegulations = location.pathname === "/document/regulations";
  const isBusinessList = location.pathname === "/activityReport/businessList";
  const isCoalitionList = location.pathname === "/activityReport/coalitionList";
  const isNotice = location.pathname === "/news/notice";
  const isEvent = location.pathname === "/news/event";
  const isIntroduce = location.pathname === "/introduction/introduce";
  const isOrganization = location.pathname === "/introduction/organization";
  const isDepartment = location.pathname === "/introduction/eachpart";
  const isCommittee = location.pathname === "/introduction/centralCommitee";
  const isPolicyList = location.pathname === "/activityReport/policyList";


  const navigate = useNavigate();

  useEffect(()=>{
    setLogoClick(false);
  },[])

//introduce이고 isFixModal이 ~면 홈으로 아니면 setIsfixmodal을 true로...
  return (
    <>
      <S.Div></S.Div>
      <S.Nav $isloginpage={isLoginPage ? "true" : "false"}>
      <S.Logo onClick={!isHome && !isMinutes && !isRegulations&& !isBusinessList&& !isCoalitionList&& !isNotice&& !isEvent? (!isFixModal && (isIntroduce || isOrganization || isCommittee || isDepartment || isPolicyList) ? () => navigate('/home') :() => {setOpenModal(true); setLogoClick(true);}) : () => navigate('/home')}>
          <img src={nav_logo} />
        </S.Logo>
        <S.Bar src={div_bar} />
        <S.CouncilText>총학생회</S.CouncilText>

        {/* 각 메뉴 항목 */}
        {!isLoginPage ? (
          <>
            <S.MenuWrapper>
              <S.Menu>총학생회</S.Menu>
              <S.SubMenu>
                <S.SubMenuItem to="/introduction/introduce">소개</S.SubMenuItem>
                <S.SubMenuItem to="/introduction/organization">
                  조직도
                </S.SubMenuItem>
                <S.SubMenuItem to="/introduction/eachpart">
                  국별 업무 소개
                </S.SubMenuItem>
                <S.SubMenuItem to="/introduction/centralCommitee">
                  중앙운영위원회
                </S.SubMenuItem>
              </S.SubMenu>
            </S.MenuWrapper>
            <img src={NavDivRect} />

            <S.MenuWrapper>
              <S.Menu>소식</S.Menu>
              <S.SubMenu>
                <S.SubMenuItem to="/news/notice">공지사항</S.SubMenuItem>
                <S.SubMenuItem to="/news/event">행사</S.SubMenuItem>
              </S.SubMenu>
            </S.MenuWrapper>
            <img src={NavDivRect} />

            <S.MenuWrapper>
              <S.Menu>활동보고</S.Menu>
              <S.SubMenu>
                <S.SubMenuItem to="/activityReport/policyList">
                  정책 목록
                </S.SubMenuItem>
                <S.SubMenuItem to="/activityReport/businessList">
                  사업 목록
                </S.SubMenuItem>
                <S.SubMenuItem to="/activityReport/coalitionList">
                  제휴 현황
                </S.SubMenuItem>
              </S.SubMenu>
            </S.MenuWrapper>
            <img src={NavDivRect} />

            <S.MenuWrapper>
              <S.Menu>자료집</S.Menu>
              <S.SubMenu>
                <S.SubMenuItem to="/document/minutes">회의록</S.SubMenuItem>
                <S.SubMenuItem to="/document/regulations">
                  학생회칙
                </S.SubMenuItem>
              </S.SubMenu>
            </S.MenuWrapper>

            <S.Manager>
              <S.Img src={ManagerLogo} />
              <S.NText>관리자</S.NText>
              <S.NLogoutText to={"/"}>로그아웃</S.NLogoutText>
            </S.Manager>
          </>
        ) : undefined}
      </S.Nav>
    </>
  );
};

export default NavBar;
