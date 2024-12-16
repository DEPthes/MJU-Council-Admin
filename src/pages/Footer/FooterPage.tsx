import { useEffect, useState } from "react";
import FooterTitleBar from "@/components/Footer/FooterTitleBar";
import InfoInput from "@/components/Footer/InfoInput";
import * as S from "@styles/Footer/FooterPageComponentStyle";
import { getFooter, putFooter } from "@/apis/home";

const FooterPage = () => {
    const [generation, setGeneration] = useState<number | string>(""); // 기수
    const [name, setName] = useState<string>(""); // 총학생회명
    const [email, setEmail] = useState<string>(""); // 이메일
    const [snsUrl, setSnsUrl] = useState<string>(""); // SNS URL
    const [imageFile, setImageFile] = useState<File | null>(null); // 이미지 파일
    const [loading, setLoading] = useState<boolean>(true); // 로딩 상태

    // 초기 데이터 가져오기
    useEffect(() => {
        const fetchFooterData = async () => {
            try {
                const data = await getFooter();
                if (data.check) {
                    const { generation, name, email, snsUrl, logoUrl } = data.information;
                    setGeneration(generation || ""); // 기수
                    setName(name || ""); // 총학생회명
                    setEmail(email || ""); // 이메일
                    setSnsUrl(snsUrl || ""); // SNS URL
                    setImageFile(logoUrl || "")
                }
            } catch (error) {
                console.error("Error fetching footer data:", error);
                alert("데이터를 불러오는 중 오류가 발생했습니다.");
            } finally {
                setLoading(false); // 로딩 상태 해제
            }
        };

        fetchFooterData();
    }, []);

    // 제출 처리
    const handleSubmit = async () => {
        if (generation && name && email && snsUrl && imageFile) {
            try {
                await putFooter(generation as string, name, email, snsUrl, imageFile);
                alert("총학생회 정보가 성공적으로 업데이트되었습니다!");
            } catch (error) {
                console.error("Error updating footer:", error);
                alert("업데이트 중 오류가 발생했습니다.");
            }
        } else {
            alert("모든 필드를 채워주세요!");
        }
    };

    // 로딩 중일 때 로딩 메시지 표시
    if (loading) {
        return <div>로딩 중...</div>;
    }

    return (
        <S.FDiv>
            <FooterTitleBar
                title="총학생회 정보"
                canEnter={generation !== "" && name !== "" && email !== "" && snsUrl !== "" && imageFile !== null}
                setCanEnter={() => {}}
                onSubmit={handleSubmit} // 제출 시 호출되는 함수 전달
            />
            <InfoInput
                setGeneration={setGeneration}
                setName={setName}
                setEmail={setEmail}
                setSnsUrl={setSnsUrl}
                setImageFile={setImageFile}
                initialValues={{ generation, name, email, snsUrl }} // 초기값 전달
            />
        </S.FDiv>
    );
};

export default FooterPage;
