import { putEvent } from "@/apis/event";
import CheckModal from "@/components/common/CheckModal";
import SubHeader from "@/components/common/Detail/SubHeader";
import AddImageContainer from "@/components/common/Write/AddImageContainer";
import ContentInput from "@/components/common/Write/ContentInput";
import DateInput from "@/components/common/Write/DateInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import EventGuideItem from "@/components/News/EventGuideItem";
import { useEvent } from "@/hooks/event/useEvent";
import * as S from "@/styles/common/WritePageStyle";
import { ImageFileResponse } from "@/types/common";
import { EventPutRequest } from "@/types/News/event";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EventEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useEvent(Number(id));

  const [isShowModal, setIsShowModal] = useState(false);

  const [eventDetail, setEventDetail] = useState(data);

  // 조건: 제목과 내용과 기간이 비어있을 때
  const isSubmitDisabled =
    !eventDetail.information.title.trim() ||
    !eventDetail.information.content.trim() ||
    !eventDetail.information.startDate.trim() ||
    !eventDetail.information.endDate.trim();

  // 조건: 기존 데이터와 변경 데이터가 같을 때
  const isDataUnchanged = JSON.stringify(data) === JSON.stringify(eventDetail);

  // 제목, 내용, 기간 작성 함수
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
    if (key === "images") {
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
    }
  };

  // 이미지 삭제 함수
  const handleFileRemove = (index: number, key: "files" | "images") => {
    if (key === "images") {
      setEventDetail((prev) => {
        const updatedArray = prev.information[key].filter(
          (_, i) => i !== index
        );

        return {
          ...prev,
          information: {
            ...prev.information,
            [key]: updatedArray,
          },
        };
      });
    }
  };

  // 수정된 행사 저장
  const handleSubmit = async () => {
    if (eventDetail.information.startDate > eventDetail.information.endDate) {
      return alert("기간을 정확히 입력해주세요.");
    }
    const newImages = eventDetail.information.images.filter(
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

    const eventModifyPost: EventPutRequest = {
      images: newImages,
      modifyEventReq: {
        title: eventDetail.information.title,
        content: eventDetail.information.content,
        startDate: eventDetail.information.startDate,
        endDate: eventDetail.information.endDate,
        deleteImages: deletedImageIds,
      },
    };

    const response = await putEvent(Number(id), eventModifyPost);

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
      <DateInput
        startDate={eventDetail.information.startDate}
        endDate={eventDetail.information.endDate}
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
      <div style={{ height: 80 }}></div>
      <SubHeader
        title="행사 안내"
        onPost={() => navigate(`/news/event/${id}/new`)}
      />
      {data.information.eventDetails.length > 0 ? (
        <S.GridContainer>
          {data.information.eventDetails.map((item, index) => {
            return (
              <EventGuideItem
                key={index}
                cover={item.cover}
                title={item.title}
                date={item.createdAt.replaceAll("-", ".")}
                onClick={() =>
                  navigate(`/news/event/${id}/${item.eventDetailId}`, {
                    state: { title: data.information.title },
                  })
                }
              />
            );
          })}
        </S.GridContainer>
      ) : (
        <S.NoneList>행사 안내사항을 추가하세요.</S.NoneList>
      )}
    </S.Container>
  );
};

export default EventEditPage;
