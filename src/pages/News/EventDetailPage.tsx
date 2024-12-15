import { deleteEventDetail } from "@/apis/event";
import BackButton from "@/components/common/Button/BackButton";
import DeleteModal from "@/components/common/DeleteModal";
import ContentView from "@/components/common/Detail/ContentView";
import DetailHeader from "@/components/common/Detail/DetailHeader";
import ImageView from "@/components/common/Detail/ImageView";
import SubHeader from "@/components/common/Detail/SubHeader";
import EventGuideItem from "@/components/News/EventGuideItem";
import { useEvent } from "@/hooks/event/useEvent";
import * as S from "@/styles/common/WritePageStyle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useEvent(Number(id));

  const [isShowModal, setIsShowModal] = useState(false);

  // 행사 삭제
  const handleDelete = async () => {
    const response = await deleteEventDetail(Number(id));

    if (response.check) {
      setIsShowModal(false);
      navigate(-1);
    }
  };

  return (
    <S.Container>
      {isShowModal && (
        <DeleteModal
          text="해당 행사의 안내사항을 포함한 모든 게시물이 사라집니다."
          onSubmit={handleDelete}
          onCancel={() => setIsShowModal(false)}
        />
      )}
      <BackButton onClick={() => navigate(-1)} />
      <DetailHeader
        title={data.information.title}
        date={`${data.information.startDate.replaceAll(
          "-",
          "."
        )} ~ ${data.information.endDate.replaceAll("-", ".")}`}
        onDelete={() => setIsShowModal(true)}
        onEdit={() => navigate(`/news/event/${id}/edit`)}
      />
      {data.information.images.length > 0 && (
        <ImageView images={data.information.images} />
      )}
      <ContentView content={data.information.content} />
      <div style={{ height: 80 }}></div>
      <SubHeader
        title="행사 안내"
        onPost={() => navigate(`/news/event/${id}/new`)}
      />
      {data.information.eventDetails.length > 0 ? (
        <S.GridContainer>
          {data.information.eventDetails.map((item, index) => {
            return (
              <EventGuideItem
                key={index}
                cover={item.cover}
                title={item.title}
                date={item.createdAt.replaceAll("-", ".")}
                onClick={() =>
                  navigate(`/news/event/${id}/${item.eventDetailId}`, {
                    state: { title: data.information.title },
                  })
                }
              />
            );
          })}
        </S.GridContainer>
      ) : (
        <S.NoneList>행사 안내사항을 추가하세요.</S.NoneList>
      )}
    </S.Container>
  );
};

export default EventDetailPage;
