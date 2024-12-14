import { postMinutes } from "@/apis/minutes";
import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import * as S from "@/styles/common/WritePageStyle";
import { MinutesPostRequest } from "@/types/Document/minutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewMinutesPage = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);

  const [minutesPost, setMinutesPost] = useState<MinutesPostRequest>({
    files: [],
    createMinuteReq: {
      title: "",
      content: "",
    },
  });

  // 조건: 제목과 내용이 비어있을 때
  const isSubmitDisabled =
    !minutesPost.createMinuteReq.title.trim() ||
    !minutesPost.createMinuteReq.content.trim();

  // 조건: 아무것도 작성하지 않았을 때
  const isNoneList =
    minutesPost.files.length === 0 &&
    minutesPost.createMinuteReq.title === "" &&
    minutesPost.createMinuteReq.content === "";

  // 제목, 내용 작성 함수
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setMinutesPost((prev) => ({
      ...prev,
      createMinuteReq: {
        ...prev.createMinuteReq,
        [name]: value,
      },
    }));
  };

  // 파일 저장 함수
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "files" | "images",
    filterType?: string
  ) => {
    if (key === "files") {
      const files = e.target.files;
      if (files) {
        let fileArray = Array.from(files);

        if (filterType) {
          fileArray = fileArray.filter((file) =>
            file.type.startsWith(filterType)
          );
        }

        setMinutesPost((prev) => ({
          ...prev,
          [key]: [...prev[key], ...fileArray],
        }));
      }
    }
  };

  // 파일 삭제 함수
  const handleFileRemove = (index: number, key: "files" | "images") => {
    if (key === "files") {
      setMinutesPost((prev) => {
        const updatedArray = prev[key].filter((_, i) => i !== index);

        return {
          ...prev,
          [key]: updatedArray,
        };
      });
    }
  };

  // 공지사항 글 등록
  const handleSubmit = async () => {
    const response = await postMinutes(minutesPost);

    if (response.check) {
      navigate("/document/minutes");
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
        title={minutesPost.createMinuteReq.title}
        handleInputChange={handleInputChange}
      />
      <ContentInput
        content={minutesPost.createMinuteReq.content}
        handleInputChange={handleInputChange}
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={minutesPost.files}
      />
    </S.Container>
  );
};

export default NewMinutesPage;
