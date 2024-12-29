import div_bar from "@assets/image/Div_bar.svg";
import ManagerLogo from "@assets/image/Manager.svg";
import nav_logo from "@assets/image/Nav_logo.svg";
import NavDivRect from "@assets/image/NavDivRect.svg";
import * as S from "@styles/NavBar/NavBarComponentStyle";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar: React.FC<{
  setOpenModal: (value: boolean) => void;
  setLogoClick: (value: boolean) => void;
  isFixModal: boolean;
  setIsFix: (value: boolean) => void;
}> = ({ setOpenModal, setLogoClick, isFixModal, setIsFix }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const isHome = location.pathname === "/home";
  const isMinutes = location.pathname === "/document/minutes";
  const isMinutesDetail = /^\/document\/minutes\/\d+$/.test(location.pathname); //뒤에 숫자 있어야 함, 그냥 home으로 이동
  const isMinutesEdit = /^\/document\/minutes\/\d+\/edit$/.test(
    location.pathname
  ); //뒤에 숫자/edit 있어야 함, modal
  const isRegulations = location.pathname === "/document/regulations";
  const isRegulationsDetail = /^\/document\/regulations\/\d+$/.test(
    location.pathname
  ); //뒤에 숫자 있어야 함, 그냥 home으로 이동
  const isRegulationsEdit = /^\/document\/regulations\/\d+\/edit$/.test(
    location.pathname
  ); //뒤에 숫자/edit 있어야 함, modal
  const isBusinessList = location.pathname === "/activityReport/businessList";
  const isBusinessDetail = /^\/activityReport\/businessDetail\/\d+$/.test(
    location.pathname
  ); //뒤에 숫자 있어야 함, 그냥 home으로 이동
  const isBusinessEdit = /^\/activityReport\/businessFix\/\d+$/.test(
    location.pathname
  ); //뒤에 숫자 있어야 함, modal
  const isCoalitionList = location.pathname === "/activityReport/coalitionList";
  const isCoalitionDetail = /^\/activityReport\/coalitionDetail\/\d+$/.test(
    location.pathname
  ); //뒤에 숫자 있어야 함, 그냥 home으로 이동
  const isCoalitionEdit = /^\/activityReport\/coalitionFix\/\d+$/.test(
    location.pathname
  ); //뒤에 숫자 있어야 함, modal
  const isNotice = location.pathname === "/news/notice";
  const isNoticeDetail = /^\/news\/notice\/\d+$/.test(location.pathname); //뒤에 숫자 있어야 함, 그냥 home으로 이동
  const isNoticeEdit = /^\/news\/notice\/\d+\/edit$/.test(location.pathname); //뒤에 숫자/edit 있어야 함. modal
  const isEvent = location.pathname === "/news/event";
  const isEventDetail = /^\/news\/event\/\d+$/.test(location.pathname); //뒤에 숫자 있어야 함, home
  const isEventEdit = /^\/news\/event\/\d+\/edit$/.test(location.pathname); //뒤에 숫자/edit 있어야 함. modal
  const isIntroduce = location.pathname === "/introduction/introduce";
  const isOrganization = location.pathname === "/introduction/organization";
  const isDepartment = location.pathname === "/introduction/eachpart";
  const isCommittee = location.pathname === "/introduction/centralCommitee";
  const isPolicyList = location.pathname === "/activityReport/policyList";
  const isPolicyDetail =
    location.pathname === "/activityReport/policyList/policyList?policy=";
  const isNewNotice = location.pathname === "/news/notice/new";
  const isNewEvent = location.pathname === "/news/event/new";
  const isNewBusiness = location.pathname === "/activityReport/newBusiness";
  const isNewCoalition = location.pathname === "/activityReport/newCoalition";
  const isNewMinutes = location.pathname === "/document/minutes/new";
  const isNewRegulations = location.pathname === "/document/regulations/new";
  const isFooter = location.pathname === "/footer";

  const navigate = useNavigate();

  useEffect(() => {
    setLogoClick(false);
  }, []);

  //introduce이고 isFixModal이 ~면 홈으로 아니면 setIsfixmodal을 true로...
  return (
    <>
      <S.Div></S.Div>
      <S.Nav $isloginpage={isLoginPage ? "true" : "false"}>
        <S.Logo
          onClick={
            !isHome &&
            !isMinutes &&
            !isMinutesDetail &&
            !isRegulations &&
            !isRegulationsDetail &&
            !isBusinessList &&
            !isBusinessDetail &&
            !isCoalitionList &&
            !isCoalitionDetail &&
            !isNotice &&
            !isNoticeDetail &&
            !isEvent &&
            !isEventDetail &&
            !isNewNotice &&
            !isNewEvent &&
            !isNewBusiness &&
            !isNewCoalition &&
            !isNewMinutes &&
            !isNewRegulations &&
            !isFooter &&
            !isMinutesEdit &&
            !isEventEdit &&
            !isNoticeEdit &&
            !isBusinessEdit &&
            !isCoalitionEdit &&
            !isRegulationsEdit
              ? !isFixModal &&
                (isIntroduce ||
                  isOrganization ||
                  isCommittee ||
                  isDepartment ||
                  isPolicyList ||
                  isPolicyDetail)
                ? () => navigate("/home") //그냥 홈으로 이동해도 되는 페이지가 아니지만 수정중이 아닌 페이지(수정을 포함하고 있는 페이지) //그냥 홈으로 이동
                : () => {
                    setOpenModal(true); //그냥 홈으로 이동해도 되는 페이지도 아니고 수정중인 페이지 //modal을 띄우게끔
                    setLogoClick(true);
                  }
              : isNewBusiness ||
                isNewCoalition ||
                isNewEvent ||
                isNewMinutes ||
                isNewNotice ||
                isNewRegulations ||
                isFooter ||
                isMinutesEdit ||
                isEventEdit ||
                isNoticeEdit ||
                isBusinessEdit ||
                isCoalitionEdit
              ? () => {
                  setOpenModal(true); //저 위 페이지들 중 새 글을 작성하는 페이지는 modal을 뜨게 해라
                  setLogoClick(true);
                  setIsFix(true);
                }
              : () => navigate("/home") //최종적으로 home으로 이동해라 맨 위의 페이지 중 하나면 (위에 걸리지 않았으면)
          }
        >
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
                  회칙 및 세칙
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
