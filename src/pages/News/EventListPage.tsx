import DeleteModal from "@/components/common/DeleteModal";
import { useEvents } from "@/hooks/event/useEvents";
import * as S from "@/styles/common/ListPageStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "@/components/common/List/ListBtnContainer";
import GridItemContainer from "@/components/common/List/GridItemContainer";
import { deleteEvents } from "@/apis/event";

const EventListPage = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);
  const { data, refetch } = useEvents();

  // 전체 삭제
  const onAllDelete = async () => {
    const response = await deleteEvents();

    if (response.check) {
      setIsShowModal(false);
      refetch();
    }
  };

  return (
    <S.Container>
      {isShowModal && (
        <DeleteModal
          text="해당 행사의 안내사항을 포함한 모든 게시물이 사라집니다."
          onCancel={() => setIsShowModal(false)}
          onSubmit={onAllDelete}
        />
      )}
      <ButtonContainer
        onDelete={() => setIsShowModal(true)}
        onPost={() => navigate("/news/event/new")}
      />
      {data.information.length > 0 ? (
        <S.GridContainer>
          {data.information.map((item, index) => {
            return (
              <GridItemContainer
                key={index}
                cover={item.cover}
                title={item.title}
                subject="행사"
                date={`${item.startDate.replaceAll(
                  "-",
                  "."
                )} ~ ${item.endDate.replaceAll("-", ".")}`}
                onClick={() => navigate(`/news/event/${item.eventId}`)}
              />
            );
          })}
        </S.GridContainer>
      ) : (
        <S.EmptyText>행사 게시물이 없습니다.</S.EmptyText>
      )}
    </S.Container>
  );
};

export default EventListPage;
