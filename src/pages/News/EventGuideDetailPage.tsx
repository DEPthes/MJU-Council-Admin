import { deleteEventGuideDetail } from "@/apis/event";
import BackButton from "@/components/common/Button/BackButton";
import CheckModal from "@/components/common/CheckModal";
import ContentView from "@/components/common/Detail/ContentView";
import DetailHeader from "@/components/common/Detail/DetailHeader";
import FileView from "@/components/common/Detail/FileView";
import ImageView from "@/components/common/Detail/ImageView";
import { useEventGuide } from "@/hooks/event/useEventGuide";
import * as S from "@/styles/common/WritePageStyle";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const EventGuideDetailPage = () => {
  const navigate = useNavigate();
  const { id, guideId } = useParams();
  const location = useLocation();
  const title = location.state?.title || "";
  const { data } = useEventGuide(Number(id), Number(guideId));

  const [isShowModal, setIsShowModal] = useState(false);

  // 행사 세부사항 삭제
  const handleDelete = async () => {
    const response = await deleteEventGuideDetail(Number(id), Number(guideId));

    if (response.check) {
      setIsShowModal(false);
      navigate(-1);
    }
  };

  return (
    <S.Container>
      {isShowModal && (
        <CheckModal
          text="삭제하시겠습니까?"
          onSubmit={handleDelete}
          onCancel={() => setIsShowModal(false)}
        />
      )}
      <BackButton onClick={() => navigate(-1)} />
      <DetailHeader
        title={title}
        subTitle={data.information.title}
        date={data.information.createdAt.replaceAll("-", ".")}
        onDelete={() => setIsShowModal(true)}
        onEdit={() => navigate(`/news/event/${id}/${guideId}/edit`)}
      />
      {data.information.images.length > 0 && (
        <ImageView images={data.information.images} />
      )}
      <ContentView content={data.information.content} />
      {data.information.files.length > 0 && (
        <FileView files={data.information.files} />
      )}
    </S.Container>
  );
};

export default EventGuideDetailPage;
