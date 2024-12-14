import CheckModal from "@/components/common/CheckModal";
import * as S from "@styles/common/WritePageStyle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "@/components/common/Button/BackButton";
import DetailHeader from "@/components/common/Detail/DetailHeader";
import ImageView from "@/components/common/Detail/ImageView";
import ContentView from "@/components/common/Detail/ContentView";
import FileView from "@/components/common/Detail/FileView";

const data = {
  check: true,
  information: {
    title: "제휴001",
    content: "제휴001의 내용입니다.",
    startDate: "2024-11-17",
    endDate: "2024-11-18",
    images: [
      {
        id: 1,
        name: "제휴 사진",
        url: "https://councill-s3-bucket/aethkefjdif.png",
      },
      {
        id: 2,
        name: "제휴 사진",
        url: "https://councill-s3-bucket/aethkefjdif.png",
      },
    ],
    files: [
      {
        id: 1,
        name: "제휴 파일",
        url: "https://councill-s3-bucket/aethkefjdif.pdf",
      },
      {
        id: 2,
        name: "제휴 파일",
        url: "https://councill-s3-bucket/aethkefjdif.hwp",
      },
    ],
  },
  message: "제휴 10번을 조회합니다.",
};

const CoalitionDetailPage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  const navigator = useNavigate();

  return (
    <S.Container>
      {isShowModal && (
        <CheckModal
          text="삭제하시겠습니까?"
          onSubmit={() => navigator(-1)}
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
