import NavBar from "@/components/NavBar/NavBar";
import * as S from "@styles/Home/Page/HomePageStyle";
import Footer from "@/components/Footer/Footer";
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
