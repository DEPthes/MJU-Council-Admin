import CheckModal from "@/components/common/CheckModal";
import DateInput from "@/components/common/Write/DateInput";
import WriteBtnContainer from "@/components/common/Write/WriteBtnContainer";
import * as S from "@/styles/common/WritePageStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewNoticePage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
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
        onCancel={() => setIsShowModal(true)}
        onSubmit={function (): void {
          throw new Error("Function not implemented.");
        }}
        isDisabled={false}
      />
      <hr />
      <DateInput
        startDate={startDate}
        endDate={endDate}
        handleInputChange={handleInputChange}
      />
    </S.Container>
  );
};

export default NewNoticePage;
