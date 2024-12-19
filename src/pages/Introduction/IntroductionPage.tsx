import { useEffect, useState } from "react";
import * as S from "@/styles/Introduction/EachPart/EachPartComponentStyle";
import CaptionAddBtn from "@/components/Introduction/CaptionAddBtn";
import RemoveModal from "@/components/Home/Banner/RemoveModal";
import { deleteIntroduction, getIntroduce, putIntroduction, postIntroduction } from "@/apis/introduction";
import IntroduceTitleBar from "@/components/Introduction/Introduce/IntroduceTitleBar";
import IntroduceInput from "@/components/Introduction/Introduce/IntroductionInput";

interface Input {
  councilImageId: string;
  imgUrl: File | undefined;
  description: string;
}

const IntroductionPage = () => {
  const [isFix, setIsFix] = useState<boolean>(false);
  const [canEnter, setCanEnter] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Input[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [post, setPost] = useState<boolean>(false);
  const [initialInputs, setInitialInputs] = useState<Input[]>([]); // 초기 데이터 저장

  const urlToFile = async (url: string) => {
    const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split(".").pop(); // url 구조에 맞게 수정할 것
  const filename = url.split("/").pop(); // url 구조에 맞게 수정할 것
  const metadata = { type: `image/${ext === "svg" ? "svg+xml" : ext}` };
  return new File([data], filename!, metadata);
  }

  // 새 입력 추가
  const addInput = async () => {
    setInputs((prev) => [
      ...prev,
      { councilImageId: "", imgUrl: undefined, description: "" },
    ]);
  };

  // 입력 삭제
  const deleteInput = async () => {
    if (deleteIndex !== null) {
      try {
        const councilImageId = inputs[deleteIndex].councilImageId;
        if (councilImageId) await deleteIntroduction(councilImageId); // 서버에서 삭제
        setInputs((prev) => prev.filter((_, i) => i !== deleteIndex));
      } catch (error) {
        console.error("삭제 실패:", error);
      } finally {
        setOpenModal(false);
        setDeleteIndex(null);
      }
    }
  };

  // 데이터 가져오기
  const fetchIntroData = async () => {
    try {
      const data = await getIntroduce();
      
      const updatedInformation = await Promise.all(
        data.information.map(async (item: Input) => {
          if (item.imgUrl) {
            const file = await urlToFile(item.imgUrl as unknown as string); // URL을 File로 변환
            return { ...item, imgUrl: file }; // imgUrl을 File로 설정
          }
          return item;
        })
      );

      setInputs(updatedInformation); // 입력 값으로 저장
      setInitialInputs(updatedInformation); // 초기 값 저장
    } catch (error) {
      console.error("데이터 불러오기 실패:", error);
    }
  };

  const isFull = (inputs: Input[]) => {
    return inputs.every((input) => input.imgUrl !== undefined && input.description !== "");
  };

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setDeleteIndex(index);
  };

  // 기존 값과 비교하여 변경된 값만 처리
  const handlePost = async () => {
    try {
      for (const input of inputs) {
        const initialInput = initialInputs.find((init) => init.councilImageId === input.councilImageId);
        if (
          (initialInput?.imgUrl !== input.imgUrl || initialInput?.description !== input.description) &&
          input.description && input.imgUrl// description만 바뀌어도 동작
        ) {
          if (input.councilImageId) {
            // 기존 업데이트 (이미지와 캡션)
            if(typeof(input.imgUrl)=="string"){
              //다시 여기서 오류 생김
              const file = await urlToFile(input.imgUrl);
              const reader = new FileReader();
              reader.onload = () => {
                reader.result;
              };
              reader.readAsDataURL(file)
              await putIntroduction(input.councilImageId, input.description, file);
              ;
            }else {
              await putIntroduction(input.councilImageId, input.description, input.imgUrl);
            }
            console.log("intro 수정 성공");
          } else {
            // 새로 생성 (이미지와 캡션)
            await postIntroduction(input.description, input.imgUrl);
            console.log("intro 생성 성공");
          }
        }
      }
    } catch (error) {
      console.error("intro 처리 실패:", error);
    }
    setIsFix(false);
    fetchIntroData();
  };

  useEffect(() => {
    fetchIntroData();
  }, []);

  useEffect(() => {
    setCanEnter(isFull(inputs));
  }, [inputs]);

  useEffect(() => {
    if (post) {
      handlePost();
      setPost(false);
    }
  }, [post]); 

  return (
    <>
      <S.EachPartDiv>
        <IntroduceTitleBar
          title="총학생회 소개"
          isFix={isFix}
          setIsFix={setIsFix}
          canEnter={canEnter}
          setCanEnter={setCanEnter}
          setPost={setPost}
          post={post}
        />
        {inputs.map((input, index) => (
          <IntroduceInput
            key={index}
            isFix={isFix}
            canEnter={canEnter}
            setCanEnter={setCanEnter}
            clicked={() => handleOpenModal(index)}
            input={input}
            setInputs={setInputs}
            isLast={index === inputs.length - 1}
          />
        ))}
        {isFix && <CaptionAddBtn clicked={addInput} />}
      </S.EachPartDiv>
      {openModal && (
        <RemoveModal
          text="이미지와 캡션 필드를 삭제하시겠습니까?"
          onConfirm={deleteInput}
          setIsModal={setOpenModal}
        />
      )}
    </>
  );
};

export default IntroductionPage;
