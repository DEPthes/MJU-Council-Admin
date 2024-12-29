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
  const [logoUrl, setLogoUrl] = useState<string | null>(null); // 이미지 파일
  const [imageFile, setImageFile] = useState<File | null>(null); // 이미지 파일

  const urlToFile = async (url: string) => {
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split(".").pop(); // url 구조에 맞게 수정할 것
    const filename = url.split("/").pop(); // url 구조에 맞게 수정할 것
    const metadata = { type: `image/${ext === "svg" ? "svg+xml" : ext}` };
    return new File([data], filename!, metadata);
  };

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
          setLogoUrl(logoUrl || ""); // SNS URL
          if (logoUrl) {
            try {
              const file = await urlToFile(logoUrl); // URL을 File로 변환
              setImageFile(file); // 변환된 File 객체를 저장
            } catch (error) {
              console.error("Error converting logo URL to file:", error);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching footer data:", error);
        alert("데이터를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchFooterData();
  }, []);

  // 제출 처리
  const handleSubmit = async () => {
    if (generation && name && email && snsUrl && imageFile) {
      try {
        await putFooter(generation as string, name, email, snsUrl, imageFile);
        alert("총학생회 정보가 성공적으로 업데이트되었습니다.");
        window.location.href = "/home";
      } catch (error) {
        console.error("Error updating footer:", error);
        alert("업데이트 중 오류가 발생했습니다.");
      }
    } else {
    }
  };

  return (
    <S.FDiv>
      <FooterTitleBar
        title="총학생회 정보"
        canEnter={
          generation !== "" &&
          name !== "" &&
          email !== "" &&
          snsUrl !== "" &&
          imageFile !== null
        }
        setCanEnter={() => {}}
        onSubmit={handleSubmit} // 제출 시 호출되는 함수 전달
      />
      <InfoInput
        setGeneration={setGeneration}
        setName={setName}
        setEmail={setEmail}
        setSnsUrl={setSnsUrl}
        setImageFile={setImageFile} //파일을 셋팅
        initialValues={{ generation, name, email, snsUrl, logoUrl }} // 초기값 전달
      />
    </S.FDiv>
  );
};

export default FooterPage;
