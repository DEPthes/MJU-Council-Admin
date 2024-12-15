import { postRegulations } from "@/apis/regulations";
import CheckModal from "@/components/common/CheckModal";
import AddFileButton from "@/components/common/Write/AddFileButton";
import ContentInput from "@/components/common/Write/ContentInput";
import TitleInput from "@/components/common/Write/TitleInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import * as S from "@/styles/common/WritePageStyle";
import { RegulationsPostRequest } from "@/types/Document/regulations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewRegulationsPage = () => {
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);

  const [regulationsPost, setRegulationsPost] =
    useState<RegulationsPostRequest>({
      file: [],
      createRegulationReq: {
        title: "",
        content: "",
      },
    });

  // 조건: 제목이 비어있을 때
  const isSubmitDisabled = !regulationsPost.createRegulationReq.title.trim();

  // 조건: 아무것도 작성하지 않았을 때
  const isNoneList =
    regulationsPost.file.length === 0 &&
    regulationsPost.createRegulationReq.title === "" &&
    regulationsPost.createRegulationReq.content === "";

  // 제목, 내용 작성 함수
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setRegulationsPost((prev) => ({
      ...prev,
      createRegulationReq: {
        ...prev.createRegulationReq,
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

        setRegulationsPost((prev) => ({
          ...prev,
          file: [...prev.file, ...fileArray],
        }));
      }
    }
  };

  // 파일 삭제 함수
  const handleFileRemove = (index: number, key: "files" | "images") => {
    if (key === "files") {
      setRegulationsPost((prev) => {
        const updatedArray = prev.file.filter((_, i) => i !== index);

        return {
          ...prev,
          file: updatedArray,
        };
      });
    }
  };

  // 공지사항 글 등록
  const handleSubmit = async () => {
    const response = await postRegulations(regulationsPost);

    if (response.check) {
      navigate("/document/regulations");
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
        title={regulationsPost.createRegulationReq.title}
        handleInputChange={handleInputChange}
        placeholder="회칙 및 세칙명을 입력하세요. (필수)"
      />
      <ContentInput
        content={regulationsPost.createRegulationReq.content}
        handleInputChange={handleInputChange}
        placeholder="내용을 입력하세요. (선택)"
      />
      <AddFileButton
        handleFileChange={handleFileChange}
        handleFileRemove={handleFileRemove}
        files={regulationsPost.file}
      />
    </S.Container>
  );
};

export default NewRegulationsPage;
