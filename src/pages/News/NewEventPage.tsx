import { postEvent } from "@/apis/event";
import CheckModal from "@/components/common/CheckModal";
import AddImageContainer from "@/components/common/Write/AddImageContainer";
import ContentInput from "@/components/common/Write/ContentInput";
import DateInput from "@/components/common/Write/DateInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import * as S from "@/styles/common/WritePageStyle";
import { EventPostRequest } from "@/types/News/event";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewEventPage = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);

  const [eventPost, setEventPost] = useState<EventPostRequest>({
    images: [],
    createEventReq: {
      title: "",
      content: "",
      startDate: "",
      endDate: "",
    },
  });

  // 조건: 제목과 내용과 기간이 비어있을 때
  const isSubmitDisabled =
    !eventPost.createEventReq.title.trim() ||
    !eventPost.createEventReq.content.trim() ||
    !eventPost.createEventReq.startDate.trim() ||
    !eventPost.createEventReq.endDate.trim();

  // 조건: 아무것도 작성하지 않았을 때
  const isNoneList =
    eventPost.images.length === 0 &&
    eventPost.createEventReq.title === "" &&
    eventPost.createEventReq.content === "" &&
    eventPost.createEventReq.startDate === "" &&
    eventPost.createEventReq.endDate === "";

  // 제목, 내용, 기간 작성 함수
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setEventPost((prev) => ({
      ...prev,
      createEventReq: {
        ...prev.createEventReq,
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

        setEventPost((prev) => ({
          ...prev,
          [key]: [...prev[key], ...fileArray],
        }));
      }
    }
  };

  // 이미지 삭제 함수
  const handleFileRemove = (index: number, key: "files" | "images") => {
    if (key === "images") {
      setEventPost((prev) => {
        const updatedArray = prev[key].filter((_, i) => i !== index);

        return {
          ...prev,
          [key]: updatedArray,
        };
      });
    }
  };

  // 행사 글 등록
  const handleSubmit = async () => {
    const response = await postEvent(eventPost);

    if (response.check) {
      navigate("/news/event");
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
        onCancel={() => (isNoneList ? navigate(-1) : setIsShowModal(true))}
        onSubmit={handleSubmit}
        isDisabled={isSubmitDisabled}
      />
      <hr />
      <TitleInput
        title={eventPost.createEventReq.title}
        handleInputChange={handleInputChange}
      />
      <DateInput
        startDate={eventPost.createEventReq.startDate}
        endDate={eventPost.createEventReq.endDate}
        handleInputChange={handleInputChange}
      />
      <AddImageContainer
        images={eventPost.images}
        handleFileRemove={handleFileRemove}
        handleFileChange={handleFileChange}
      />
      <ContentInput
        content={eventPost.createEventReq.content}
        handleInputChange={handleInputChange}
      />
    </S.Container>
  );
};

export default NewEventPage;
