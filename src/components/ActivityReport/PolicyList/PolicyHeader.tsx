import DeleteButton from "@/components/common/Button/DeleteButton";
import FixButton from "@/components/common/Button/FixButton";
import SubmitButton from "@/components/common/Button/SubmitButton";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyHeaderStyle";
import { useState } from "react";
import DeleteModal from "../../common/DeleteModal";

interface PolicyHeaderProps {
  title: string;
}

const PolicyHeader: React.FC<PolicyHeaderProps> = ({ title }) => {
  const [isFix, setIsFix] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleSubmit = () => {
    setIsFix(false);
  };

  return (
    <S.Container>
      {isShowModal && (
        <DeleteModal
          onCancel={() => setIsShowModal(false)}
          onSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
      <S.Bar />
      <S.TextContainer>
        {isFix ? <S.TextInput placeholder={title} /> : <S.Text>{title}</S.Text>}
        <S.ButtonContainer>
          {isFix ? (
            <>
              <DeleteButton onClick={() => setIsShowModal(true)} />
              <SubmitButton onClick={handleSubmit} isM70={true} />
            </>
          ) : (
            <FixButton onClick={() => setIsFix(true)} isM70={true} />
          )}
        </S.ButtonContainer>
      </S.TextContainer>
    </S.Container>
  );
};

export default PolicyHeader;
