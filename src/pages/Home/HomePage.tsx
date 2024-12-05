import AddBanner from "@/components/Home/Banner/AddBanner";
import * as S from "@styles/Home/Page/HomePageStyle";

const Home = () => {
  return (
    <>
      <S.MainPage>
        {/* <NavBar/> */}
        <AddBanner />
        {/* <Footer/> */}
      </S.MainPage>
    </>
  );
};

export default Home;
