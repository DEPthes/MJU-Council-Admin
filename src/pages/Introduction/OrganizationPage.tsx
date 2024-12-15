import * as S from "@/styles/Introduction/Organization/OrganizationComponentStyle";
import TitleBar from "@/components/Introduction/TitleBar";
import { useEffect, useState } from "react";
import CaptionAddBtn from "@/components/Introduction/CaptionAddBtn";
import OrganizationInput from "@/components/Introduction/Organization/OrganizationInput";
import EachOrganizationInput from "@/components/Introduction/Organization/EachOrganizationInput";
import RemoveModal from "@/components/Home/Banner/RemoveModal";

interface Input{
  image: string;
  content: string;
}
const OrganizationPage = () => {
  const [isFix, setIsFix] = useState<boolean>(false);
  const [isEachFix, setIsEachFix] = useState<boolean>(false);
  const [canEnter, setCanEnter] = useState<boolean>(false);
  const [canEachEnter, setCanEachEnter] = useState<boolean>(false);
  const [inputs, setInputs] = useState<string|undefined>(); 
  const [eInputs, setEInputs] = useState<Input[]>([]);
  const [openModal, setOpenModal] = useState<boolean>();
  const [deleteIndex, setDeleteIndex] = useState<number|null>(null);

  const deleteInput = () => {
    setInputs("");
  };

  const addEInput = () => {
    setEInputs((prev) => [
      ...prev,
      { image: "", content: "" }, 
    ]);
  };

  const deleteEInput = () => {
    if(deleteIndex!==null)
    setEInputs((prev) => prev.filter((_, i) => i !== deleteIndex));
    setOpenModal(false);
    setDeleteIndex(null);
  };

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setDeleteIndex(index);
  }

//전체 조직도
  const isFull = (input: string|undefined) => {
    return input!=="";
  }
//국별 조직도
  const isEachOrFull = (eInputs: Input[]) => {
    return eInputs.every((input) => input.image!=="" && input.content!=="");
  }
  useEffect(()=>{
    setInputs("");
  },[])

  useEffect(()=>{
    setCanEnter(isFull(inputs));
  },[inputs])

  useEffect(()=>{
    setCanEachEnter(isEachOrFull(eInputs));
  }, [eInputs])

  return (
      <>
        <S.OrgDiv>
          <TitleBar 
            title="전체 조직도" 
            isFix={isFix} 
            setIsFix={setIsFix} 
            canEnter={canEnter} 
            setCanEnter={setCanEnter} 
          />
          <OrganizationInput
            isFix={isFix}
            canEnter={canEnter}
            setCanEnter={setCanEnter}
            clicked={() => deleteInput()}
            input={inputs} 
            setInputs={setInputs}
          />
          <TitleBar 
            title="국별 조직도" 
            isFix={isEachFix} 
            setIsFix={setIsEachFix} 
            canEnter={canEachEnter} 
            setCanEnter={setCanEachEnter} 
          />
          {eInputs.map((input, index) => (
          <EachOrganizationInput
            key={index}
            isFix={isEachFix}
            canEnter={canEachEnter}
            setCanEnter={setCanEachEnter}
            clicked={() => handleOpenModal(index)}
            input={input} 
            setInputs={setEInputs}
            isLast={index === eInputs.length-1}
          />
        ))}
          {isEachFix ? <CaptionAddBtn clicked={addEInput} /> : <></>}
        </S.OrgDiv>
        {openModal?
        <RemoveModal
          setIsModal={setOpenModal}
          text="조직도 이미지와 국명 필드 모두 삭제하시겠습니까?"
          onConfirm={deleteEInput}/>
        :<></>}
      </>
  );
};

export default OrganizationPage;
