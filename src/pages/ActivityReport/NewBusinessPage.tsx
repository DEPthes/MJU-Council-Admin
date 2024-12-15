import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import AddImageContainer from "@/components/common/Write/AddImageContainer";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import { usePostBusiness } from "@/hooks/activityReport/useBusiness";
import * as S from "@/styles/common/WritePageStyle";
import { BusinessPostRequest } from "@/types/ActivityReport/business";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBusinessPage = () => {
  const [businessPost, setBusinessPost] = useState<BusinessPostRequest>({
    images: [],
    files: [],
    createBusinessReq: {
      title: "",
      content: "",
    },
  });

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const { mutate: postBusiness } = usePostBusiness();

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

  const handlePostBusiness = () => {
    postBusiness(
      {
        images: businessPost.images,
        files: businessPost.files,
        createBusinessReq: businessPost.createBusinessReq,
      },
      {
        onSuccess: () => {
          navigator("/activityReport/businessList");
          navigator(0);
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
          text="현재 작성 중인 글이 사라집니다. <br /> 창을 닫으시겠습니까?"
          onSubmit={() => navigator(-1)}
          onCancel={() => setIsShowModal(false)}
        />
      )}
      <WriteBtnContainer
        onCancel={() => setIsShowModal(true)}
        onSubmit={handlePostBusiness}
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

export default NewBusinessPage;
