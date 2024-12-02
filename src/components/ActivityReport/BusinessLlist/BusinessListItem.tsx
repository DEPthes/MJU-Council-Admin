import * as S from "@styles/ActivityReport/BusinessList/BusinessListItemStyle";
import React from "react";

interface BusinessListItemProps {
  title: string;
  Author: string;
  date: string;
  isEnd: boolean;
  onClick: () => void;
}

const BusinessListItem: React.FC<BusinessListItemProps> = ({
  title,
  Author,
  date,
  isEnd,
  onClick,
}) => {
  return (
    <S.Container $isEnd={isEnd} onClick={onClick}>
      <S.Title>{title}</S.Title>
      <S.AuthorContainer>
        <div>{Author}</div> <div>{date}</div>
      </S.AuthorContainer>
    </S.Container>
  );
};

export default BusinessListItem;
