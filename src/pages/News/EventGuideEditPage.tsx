import { putEventGuide } from "@/apis/event";
import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import AddImageContainer from "@/components/common/Write/AddImageContainer";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import { useEventGuide } from "@/hooks/event/useEventGuide";
import * as S from "@/styles/common/WritePageStyle";
import { ImageFileResponse } from "@/types/common";
import { EventGuidePutRequest } from "@/types/News/event";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EventGuideEditPage = () => {
  const navigate = useNavigate();
  const { id, guideId } = useParams();
  const { data } = useEventGuide(Number(id), Number(guideId));

  const [isShowModal, setIsShowModal] = useState(false);

  const [eventDetail, setEventDetail] = useState(data);

  // 조건: 제목과 내용이 비어있을 때
  const isSubmitDisabled =
    !eventDetail.information.title.trim() ||
    !eventDetail.information.content.trim();

  // 조건: 기존 데이터와 변경 데이터가 같을 때
  const isDataUnchanged = JSON.stringify(data) === JSON.stringify(eventDetail);

  // 제목, 내용, 작성 함수
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setEventDetail((prev) => ({
      ...prev,
      information: {
        ...prev.information,
        [name]: value,
      },
    }));
  };

  // 이미지 저장 함수
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "files" | "images",
    filterType?: string
  ) => {
    const files = e.target.files;
    if (files) {
      let fileArray = Array.from(files);

      if (filterType) {
        fileArray = fileArray.filter((file) =>
          file.type.startsWith(filterType)
        );
      }

      setEventDetail((prev) => ({
        ...prev,
        information: {
          ...prev.information,
          [key]: [
            ...prev.information[key],
            ...fileArray,
          ] as ImageFileResponse[],
        },
      }));
    }
  };

  // 이미지 삭제 함수
  const handleFileRemove = (index: number, key: "files" | "images") => {
    setEventDetail((prev) => {
      const updatedArray = prev.information[key].filter((_, i) => i !== index);

      return {
        ...prev,
        information: {
          ...prev.information,
          [key]: updatedArray,
        },
      };
    });
  };

  // 수정된 행사 저장
  const handleSubmit = async () => {
    const newImages = eventDetail.information.images.filter(
      (item) => item instanceof File
    );

    const newFiles = eventDetail.information.files.filter(
      (item) => item instanceof File
    );

    const deletedImageIds = data.information.images
      .filter(
        (originalItem) =>
          !eventDetail.information.images.some(
            (currentItem) =>
              !(currentItem instanceof File) &&
              (currentItem as any).id === originalItem.id
          )
      )
      .map((deletedItem) => deletedItem.id);

    const deletedFileIds = data.information.files
      .filter(
        (originalItem) =>
          !eventDetail.information.files.some(
            (currentItem) =>
              !(currentItem instanceof File) &&
              (currentItem as any).id === originalItem.id
          )
      )
      .map((deletedItem) => deletedItem.id);

    const eventModifyPost: EventGuidePutRequest = {
      images: newImages,
      files: newFiles,
      modifyEventDetailReq: {
        title: eventDetail.information.title,
        content: eventDetail.information.content,
        deleteImages: deletedImageIds,
        deleteFiles: deletedFileIds,
      },
    };

    const response = await putEventGuide(
      Number(id),
      Number(guideId),
      eventModifyPost
    );

    if (response.check) {
      navigate(-1);
    }
  };

  return (
    <S.Container>
      {isShowModal && (
        <CheckModal
          text="현재 작성 중인 글이 사라집니다. <br /> 창을 닫으시겠습니까?"
          onSubmit={() => navigate(-1)}
          onCancel={() => setIsShowModal(false)}
        />
      )}
      <WriteBtnContainer
        onCancel={() => (isDataUnchanged ? navigate(-1) : setIsShowModal(true))}
        onSubmit={handleSubmit}
        isDisabled={isSubmitDisabled || isDataUnchanged}
      />
      <hr />
      <TitleInput
        title={eventDetail.information.title}
        handleInputChange={handleInputChange}
      />
      <AddImageContainer
        images={eventDetail.information.images}
        handleFileRemove={handleFileRemove}
        handleFileChange={handleFileChange}
      />
      <ContentInput
        content={eventDetail.information.content}
        handleInputChange={handleInputChange}
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={eventDetail.information.files}
      />
    </S.Container>
  );
};

export default EventGuideEditPage;
