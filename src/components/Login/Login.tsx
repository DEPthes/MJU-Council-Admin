import { postLogin } from "@/apis/login"; // API 호출 함수
import { useState } from "react";
import * as S from "@styles/Login/Login";
import View from "@assets/image/View_light.svg";
import ViewHide from "@assets/image/View_hide_light.svg";

const Login = () => {
  const [inputID, setInputID] = useState<string>(""); // 사용자 입력 ID
  const [inputPW, setInputPW] = useState<string>(""); // 사용자 입력 PW
  const [showPW, setShowPW] = useState<boolean>(false); // 비밀번호 표시 토글
  const [isCompare, setIsCompare] = useState<boolean>(true); // 로그인 결과 메시지 표시 여부

  const handleLogin = async () => {
    try {
      const data = await postLogin(inputID, inputPW); // postLogin 호출
      console.log(data.accessToken);
      // window.location.href = "/";
      if (data?.accessToken) {
        // 토큰 저장
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        // 로그인 성공 시 홈으로 리다이렉트
        window.location.href = "/";
      } else {
        setIsCompare(false); // 로그인 실패 메시지 표시
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      setIsCompare(false); // 로그인 실패 시 메시m지 표시
    }
  };

  return (
    <S.LDiv>
      <S.LText>관리자 로그인</S.LText>
      <S.InputDiv>
        {/* 아이디 입력 */}
        <S.LID
          onChange={(e) => setInputID(e.target.value)}
          $isid={inputID !== "" ? "true" : "false"}
          placeholder="아이디를 입력하세요"
        />
        {/* 비밀번호 입력 */}
        <S.PWDiv>
          <S.LPW
            onChange={(e) => setInputPW(e.target.value)}
            $ispw={inputPW !== "" ? "true" : "false"}
            type={showPW ? "text" : "password"}
            placeholder="비밀번호를 입력하세요"
          />
          {inputPW && (
            <S.PWBtn
              src={showPW ? View : ViewHide}
              onClick={() => setShowPW(!showPW)}
            />
          )}
        </S.PWDiv>
      </S.InputDiv>
      {/* 로그인 실패 메시지 */}
      {!isCompare && (
        <S.ErrDiv>
          <S.LError>
            *아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.*
          </S.LError>
        </S.ErrDiv>
      )}
      {/* 로그인 버튼 */}
      <S.LBtn
        $isclick={inputID !== "" && inputPW !== "" ? "true" : "false"}
        onClick={inputID !== "" && inputPW !== "" ? handleLogin : undefined}
      >
        로그인
      </S.LBtn>
    </S.LDiv>
  );
};

export default Login;
