import { usePostLogin } from "@/hooks/useLogin";
import ViewHide from "@assets/image/View_hide_light.svg";
import View from "@assets/image/View_light.svg";
import * as S from "@styles/Login/Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputID, setInputID] = useState<string>("");
  const [inputPW, setInputPW] = useState<string>("");
  const [showPW, setShowPW] = useState<boolean>(false);
  const [isCompare, setIsCompare] = useState<boolean>(true);

  const { mutate } = usePostLogin();

  const navigator = useNavigate();

  const handleLogin = () => {
    const body = {
      username: inputID,
      password: inputPW,
    };

    mutate(body, {
      onSuccess: (data) => {
        console.log(data);
        sessionStorage.setItem("token", data.accessToken);
        sessionStorage.setItem("refreshToken", data.refreshToken);

        navigator("/home");
      },
      onError: (error) => {
        console.error("등록 실패:", error);
        setIsCompare(false);
      },
    });
  };

  return (
    <>
      <S.LDiv>
        <S.LText>관리자 로그인</S.LText>
        <S.InputDiv>
          <S.LID
            onChange={(e) => setInputID(e.target.value)}
            $isid={inputID !== "" ? "true" : "false"}
            placeholder="아이디를 입력하세요"
          />
          <S.PWDiv>
            <S.LPW
              onChange={(e) => setInputPW(e.target.value)}
              $ispw={inputPW != "" ? "true" : "false"}
              type={showPW ? "text" : "password"}
              placeholder="비밀번호를 입력하세요"
            />
            {inputPW &&
              (showPW ? (
                <S.PWBtn src={View} onClick={() => setShowPW(!showPW)} />
              ) : (
                <S.PWBtn src={ViewHide} onClick={() => setShowPW(!showPW)} />
              ))}
          </S.PWDiv>
        </S.InputDiv>
        {isCompare ? (
          <></>
        ) : (
          <S.ErrDiv>
            <S.LError>
              *아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.*
            </S.LError>
          </S.ErrDiv>
        )}
        <S.LBtn
          $isclick={inputID != "" && inputPW != "" ? "true" : "false"}
          onClick={inputID != "" && inputPW != "" ? handleLogin : undefined}
        >
          로그인
        </S.LBtn>
      </S.LDiv>
    </>
  );
};
export default Login;
