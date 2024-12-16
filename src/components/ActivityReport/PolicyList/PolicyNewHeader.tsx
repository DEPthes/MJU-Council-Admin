import SubmitButton from "@/components/common/Button/SubmitButton";
import { usePostPromiseCategory } from "@/hooks/activityReport/usePolicyCategory";
import * as S from "@styles/ActivityReport/PolicyList/PolicyHeaderStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface PolicyNewHeaderProps {
  onExit: () => void;
}

const PolicyNewHeader: React.FC<PolicyNewHeaderProps> = ({ onExit }) => {
  const [promiseTitle, setPromiseTitle] = useState<string>("");

  const { mutate: postPromiseCategory } = usePostPromiseCategory();
  const navigator = useNavigate();

  const handleChangeHeader = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromiseTitle(e.target.value);
  };

  const handleNewHeader = () => {
    if (!promiseTitle) {
      alert("정책 카테고리명을 입력해주세요.");
      return;
    }
    postPromiseCategory(
      { promiseTitle },
      {
        onSuccess: () => {
          onExit();
          navigator(`/activityReport/policyList`);
        },
        onError: (error) => {
          console.error("공지 등록 실패:", error);
        },
      }
    );
  };

  return (
    <S.Container>
      <S.Bar />
      <S.TextContainer>
        <S.TextInput
          placeholder={"정책 카테고리명을 작성해주세요."}
          value={promiseTitle}
          onChange={handleChangeHeader}
        />
        <SubmitButton onClick={handleNewHeader} isM70={true} />
      </S.TextContainer>
    </S.Container>
  );
};

export default PolicyNewHeader;
