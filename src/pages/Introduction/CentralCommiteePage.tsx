import * as S from "@/styles/Introduction/CentralCommitee/CentralCommiteeComponentStyle";
import TitleBar from "@/components/Introduction/TitleBar";
import CentralCommiteeInput from "@/components/Introduction/CentralCommitee/CentralCommiteeInput";
import CentralCommiteeEachInput from "@components/Introduction/CentralCommitee/CentralCommiteeEachInput";
import { useEffect, useState } from "react";
import CaptionAddBtn from "@/components/Introduction/CaptionAddBtn";
import RemoveModal from "@/components/Home/Banner/RemoveModal";

interface Input{
  image: string;
  content: string;
}
interface EInput{
  image: string;
  part: string;
  councilTitle: string;
  homePage: string;
  instagram: string;
}

const CentralCommiteePage = () => {
  const [isFix, setIsFix] = useState<boolean>(false);
  const [isEFix, setIsEFix] = useState<boolean>(false);
  const [canEnter, setCanEnter] = useState<boolean>(false);
  const [canEEnter, setCanEEnter] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Input[]>([]);
  const [eInputs, setEInputs] = useState<EInput[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number|null>(null);

  const addInput = () => {
    setEInputs((prev) => [
      ...prev,
      { image: "", part: "" , councilTitle:"", homePage:"", instagram:""}, 
    ]);
  };

  const deleteInput = () => {
    if(deleteIndex!==null)
    setEInputs((prev) => prev.filter((_, i) => i !== deleteIndex));
    setDeleteIndex(null);
    setOpenModal(false);
  };

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setDeleteIndex(index);
  }

  const isFull = (inputs: Input[]) => {
    return inputs.every((input) => input.image!=="" && input.content!=="");
  }

  const isEFull = (inputs: EInput[]) => {
    return inputs.every((input) => input.image!=="" && input.part!==""&& input.councilTitle!==""&&input.instagram!=="");
  }

  useEffect(()=>{
    setInputs([{image:"", content:""}]);
    setEInputs([{image: "", part: "" , councilTitle:"", homePage:"", instagram:""}]);
  },[])

  useEffect(()=>{
    setCanEnter(isFull(inputs));
  },[inputs])

  useEffect(()=>{
    setCanEEnter(isEFull(eInputs));
  },[eInputs])

  return (
      <>
        <S.CentralDiv>
          <TitleBar 
            title="중앙운영위원회 소개" 
            isFix={isFix} 
            setIsFix={setIsFix} 
            canEnter={canEnter} 
            setCanEnter={setCanEnter} 
          />
          {inputs.map((input, index) => (
          <CentralCommiteeInput
            key={index}
            isFix={isFix}
            canEnter={canEnter}
            setCanEnter={setCanEnter}
            input={input} 
            setInputs={setInputs}
          />
        ))}

          <TitleBar 
            title="소속 단과대학 학생회 소개" 
            isFix={isEFix} 
            setIsFix={setIsEFix}
            canEnter={canEEnter} 
            setCanEnter={setCanEEnter} 
          />
          {eInputs.map((input, index) => (
          <CentralCommiteeEachInput
            key={index}
            isFix={isEFix}
            canEnter={canEEnter}
            setCanEnter={setCanEEnter}
            clicked={() => handleOpenModal(index)}
            input={input} 
            setInputs={setEInputs}
            isLast={index === eInputs.length-1}
          />
        ))}
          {isEFix ? <CaptionAddBtn clicked={addInput} /> : <></>}
        </S.CentralDiv>
        {openModal?
        <RemoveModal
          text="해당 단과대학 정보를 모두 삭제하시겠습니까?"
          onConfirm={deleteInput}
          setIsModal={setOpenModal}/>
      :<></>}
      </>
  );
};

export default CentralCommiteePage;
