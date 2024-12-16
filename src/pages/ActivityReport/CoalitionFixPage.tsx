import { putCoalition } from "@/apis/ActivityReport/coalition";
import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import AddImageContainer from "@/components/common/Write/AddImageContainer";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import { useCoalitionDetail } from "@/hooks/activityReport/useCoalition";
import * as S from "@/styles/common/WritePageStyle";
import {
  CoalitionDetailiResponse,
  CoalitionPutRequest,
} from "@/types/ActivityReport/coalition";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CoalitionFixPage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const { data } = useCoalitionDetail(Number(id));
  const coalitionData = data.information;

  const [coalitionPost, setCoalitionPost] =
    useState<CoalitionDetailiResponse>(data);

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

  const handleSubmit = async () => {
    const newImages = coalitionData.images.filter(
      (item) => item instanceof File
    );

    const newFiles = coalitionData.files.filter((item) => item instanceof File);

    const deletedImageIds = coalitionData.images
      .filter(
        (originalItem) =>
          !coalitionData.images.some(
            (currentItem) =>
              !(currentItem instanceof File) &&
              (currentItem as any).id === originalItem.id
          )
      )
      .map((deletedItem) => deletedItem.id);

    const deletedFileIds = coalitionData.files
      .filter(
        (originalItem) =>
          !coalitionData.files.some(
            (currentItem) =>
              !(currentItem instanceof File) &&
              (currentItem as any).id === originalItem.id
          )
      )
      .map((deletedItem) => deletedItem.id);

    const businessModifyPost: CoalitionPutRequest = {
      images: newImages,
      files: newFiles,
      modifyAllianceReq: {
        title: coalitionPost.information.title,
        content: coalitionPost.information.content,
        startDate: coalitionPost.information.startDate,
        endDate: coalitionPost.information.endDate,
        deleteImages: deletedImageIds,
        deleteFiles: deletedFileIds,
      },
    };

    const response = await putCoalition(Number(id), businessModifyPost);

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
        title={coalitionPost.information.title}
        handleInputChange={handleInputChange}
      />
      <S.Label>기간</S.Label>
      <S.DateConatiner>
        <S.DateInput
          value={coalitionPost.information.startDate}
          placeholder={"0000.00.00"}
          name="startDate"
          onChange={handleInputChange}
        />
        ~
        <S.DateInput
          value={coalitionPost.information.endDate}
          placeholder={"0000.00.00"}
          name="endDate"
          onChange={handleInputChange}
        />
      </S.DateConatiner>
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
