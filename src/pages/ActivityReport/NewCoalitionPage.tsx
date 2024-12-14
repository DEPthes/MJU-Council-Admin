import CheckModal from "@/components/common/CheckModal";
import { RequestData } from "@/types/ActivityReport/Business";
import * as S from "@/styles/common/WritePageStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import TitleInput from "@/components/common/Write/TitleInput";
import ContentInput from "@/components/common/Write/ContentInput";
import AddFileButton from "@/components/common/Write/AddFileButton";
import AddImageContainer from "@/components/common/Write/AddImageContainer";

const NewCoalitionPage = () => {
  const [businessPost, setBusinessPost] = useState<RequestData>({
    images: [],
    files: [],
    createBusinessReq: {
      title: "",
      content: "",
    },
  });

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  // 제목과 내용이 비어 있는지 확인
  const isSubmitDisabled =
    !businessPost.createBusinessReq.title.trim() ||
    !businessPost.createBusinessReq.content.trim();

  const navigator = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setBusinessPost((prev) => ({
      ...prev,
      createBusinessReq: {
        ...prev.createBusinessReq,
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

      setBusinessPost((prev) => ({
        ...prev,
        [key]: [...prev[key], ...fileArray],
      }));
    }
  };

  const handleFileRemove = (index: number, key: "files" | "images") => {
    setBusinessPost((prev) => {
      const updatedArray = prev[key].filter((_, i) => i !== index);

      return {
        ...prev,
        [key]: updatedArray,
      };
    });
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
        onSubmit={function (): void {
          throw new Error("Function not implemented.");
        }}
        isDisabled={isSubmitDisabled}
      />
      <TitleInput
        title={businessPost.createBusinessReq.title}
        handleInputChange={handleInputChange}
      />
      <AddImageContainer
        images={businessPost.images}
        handleFileRemove={handleFileRemove}
        handleFileChange={handleFileChange}
      />
      <ContentInput
        content={businessPost.createBusinessReq.content}
        handleInputChange={handleInputChange}
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={businessPost.files}
      />
    </S.Container>
  );
};

export default NewCoalitionPage;
