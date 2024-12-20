import { parseUrlToArray } from "@/utils/parseUrlToArray";
import * as S from "@styles/Layout";
import { useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import TextBanner from "./common/TextBanner";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  // 정규 표현식을 사용하여 URL의 마지막에 숫자가 있는지 확인
  const isNumberAtEnd = /\/(\d+)\/?$/.test(location.pathname);

  const isLoginPage = location.pathname === "/";

  const urlList = parseUrlToArray(location.pathname);
  return (
    <S.Container>
      <NavBar />
      <TextBanner urlList={urlList} isShow={!isNumberAtEnd} />
      <S.Main>{children}</S.Main>
      {!isLoginPage ? <Footer /> : undefined}
    </S.Container>
  );
};

export default Layout;
