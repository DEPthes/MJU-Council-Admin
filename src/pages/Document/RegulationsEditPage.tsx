import { patchRegulations } from "@/apis/regulations";
import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import { useRegulationsDetail } from "@/hooks/regulations/useRegulationsDetail";
import * as S from "@/styles/common/WritePageStyle";
import {
  RegulationsFileResponse,
  RegulationsPatchRequest,
} from "@/types/Document/regulations";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RegulationsEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useRegulationsDetail(Number(id));

  const [isShowModal, setIsShowModal] = useState(false);

  const [regulationsDetail, setRegulationsDetail] = useState(data);

  // 조건: 제목이 비어있을 때
  const isSubmitDisabled = !regulationsDetail.information.title.trim();

  // 조건: 기존 데이터와 변경 데이터가 같을 때
  const isDataUnchanged =
    JSON.stringify(data) === JSON.stringify(regulationsDetail);

  // 제목, 내용 작성 함수
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setRegulationsDetail((prev) => ({
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

        setRegulationsDetail((prev) => ({
          ...prev,
          information: {
            ...prev.information,
            [key]: [
              ...prev.information[key],
              ...fileArray,
            ] as RegulationsFileResponse[],
          },
        }));
      }
    }
  };

  // 파일 삭제 함수
  const handleFileRemove = (index: number, key: "files" | "images") => {
    if (key === "files") {
      setRegulationsDetail((prev) => {
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
    const newFiles = regulationsDetail.information.files.filter(
      (item) => item instanceof File
    );

    const deletedFileIds = data.information.files
      .filter(
        (originalItem) =>
          !regulationsDetail.information.files.some(
            (currentItem) =>
              !(currentItem instanceof File) &&
              (currentItem as any).regulationFileId ===
                originalItem.regulationFileId
          )
      )
      .map((deletedItem) => deletedItem.regulationFileId);

    const regulationsModifyPost: RegulationsPatchRequest = {
      file: newFiles,
      modifyRegulationReq: {
        title: regulationsDetail.information.title,
        content: regulationsDetail.information.content,
        deleteFiles: deletedFileIds,
      },
    };

    const response = await patchRegulations(Number(id), regulationsModifyPost);

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
        title={regulationsDetail.information.title}
        handleInputChange={handleInputChange}
        placeholder="회칙 및 세칙명을 입력하세요. (필수)"
      />
      <ContentInput
        content={regulationsDetail.information.content}
        handleInputChange={handleInputChange}
        placeholder="내용을 입력하세요. (선택)"
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={regulationsDetail.information.files}
      />
    </S.Container>
  );
};

export default RegulationsEditPage;
