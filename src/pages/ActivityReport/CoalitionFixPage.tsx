import CheckModal from "@/components/common/CheckModal";
import { BusinessDetailResponse } from "@/types/ActivityReport/Business/businessDetailType";
import * as S from "@/styles/common/WritePageStyle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import TitleInput from "@/components/common/Write/TitleInput";
import ContentInput from "@/components/common/Write/ContentInput";
import AddFileButton from "@/components/common/Write/AddFileButton";
import AddImageContainer from "@/components/common/Write/AddImageContainer";

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
      <WriteBtnContainer
        onCancel={() => setIsShowModal(true)}
        onSubmit={handleSubmit}
        isDisabled={isSubmitDisabled}
      />
      <TitleInput
        title={coalitionPost.information.title}
        handleInputChange={handleInputChange}
      />
      <AddImageContainer
        images={coalitionPost.information.images}
        handleFileRemove={handleFileRemove}
        handleFileChange={handleFileChange}
      />
      <ContentInput
        content={coalitionPost.information.content}
        handleInputChange={handleInputChange}
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={coalitionPost.information.files}
      />
    </S.Container>
  );
};

export default CoalitionFixPage;
