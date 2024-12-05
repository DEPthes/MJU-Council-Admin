import SubmitButton from "@/components/common/Button/SubmitButton";
import * as S from "@styles/ActivityReport/PolicyList/PolicyHeaderStyle";
import { useState } from "react";

interface PolicyNewHeaderProps {
  onSubmit: (header: string) => void;
}

const PolicyNewHeader: React.FC<PolicyNewHeaderProps> = ({ onSubmit }) => {
  const [header, setHeader] = useState<string>("");

  const handleChangeHeader = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeader(e.target.value);
  };

  return (
    <S.Container>
      <S.Bar />
      <S.TextContainer>
        <S.TextInput
          placeholder={"정책 카테고리명을 작성해주세요."}
          value={header}
          onChange={handleChangeHeader}
        />
        <SubmitButton onClick={() => onSubmit(header)} isM70={true} />
      </S.TextContainer>
    </S.Container>
  );
};

export default PolicyNewHeader;
