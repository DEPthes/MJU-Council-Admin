import * as S from "@styles/News/EventGuideItemStyle";

interface Props {
  cover: string;
  title: string;
  date: string;
  onClick: () => void;
}

const EventGuideItem = ({ cover, title, date, onClick }: Props) => {
  return (
    <S.Container onClick={onClick}>
      <img src={cover} loading="lazy" />
      <S.Title>
        {title.length < 13 ? title : `${title.slice(0, 12)}...`}
      </S.Title>
      <S.Text>{date}</S.Text>
    </S.Container>
  );
};

export default EventGuideItem;
