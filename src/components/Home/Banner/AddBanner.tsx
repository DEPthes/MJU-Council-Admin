import * as S from "@styles/Home/Banner/AddBannerComponentStyle";
import AddBtn from "./AddBtn";
import FixFooterBtn from "@components/Footer/FixFooterBtn";
import { useEffect, useState } from "react";
import { getBanners } from "@/apis/home";

const AddBanner = () => {
  const [banners, setBanners] = useState<{ id: number | null; imgUrl: string }[]>([]);

  // 서버에서 배너 데이터 가져오기
  const fetchBanners = async () => {
    try {
      const data = await getBanners();
      const fetchedBanners = data.information.map((banner: { bannerId: number; imgUrl: string }) => ({
        id: banner.bannerId,
        imgUrl: banner.imgUrl,
      }));

      const filledBanners = [...fetchedBanners];
      while (filledBanners.length < 4) {
        filledBanners.push({ id: null, imgUrl: "" }); // 빈 자리 추가
      }

      setBanners(filledBanners.slice(0, 4)); // 최대 4개만 유지
    } catch (error) {
      console.error("배너 데이터를 불러오는데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <S.WholeDiv>
      <S.BannerDiv>
        {banners.map((banner, index) => (
          <AddBtn key={index} id={banner.id} image={banner.imgUrl} />
        ))}
      </S.BannerDiv>
      <S.FixDiv>
        <FixFooterBtn />
      </S.FixDiv>
    </S.WholeDiv>
  );
};

export default AddBanner;
