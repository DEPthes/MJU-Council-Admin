import { deleteRegulationsDetail } from "@/apis/regulations";
import BackButton from "@/components/common/Button/BackButton";
import CheckModal from "@/components/common/CheckModal";
import ContentView from "@/components/common/Detail/ContentView";
import DetailHeader from "@/components/common/Detail/DetailHeader";
import FileView from "@/components/common/Detail/FileView";
import { useRegulationsDetail } from "@/hooks/regulations/useRegulationsDetail";
import * as S from "@/styles/common/WritePageStyle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RegulationsDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useRegulationsDetail(Number(id));

  const [isShowModal, setIsShowModal] = useState(false);

  // 학생회칙 삭제
  const handleDelete = async () => {
    const response = await deleteRegulationsDetail(Number(id));

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
        onEdit={() => navigate(`/document/regulations/${id}/edit`)}
      />
      {data.information.content && (
        <ContentView content={data.information.content} />
      )}
      {data.information.files.length > 0 && (
        <FileView
          files={data.information.files.map((file) => ({
            id: file.regulationFileId,
            name: file.fileName,
            url: file.fileUrl,
          }))}
        />
      )}
    </S.Container>
  );
};

export default RegulationsDetailPage;
