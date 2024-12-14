import { postNotice } from "@/apis/notice";
import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import AddImageContainer from "@/components/common/Write/AddImageContainer";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import * as S from "@/styles/common/WritePageStyle";
import { NoticePostRequest } from "@/types/News/notice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewNoticePage = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);

  const [noticePost, setNoticePost] = useState<NoticePostRequest>({
    images: [],
    files: [],
    createNoticeReq: {
      title: "",
      content: "",
    },
  });

  // 조건: 제목과 내용이 비어있을 때
  const isSubmitDisabled =
    !noticePost.createNoticeReq.title.trim() ||
    !noticePost.createNoticeReq.content.trim();

  // 조건: 아무것도 작성하지 않았을 때
  const isNoneList =
    noticePost.images.length === 0 &&
    noticePost.files.length === 0 &&
    noticePost.createNoticeReq.title === "" &&
    noticePost.createNoticeReq.content === "";

  // 제목, 내용 작성 함수
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setNoticePost((prev) => ({
      ...prev,
      createNoticeReq: {
        ...prev.createNoticeReq,
        [name]: value,
      },
    }));
  };

  // 이미지, 파일 저장 함수
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

      setNoticePost((prev) => ({
        ...prev,
        [key]: [...prev[key], ...fileArray],
      }));
    }
  };

  // 이미지, 파일 삭제 함수
  const handleFileRemove = (index: number, key: "files" | "images") => {
    setNoticePost((prev) => {
      const updatedArray = prev[key].filter((_, i) => i !== index);

      return {
        ...prev,
        [key]: updatedArray,
      };
    });
  };

  // 공지사항 글 등록
  const handleSubmit = async () => {
    const response = await postNotice(noticePost);

    if (response.check) {
      navigate("/news/notice");
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
        title={noticePost.createNoticeReq.title}
        handleInputChange={handleInputChange}
      />
      <AddImageContainer
        images={noticePost.images}
        handleFileRemove={handleFileRemove}
        handleFileChange={handleFileChange}
      />
      <ContentInput
        content={noticePost.createNoticeReq.content}
        handleInputChange={handleInputChange}
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={noticePost.files}
      />
    </S.Container>
  );
};

export default NewNoticePage;
