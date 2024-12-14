import * as S from "@styles/common/List/ListItemStyle";

type Props = {
  title: string;
  date: string;
  onClick: () => void;
};

const ListItem = ({ title, date, onClick }: Props) => {
  return (
    <S.ListItemContainer onClick={onClick}>
      <S.Title>
        {title.length > 16 ? title.slice(0, 16) + "..." : title}
      </S.Title>
      <S.RightWrap>
        <p>총학생회</p>
        <p>{date}</p>
      </S.RightWrap>
    </S.ListItemContainer>
  );
};

export default ListItem;
