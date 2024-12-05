import { Add, Clip } from "@/assets/common";
import NewBusinessFileComponent from "@/components/ActivityReport/BusinessLlist/NewBusinessFileComponent";
import PostCancelButton from "@/components/common/Button/PostCancelButton";
import CheckModal from "@/components/common/CheckModal";
import { BusinessDetailResponse } from "@/types/ActivityReport/Business/businessDetailType";
import * as S from "@styles/ActivityReport/BusinessList/NewBusinessPageStyle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CoalitionFixPage = () => {
  const data = {
    check: true,
    information: {
      title: "사업001",
      content: "사업001의 내용입니다.",
      createdAt: "2024-11-17",
      images: [
        {
          id: 1,
          name: "사업 사진",
          url: "https://councill-s3-bucket/aethkefjdif.png",
        },
        {
          id: 2,
          name: "사업 사진",
          url: "https://councill-s3-bucket/aethkefjdif.png",
        },
      ],
      files: [
        {
          id: 1,
          name: "사업 파일",
          url: "https://councill-s3-bucket/aethkefjdif.pdf",
        },
        {
          id: 2,
          name: "사업 파일",
          url: "https://councill-s3-bucket/aethkefjdif.hwp",
        },
      ],
    },
    message: "사업 1번을 조회합니다.",
  };
  const [coalitionPost, setCoalitionPost] =
    useState<BusinessDetailResponse>(data);

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  // 제목과 내용이 비어 있는지 확인
  const isSubmitDisabled =
    !coalitionPost.information.title.trim() ||
    !coalitionPost.information.content.trim();

  const navigator = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setCoalitionPost((prev) => ({
      ...prev,
      information: {
        ...prev.information,
        [name]: value,
      },
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "files" | "images",
    filterType?: string
  ) => {
    const files = e.target.files;
    if (files) {
      let fileArray = Array.from(files);

      // 이미지 필터링
      if (filterType) {
        fileArray = fileArray.filter((file) =>
          file.type.startsWith(filterType)
        );
      }

      setCoalitionPost((prev) => ({
        ...prev,
        information: {
          ...prev.information,
          [key]: [...prev.information[key], ...fileArray],
        },
      }));
    }
  };

  const handleFileRemove = (index: number, key: "files" | "images") => {
    setCoalitionPost((prev) => {
      return {
        ...prev,
        information: {
          ...prev.information,
          [key]: prev.information[key].filter((_, i) => i !== index),
        },
      };
    });
  };

  const handleSubmit = () => {
    navigator(`/activityReport/BusinessDetail/${id}`);
  };

  return (
    <S.Container>
      {isShowModal && (
        <CheckModal
          text="현재 작성 중인 글이 사라집니다. <br /> 창을 닫으시겠습니까?"
          onSubmit={() => navigator(-1)}
          onCancel={() => setIsShowModal(false)}
        />
      )}
      <S.ButtonContainer>
        <PostCancelButton onClick={() => setIsShowModal(true)} />
        <S.SubmitButton
          $isSubmitDisabled={isSubmitDisabled}
          disabled={isSubmitDisabled}
          onClick={handleSubmit}
        >
          등록
        </S.SubmitButton>
      </S.ButtonContainer>
      <S.Label>제목</S.Label>
      <S.TitleInput
        value={coalitionPost.information.title}
        placeholder="제목을 입력하세요."
        name="title"
        onChange={handleInputChange}
      />
      <S.Label>이미지</S.Label>
      <S.ImageContainer>
        {coalitionPost.information.images.map((item, index) => (
          <S.Image key={index}>
            <img
              src={item.url}
              alt={`uploaded-${index}`}
              style={{ width: "100%", height: "100%" }}
            />
            <S.ImageDeleteButton
              onClick={() => handleFileRemove(index, "images")}
            >
              <S.ImageDeleteButton />
            </S.ImageDeleteButton>
          </S.Image>
        ))}
        <S.AddImageButton
          onClick={() => document.getElementById("image-input")?.click()}
        >
          <Add />
        </S.AddImageButton>
        <input
          id="image-input"
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          multiple
          onChange={(e) => handleFileChange(e, "images", "image/")}
        />
      </S.ImageContainer>
      <S.Label>내용</S.Label>
      <S.TextArea
        value={coalitionPost.information.content}
        placeholder="내용을 입력하세요."
        onChange={handleInputChange}
        name="content"
      />
      <S.Label>첨부 파일</S.Label>
      {coalitionPost.information.files.map((item, index) => (
        <NewBusinessFileComponent
          key={index}
          title={item.name}
          onClick={() => handleFileRemove(index, "files")}
        />
      ))}

      <S.FileButton
        onClick={() => document.getElementById("file-input")?.click()}
      >
        <Clip stroke="white" />
        파일 업로드
        <input
          id="file-input"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => handleFileChange(e, "files")}
          multiple
        />
      </S.FileButton>
    </S.Container>
  );
};

export default CoalitionFixPage;
