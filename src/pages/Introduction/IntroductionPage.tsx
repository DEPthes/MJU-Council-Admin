import * as S from "@/styles/Introduction/Introduce/IntroduceComponentStyle";
import TitleBar from "@/components/Introduction/TitleBar";
import IntroductionInput from "@/components/Introduction/Introduce/IntroductionInput";
import { useEffect, useState } from "react";
import CaptionAddBtn from "@/components/Introduction/CaptionAddBtn";
import RemoveModal from "@/components/Home/Banner/RemoveModal";

interface Input{
  image: string;
  content: string;
}
const IntroductionPage = () => {
  const [isFix, setIsFix] = useState<boolean>(false);
  const [canEnter, setCanEnter] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Input[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number|null>(null);

  const addInput = () => {
    setInputs((prev) => [
      ...prev,
      { image: "", content: "" }, 
    ]);
  };

  const deleteInput = () => {
    if (deleteIndex !== null) {
      setInputs((prev) => prev.filter((_, i) => i !== deleteIndex));
    }
    setOpenModal(false); // 모달 닫기
    setDeleteIndex(null);
  };

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setDeleteIndex(index);
  }

  const isFull = (inputs: Input[]) => {
    return inputs.every((input) => input.image!=="" && input.content!=="");
  }
  useEffect(()=>{
    setInputs([{image:"", content:""}]);
  },[])

  useEffect(()=>{
    setCanEnter(isFull(inputs));
  },[inputs])

  return (
      <>
        <S.IntroDiv>
          <TitleBar 
            title="총학생회 소개" 
            isFix={isFix} 
            setIsFix={setIsFix} 
            canEnter={canEnter} 
            setCanEnter={setCanEnter} 
          />
          {inputs.map((input, index) => (
          <IntroductionInput
            key={index}
            isFix={isFix}
            canEnter={canEnter}
            setCanEnter={setCanEnter}
            clicked={() => handleOpenModal(index)}
            input={input} 
            setInputs={setInputs}
            isLast={index === inputs.length-1}
          />

        ))}
          {isFix ? <CaptionAddBtn clicked={addInput} /> : <></>}
        </S.IntroDiv>
        {openModal && (
        <RemoveModal
          text="총학생회 소개 이미지와 캡션 필드를 모두 삭제하시겠습니까?"
          onConfirm={deleteInput} 
          setIsModal={setOpenModal}
        />
      )}
      </>
  );
};

export default IntroductionPage;
