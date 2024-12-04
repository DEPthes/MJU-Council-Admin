import NavBar from "@components/Home/NavBar";
import * as S from "@styles/Home/Page/HomePageStyle";
import Footer from "@/components/Home/Footer/Footer";
import AddBanner from "@/components/Home/Banner/AddBanner";

const Home = () => {
  return (
    <>
      <S.MainPage>
        <NavBar/>
        <AddBanner/>
        <Footer/>
      </S.MainPage>
    </>
  );
};

export default Home;
