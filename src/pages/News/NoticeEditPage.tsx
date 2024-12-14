import { putNotice } from "@/apis/notice";
import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import AddImageContainer from "@/components/common/Write/AddImageContainer";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import { useNotice } from "@/hooks/notice/useNotice";
import * as S from "@/styles/common/WritePageStyle";
import { NoticePutRequest } from "@/types/News/notice";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NoticeEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useNotice(Number(id));

  const [isShowModal, setIsShowModal] = useState(false);

  const [noticeDetail, setNoticeDetail] = useState(data);

  // 조건: 제목과 내용이 비어있을 때
  const isSubmitDisabled =
    !noticeDetail.information.title.trim() ||
    !noticeDetail.information.content.trim();

  // 조건: 기존 데이터와 변경 데이터가 같을 때
  const isDataUnchanged = JSON.stringify(data) === JSON.stringify(noticeDetail);

  // 제목, 내용 작성 함수
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setNoticeDetail((prev) => ({
      ...prev,
      information: {
        ...prev.information,
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

      setNoticeDetail((prev) => ({
        ...prev,
        information: {
          ...prev.information,
          [key]: [...prev.information[key], ...fileArray],
        },
      }));
    }
  };

  // 이미지, 파일 삭제 함수
  const handleFileRemove = (index: number, key: "files" | "images") => {
    setNoticeDetail((prev) => {
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

  // 수정된 공지사항 저장
  const handleSubmit = async () => {
    const newImages = noticeDetail.information.images.filter(
      (item) => item instanceof File
    );

    const newFiles = noticeDetail.information.files.filter(
      (item) => item instanceof File
    );

    const deletedImageIds = data.information.images
      .filter(
        (originalItem) =>
          !noticeDetail.information.images.some(
            (currentItem) =>
              !(currentItem instanceof File) &&
              (currentItem as any).id === originalItem.id
          )
      )
      .map((deletedItem) => deletedItem.id);

    const deletedFileIds = data.information.files
      .filter(
        (originalItem) =>
          !noticeDetail.information.files.some(
            (currentItem) =>
              !(currentItem instanceof File) &&
              (currentItem as any).id === originalItem.id
          )
      )
      .map((deletedItem) => deletedItem.id);

    const noticeModifyPost: NoticePutRequest = {
      images: newImages,
      files: newFiles,
      modifyNoticeReq: {
        title: noticeDetail.information.title,
        content: noticeDetail.information.content,
        deleteImages: deletedImageIds,
        deleteFiles: deletedFileIds,
      },
    };

    const response = await putNotice(Number(id), noticeModifyPost);

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
        title={noticeDetail.information.title}
        handleInputChange={handleInputChange}
      />
      <AddImageContainer
        images={noticeDetail.information.images}
        handleFileRemove={handleFileRemove}
        handleFileChange={handleFileChange}
      />
      <ContentInput
        content={noticeDetail.information.content}
        handleInputChange={handleInputChange}
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={noticeDetail.information.files}
      />
    </S.Container>
  );
};

export default NoticeEditPage;
