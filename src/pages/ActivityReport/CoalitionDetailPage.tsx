import BusinessFileComponent from "@/components/ActivityReport/BusinessLlist/BusinessFileComponent";
import DeleteButton from "@/components/common/Button/DeleteButton";
import FixButton from "@/components/common/Button/FixButton";
import CheckModal from "@/components/common/CheckModal";
import * as S from "@styles/ActivityReport/BusinessList/BusinessDetailStyle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
      <S.BackButton onClick={() => navigator("/activityReport/coalitionList")}>
        목록으로
      </S.BackButton>
      <S.HeaderContainer>
        <S.HeaderText>{data.information.title}</S.HeaderText>
        <S.ButtonContainer>
          <DeleteButton onClick={() => setIsShowModal(true)} />
          <FixButton
            onClick={() => navigator(`/activityRepory/coalitionFix/${id}`)}
          />
        </S.ButtonContainer>
      </S.HeaderContainer>
      <S.Date>
        {data.information.startDate} <p>~</p> {data.information.endDate}
      </S.Date>
      <S.Label>이미지</S.Label>
      <S.ImageContainer>
        {data.information.images.map((item, index) => (
          <S.Image key={index}>
            <img
              src={item.url}
              alt="Council"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </S.Image>
        ))}
      </S.ImageContainer>
      <S.Label>내용</S.Label>
      <S.Content>{data.information.content}</S.Content>
      <S.Label>첨부 파일</S.Label>
      {data.information.files.map((item, index) => (
        <BusinessFileComponent key={index} file={item} />
      ))}
    </S.Container>
  );
};

export default CoalitionDetailPage;
