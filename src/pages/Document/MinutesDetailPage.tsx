import { deleteMinutesDetail } from "@/apis/minutes";
import BackButton from "@/components/common/Button/BackButton";
import CheckModal from "@/components/common/CheckModal";
import ContentView from "@/components/common/Detail/ContentView";
import DetailHeader from "@/components/common/Detail/DetailHeader";
import FileView from "@/components/common/Detail/FileView";
import { useMinutesDetail } from "@/hooks/minutes/useMinutesDetail";
import * as S from "@/styles/common/WritePageStyle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MinutesDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useMinutesDetail(Number(id));

  const [isShowModal, setIsShowModal] = useState(false);

  // 회의록 삭제
  const handleDelete = async () => {
    const response = await deleteMinutesDetail(Number(id));

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
        title={data.information.title}
        date={`총학생회 ┃  ${data.information.date
          .split("T")[0]
          .replaceAll("-", ".")}`}
        onDelete={() => setIsShowModal(true)}
        onEdit={() => navigate(`/document/minutes/${id}/edit`)}
      />
      <ContentView content={data.information.content} />
      {data.information.files.length > 0 && (
        <FileView
          files={data.information.files.map((file) => ({
            id: file.minuteFileId,
            name: file.fileName,
            url: file.fileUrl,
          }))}
        />
      )}
    </S.Container>
  );
};

export default MinutesDetailPage;
