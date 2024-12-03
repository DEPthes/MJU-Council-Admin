import { useEffect, useState } from "react";
import * as S from "@styles/Login/Login";
import View from "@assets/image/View_light.svg";
import ViewHide from "@assets/image/View_hide_light.svg";

interface Dummy{
    id: string,
    pw: string
}

const Login = () => {
    const [inputID, setInputID] = useState<string>("");
    const [inputPW, setInputPW] = useState<string>("");
    const [showPW, setShowPW] = useState<boolean>(false);
    const [dummy, setDummy] = useState<Dummy[]>([]);
    const [isCompare, setIsCompare] = useState<boolean>(true);

    const dummyData = [
        {
            id: "soyeon03",
            pw: "soyeon0303"
        },
        {
            id: "login03",
            pw: "login0303"
        }
    ]

    useEffect(()=>{
        setDummy(dummyData);
    },[]);

    const handleLogin = () => {
        const user = dummy.find(info => info.id === inputID);

        if (!user) {
            setIsCompare(false);
            return;
        }

        if (user.pw !== inputPW) {
            setIsCompare(false);
            return;
        }else window.location.href = "/";
    };

    return(
        <>
            <S.LDiv>
                <S.LText>관리자 로그인</S.LText>
                <S.InputDiv>
                    <S.LID onChange={(e)=>setInputID(e.target.value)} isIn={inputID!=""}/>
                    <S.PWDiv>
                        <S.LPW onChange={(e)=>setInputPW(e.target.value)} isIn={inputPW!=""} type={showPW?'text':'password'}/>
                        {inputPW && (
                            showPW?<S.PWBtn src={View} onClick={()=>setShowPW(!showPW)}/>:<S.PWBtn src={ViewHide} onClick={()=>setShowPW(!showPW)}/>
                        )}
                    </S.PWDiv>
                </S.InputDiv>
                {isCompare? <></> : <S.ErrDiv><S.LError>*아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.*</S.LError></S.ErrDiv>}
                <S.LBtn isClick={inputID!=""&&inputPW!=""} onClick={handleLogin}>로그인</S.LBtn>
            </S.LDiv>
        </>
    );
};
export default Login;

