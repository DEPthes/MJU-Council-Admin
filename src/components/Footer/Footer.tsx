import * as S from "@styles/Footer/FooterComponentStyle";

import Instagram from "@assets/image/Instagram.svg";
import KakaoTalk from "@assets/image/KakaoTalk.svg";
import Mail from "@assets/image/Mail.svg";
import Phone from "@assets/image/Phone.svg";
import { useEffect, useState } from "react";
import { getFooter } from "@/apis/home";

const Footer = () => {
  const [footerData, setFooterData] = useState<{
    generation: string;
    name: string;
    email: string;
    snsUrl: string;
    logoUrl: string;
  } | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const data = await getFooter(); // API 호출
        setFooterData(data.information);
      } catch (error) {
        console.error("Footer 데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <>
      <S.Foot>
        <S.Top>
          <S.Button href={footerData?.snsUrl}>
            <img src={Instagram} />
          </S.Button>
          <S.Button href="https://pf.kakao.com/_BtYfG?fbclid=PAY2xjawG1f95leHRuA2FlbQIxMAABpoCwBfu1h_6g6gqbGlKf8X26ko8oGwQzSsTPWQOh4IaVP7EBhTRh9wg4Aw_aem_apuNHZJ5TnMzhaoFiHI46w">
            <img src={KakaoTalk} />
          </S.Button>
        </S.Top>
        <S.Text style={{ font: "var(--Heading)", margin: "20px 0" }}>
          명지대학교 인문캠퍼스 제{footerData?.generation}대 총학생회{" "}
          {footerData?.name}
        </S.Text>
        <S.CLogo src={footerData?.logoUrl} />
        <S.Divider></S.Divider>
        <S.Middle>
          <S.Img>
            <img src={Phone} />
          </S.Img>
          <S.Text style={{ font: "var(--Caption)", margin: "0 16px 0 0" }}>
            02-300-0901
          </S.Text>
          <S.Img>
            <img src={Mail} />
          </S.Img>
          <S.Text style={{ font: "var(--Caption)", margin: "0" }}>
            {footerData?.email}
          </S.Text>
        </S.Middle>
        <S.Text style={{ font: "var(--Caption)", margin: "12px 0 0 0" }}>
          서울특별시 서대문구 거북골로34 학생회관 5층 S2505 총학생회실
        </S.Text>
        <S.Text
          style={{
            font: "var(--Footer)",
            color: "var(--M50)",
            lineHeight: "20px",
            margin: "40px 0 0 0",
          }}
        >
          Copyright © 2024 MJU Student,DEPth.All Rights Reserved
        </S.Text>
      </S.Foot>
    </>
  );
};

export default Footer;
