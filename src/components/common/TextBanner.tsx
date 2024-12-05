import * as S from "@styles/Layout";
import React from "react";

interface TextBannerProps {
  urlList: string[];
  isShow: boolean;
}

const TextBanner: React.FC<TextBannerProps> = ({ urlList, isShow }) => {
  if (urlList.length === 0) return;
  if (!isShow) return;
  return (
    <S.BannerContainer>
      <S.Text>{urlList[urlList.length - 1]}</S.Text>
    </S.BannerContainer>
  );
};

export default TextBanner;
