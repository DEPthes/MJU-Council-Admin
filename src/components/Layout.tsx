import { parseUrlToArray } from "@/utils/parseUrlToArray";
import * as S from "@styles/Layout";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import TextBanner from "./common/TextBanner";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavModal from "./Home/Banner/NavModal";

interface LayoutProps {
  children: React.ReactNode;
  isFixModal: boolean; //수정 상태이냐 아니냐를 판단, true이면 수정 상태인 것이고 false이면 수정상태가 아니라 home으로 이동할 수 있음
  setIsFixModal: (value: boolean) => void;
}


const Layout: React.FC<LayoutProps> = ({children, isFixModal, setIsFixModal}) => {
  const location = useLocation();

  const [openModal, setOpenModal] = useState<boolean>(false); //모달 열리게 하는 것
  const [logoClick, setLogoClick] = useState<boolean>(false); //로고를 클릭했는지 체크해주는거
  const [goHome, setGoHome] = useState<boolean>(false); //홈으로 가게 해주는거
  
  useEffect(()=>{
    if(goHome) window.location.href = "/home";
    setLogoClick(false);
  },[goHome]);

  useEffect(()=>{
    setLogoClick(false);
  },[]);

  useEffect(()=>{
    
    console.log(openModal, logoClick, goHome, isFixModal)
  },[isFixModal])

  const handleConfirm = () => {
    setGoHome(false);
    setOpenModal(false);
  }

  const handleIgnor = () => {
    setOpenModal(false);
    setGoHome(true);
    setLogoClick(false);
    setTimeout(() => setGoHome(false), 0);
  }

  // 정규 표현식을 사용하여 URL의 마지막에 숫자가 있는지 확인
  const isNumberAtEnd = /\/(\d+)\/?$/.test(location.pathname);

  const isLoginPage = location.pathname === "/";

  const urlList = parseUrlToArray(location.pathname);
  return (
    <S.Container>
      <NavBar setOpenModal={setOpenModal} setLogoClick={setLogoClick} isFixModal={isFixModal} setIsFix={setIsFixModal}/>
      <TextBanner urlList={urlList} isShow={!isNumberAtEnd} />
      <S.Main>{children}</S.Main>
      {!isLoginPage ?<Footer />:undefined}

      {openModal&&logoClick&& isFixModal?
        <NavModal setIsModal={setOpenModal} onIgnore={handleIgnor} onConfirm={handleConfirm}/>:
        <></>
      }
    </S.Container>

  );
};

export default Layout;
