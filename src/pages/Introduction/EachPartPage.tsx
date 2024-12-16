import * as S from "@/styles/Introduction/EachPart/EachPartComponentStyle";
import { useEffect, useState } from "react";
import CaptionAddBtn from "@/components/Introduction/CaptionAddBtn";
import RemoveModal from "@/components/Home/Banner/RemoveModal";
import { getEachPart, postDepartment, deleteDepartment } from "@/apis/introduction";
import EachPartTitleBar from "@/components/Introduction/EachPart/EachPartTitleBar";
import EachPartInput from "@/components/Introduction/EachPart/EachPartInput";

interface Input {
  departmentId?: number;
  imgUrl: File|undefined;
  description: string;
}

const EachPartPage = () => {
  const [isFix, setIsFix] = useState<boolean>(false);
  const [canEnter, setCanEnter] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Input[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [post, setPost] = useState<boolean>(false);

  // 새 입력 추가
  const addInput = async () => {
    setInputs((prev) => [
      ...prev,
      { departmentId:prev.length+1, imgUrl: undefined, description: "" }, 
    ]);
  };

  // 입력 삭제
  const deleteInput = async () => {
    if (deleteIndex !== null) {
      try {
        const departmentId = inputs[deleteIndex].departmentId;
        if (departmentId) await deleteDepartment(departmentId); // 서버에서 삭제
        setInputs((prev) => prev.filter((_, i) => i !== deleteIndex));
      } catch (error) {
        console.error("부서 삭제 실패:", error);
      } finally {
        setOpenModal(false);
        setDeleteIndex(null);
      }
    }
  };

  // 데이터 가져오기
  const fetchEachPartData = async () => {
    try {
      const data = await getEachPart();
      setInputs(data.information);
    } catch (error) {
      console.error("데이터 불러오기 실패:", error);
    }
  };

  const isFull = (inputs: Input[]) => {
    return inputs.every((input) => input.imgUrl !== null && input.description !== "");
  };

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setDeleteIndex(index);
  };
  const handlePost = async () => {
    try {
      // Iterate over the inputs and post each one
      for (const input of inputs) {
        if (input.imgUrl && input.description) {
          // Call postDepartment with description and image
          await postDepartment(input.description, input.imgUrl);
          console.log("부서 생성 성공");
        }
      }
    } catch (error) {
      console.error("부서 생성 실패:", error);
    }
  };
  

  useEffect(() => {
    fetchEachPartData();
  }, []);

  useEffect(() => {
    setCanEnter(isFull(inputs));
  }, [inputs]);

  useEffect(() => {
    handlePost();
  }, [post]);

  return (
    <>
      <S.EachPartDiv>
        <EachPartTitleBar
          title="국별 업무 소개"
          isFix={isFix}
          setIsFix={setIsFix}
          canEnter={canEnter}
          setCanEnter={setCanEnter}
          setPost={setPost}
          post = {post}
        />
        {inputs.map((input, index) => (
          <EachPartInput
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
          text="이미지와 캡션 필드를 모두 삭제하시겠습니까?"
          onConfirm={deleteInput}
          setIsModal={setOpenModal}
        />
      )}
    </>
  );
};

export default EachPartPage;
