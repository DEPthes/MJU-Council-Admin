import { putBusiness } from "@/apis/ActivityReport/business";
import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import AddImageContainer from "@/components/common/Write/AddImageContainer";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import { useBusinessDetail } from "@/hooks/activityReport/useBusiness";
import * as S from "@/styles/common/WritePageStyle";
import { BusinessPutRequest } from "@/types/ActivityReport/business";
import { BusinessDetailResponse } from "@/types/ActivityReport/businessDetailType";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BusinessFixPage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const { data } = useBusinessDetail(Number(id));
  const businessData = data.information;
  const [businessPost, setBusinessPost] =
    useState<BusinessDetailResponse>(data);

  // 제목과 내용이 비어 있는지 확인
  const isSubmitDisabled =
    !businessPost.information.title.trim() ||
    !businessPost.information.content.trim();

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

      setBusinessPost((prev) => ({
        ...prev,
        information: {
          ...prev.information,
          [key]: [...prev.information[key], ...fileArray],
        },
      }));
    }
  };

  const handleFileRemove = (index: number, key: "files" | "images") => {
    setBusinessPost((prev) => {
      return {
        ...prev,
        information: {
          ...prev.information,
          [key]: prev.information[key].filter((_, i) => i !== index),
        },
      };
    });
  };

  const handleSubmit = async () => {
    const newImages = businessPost.information.images.filter(
      (item) => item instanceof File
    );

    const newFiles = businessPost.information.files.filter(
      (item) => item instanceof File
    );

    const deletedImageIds = businessData.images
      .filter(
        (originalItem) =>
          !businessPost.information.images.some(
            (currentItem) =>
              !(currentItem instanceof File) &&
              (currentItem as any).id === originalItem.id
          )
      )
      .map((deletedItem) => deletedItem.id);

    const deletedFileIds = businessData.files
      .filter(
        (originalItem) =>
          !businessPost.information.files.some(
            (currentItem) =>
              !(currentItem instanceof File) &&
              (currentItem as any).id === originalItem.id
          )
      )
      .map((deletedItem) => deletedItem.id);

    console.log("ia", deletedImageIds);

    const businessModifyPost: BusinessPutRequest = {
      images: newImages,
      files: newFiles,
      modifyBusinessReq: {
        title: businessPost.information.title,
        content: businessPost.information.content,
        deleteImages: deletedImageIds,
        deleteFiles: deletedFileIds,
      },
    };

    console.log(businessModifyPost);

    const response = await putBusiness(Number(id), businessModifyPost);

    if (response.check) {
      navigator(-1);
    }
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
        title={businessPost.information.title}
        handleInputChange={handleInputChange}
      />
      <AddImageContainer
        images={businessPost.information.images}
        handleFileRemove={handleFileRemove}
        handleFileChange={handleFileChange}
      />
      <ContentInput
        content={businessPost.information.content}
        handleInputChange={handleInputChange}
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={businessPost.information.files}
      />
    </S.Container>
  );
};

export default BusinessFixPage;
