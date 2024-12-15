import BackButton from "@/components/common/Button/BackButton";
import CheckModal from "@/components/common/CheckModal";
import ContentView from "@/components/common/Detail/ContentView";
import DetailHeader from "@/components/common/Detail/DetailHeader";
import FileView from "@/components/common/Detail/FileView";
import ImageView from "@/components/common/Detail/ImageView";
import {
  useCoalitionDetail,
  useDeleteCoalition,
} from "@/hooks/activityReport/useCoalition";
import * as S from "@styles/common/WritePageStyle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CoalitionDetailPage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const { data } = useCoalitionDetail(Number(id));

  const navigator = useNavigate();

  const { mutate: deleteCoalition } = useDeleteCoalition();

  //사업 삭제
  const handleDelete = () => {
    deleteCoalition(
      { allianceId: Number(id) },
      {
        onSuccess: () => {
          navigator(-1);
        },
        onError: (error) => {
          console.error("등록 실패:", error);
        },
      }
    );
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
      <BackButton onClick={() => navigator("/activityReport/coalitionList")} />
      <DetailHeader
        title={data.information.title}
        date={`${data.information.startDate} ~ ${data.information.endDate}`}
        onDelete={() => setIsShowModal(true)}
        onEdit={() => navigator(`/activityRepory/coalitionFix/${id}`)}
      />
      <ImageView images={data.information.images} />
      <ContentView content={data.information.content} />
      <FileView files={data.information.files} />
    </S.Container>
  );
};

export default CoalitionDetailPage;
