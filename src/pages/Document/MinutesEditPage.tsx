import { patchMinutes } from "@/apis/minutes";
import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import { useMinutesDetail } from "@/hooks/minutes/useMinutesDetail";
import * as S from "@/styles/common/WritePageStyle";
import { FileResponse, MinutesPatchRequest } from "@/types/Document/minutes";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MinutesEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useMinutesDetail(Number(id));

  const [isShowModal, setIsShowModal] = useState(false);

  const [minutesDetail, setMinutesDetail] = useState(data);

  // 조건: 제목과 내용이 비어있을 때
  const isSubmitDisabled =
    !minutesDetail.information.title.trim() ||
    !minutesDetail.information.content.trim();

  // 조건: 기존 데이터와 변경 데이터가 같을 때
  const isDataUnchanged =
    JSON.stringify(data) === JSON.stringify(minutesDetail);

  // 제목, 내용 작성 함수
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setMinutesDetail((prev) => ({
      ...prev,
      information: {
        ...prev.information,
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

        setMinutesDetail((prev) => ({
          ...prev,
          information: {
            ...prev.information,
            [key]: [...prev.information[key], ...fileArray] as FileResponse[],
          },
        }));
      }
    }
  };

  // 파일 삭제 함수
  const handleFileRemove = (index: number, key: "files" | "images") => {
    if (key === "files") {
      setMinutesDetail((prev) => {
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

  // 수정된 공지사항 저장
  const handleSubmit = async () => {
    const newFiles = minutesDetail.information.files.filter(
      (item) => item instanceof File
    );

    const deletedFileIds = data.information.files
      .filter(
        (originalItem) =>
          !minutesDetail.information.files.some(
            (currentItem) =>
              !(currentItem instanceof File) &&
              (currentItem as any).minuteFileId === originalItem.minuteFileId
          )
      )
      .map((deletedItem) => deletedItem.minuteFileId);

    const minutesModifyPost: MinutesPatchRequest = {
      files: newFiles,
      modifyMinuteReq: {
        title: minutesDetail.information.title,
        content: minutesDetail.information.content,
        deleteFiles: deletedFileIds,
      },
    };

    const response = await patchMinutes(Number(id), minutesModifyPost);

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
        title={minutesDetail.information.title}
        handleInputChange={handleInputChange}
      />
      <ContentInput
        content={minutesDetail.information.content}
        handleInputChange={handleInputChange}
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={minutesDetail.information.files}
      />
    </S.Container>
  );
};

export default MinutesEditPage;
