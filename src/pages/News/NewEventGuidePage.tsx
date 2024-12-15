import { postEventGuide } from "@/apis/event";
import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import AddImageContainer from "@/components/common/Write/AddImageContainer";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import * as S from "@/styles/common/WritePageStyle";
import { EventGuidePostRequest } from "@/types/News/event";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NewEventGuidePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isShowModal, setIsShowModal] = useState(false);

  const [eventPost, setEventPost] = useState<EventGuidePostRequest>({
    images: [],
    files: [],
    createEventDetailReq: {
      title: "",
      content: "",
    },
  });

  // 조건: 제목과 내용이 비어있을 때
  const isSubmitDisabled =
    !eventPost.createEventDetailReq.title.trim() ||
    !eventPost.createEventDetailReq.content.trim();

  // 조건: 아무것도 작성하지 않았을 때
  const isNoneList =
    eventPost.images.length === 0 &&
    eventPost.createEventDetailReq.title === "" &&
    eventPost.createEventDetailReq.content === "";

  // 제목, 내용 작성 함수
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
      createEventDetailReq: {
        ...prev.createEventDetailReq,
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

      setEventPost((prev) => ({
        ...prev,
        [key]: [...prev[key], ...fileArray],
      }));
    }
  };

  // 이미지 삭제 함수
  const handleFileRemove = (index: number, key: "files" | "images") => {
    setEventPost((prev) => {
      const updatedArray = prev[key].filter((_, i) => i !== index);

      return {
        ...prev,
        [key]: updatedArray,
      };
    });
  };

  // 행사 글 등록
  const handleSubmit = async () => {
    const response = await postEventGuide(Number(id), eventPost);

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
        onCancel={() => (isNoneList ? navigate(-1) : setIsShowModal(true))}
        onSubmit={handleSubmit}
        isDisabled={isSubmitDisabled}
      />
      <hr />
      <TitleInput
        title={eventPost.createEventDetailReq.title}
        handleInputChange={handleInputChange}
      />
      <AddImageContainer
        images={eventPost.images}
        handleFileRemove={handleFileRemove}
        handleFileChange={handleFileChange}
      />
      <ContentInput
        content={eventPost.createEventDetailReq.content}
        handleInputChange={handleInputChange}
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={eventPost.files}
      />
    </S.Container>
  );
};

export default NewEventGuidePage;
