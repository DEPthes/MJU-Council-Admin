import { useEffect, useState } from "react";
import styled from "styled-components";
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
            <LDiv>
                <LText>관리자 로그인</LText>
                <InputDiv>
                    <LID onChange={(e)=>setInputID(e.target.value)} isIn={inputID!=""}/>
                    <PWDiv>
                        <LPW onChange={(e)=>setInputPW(e.target.value)} isIn={inputPW!=""} type={showPW?'text':'password'}/>
                        {inputPW && (
                            showPW?<PWBtn src={View} onClick={()=>setShowPW(!showPW)}/>:<PWBtn src={ViewHide} onClick={()=>setShowPW(!showPW)}/>
                        )}
                    </PWDiv>
                </InputDiv>
                {isCompare? <></> : <ErrDiv><LError>*아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.*</LError></ErrDiv>}
                <LBtn isClick={inputID!=""&&inputPW!=""} onClick={handleLogin}>로그인</LBtn>
            </LDiv>
        </>
    );
};
export default Login;

const LDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
`;
const LText = styled.div`
    display: flex;
    color: var(--Black);
    text-align: center;
    font: var(--PC_LoginText);
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    margin: 60px 0 60px 0;
`;

const LID= styled.input.attrs({
    placeholder: "아이디를 입력하세요"
})<{isIn:boolean}>`
    display: flex;
    height: 60px;
    padding: 0px 20px;
    border-radius: 4px;
    background: ${({isIn})=>(isIn)?`White`:`var(--M5)`};
    border-style: none;
    border: ${({isIn})=>(isIn)?`1px solid var(--M30)`:``};
    outline: none;
    text-justify: center;
    line-height: 80px;
    font: var(--PC_InputText);
    align-items:center;
    justify-content: center;
    &::placeholder {
        color: var(--M30);
        font: var(--PC_InputText);
    }
`;

const PWDiv = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
`;

const LPW = styled(LID).attrs({
    placeholder: "비밀번호를 입력하세요"
})`
    width: 100%;
    background-img: url('@assets/image/View_light.svg');
`;

const PWBtn = styled.img`
    display: flex;
    cursor: pointer;
    position: absolute;
    transform: translate(350px,50%);
    width: 32px;
    height: 32px;
`;

const LBtn = styled.button<{isClick: boolean}>`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 60px;
    border-radius: 4px;
    background: ${({ isClick }) => (isClick ? `var(--Primary)` : `var(--M50)`)};
    color: var(--White);
    font: var(--PC_ButtonText);
    cursor: pointer;
    border:none;
`;

const ErrDiv = styled.div`
    display: flex;
    width: auto;
    justify-content: center;
`;

const LError = styled.p`
    display: flex;
    color: var(--Secondary);
    font: var(--PC_BodyText);
    margin: 0 0 60px 0;
`;