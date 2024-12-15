import SubmitButton from "@/components/common/Button/SubmitButton";
import { usePostPromiseCategory } from "@/hooks/activityReport/usePromise";
import * as S from "@styles/ActivityReport/PolicyList/PolicyHeaderStyle";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PolicyNewHeader: React.FC = () => {
  const [policyParams, setPolicyParams] = useSearchParams();

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
          policyParams.set("policy", decodeURIComponent(promiseTitle));
          setPolicyParams(policyParams);
          navigator(`/activityReport/policyList?policy=${policyParams}`);
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
