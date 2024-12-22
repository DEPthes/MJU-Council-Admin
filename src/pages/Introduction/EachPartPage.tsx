import { useEffect, useState } from "react";
import * as S from "@/styles/Introduction/EachPart/EachPartComponentStyle";
import CaptionAddBtn from "@/components/Introduction/CaptionAddBtn";
import RemoveModal from "@/components/Home/Banner/RemoveModal";
import { putDepartment, postDepartment, deleteDepartment, getDepartment } from "@/apis/introduction";
import EachPartTitleBar from "@/components/Introduction/EachPart/EachPartTitleBar";
import EachPartInput from "@/components/Introduction/EachPart/EachPartInput";
import { useNavigate } from "react-router-dom";

interface Input {
  departmentId: string;
  imgUrl: File | undefined;
  description: string;
}

const EachPartPage:React.FC<{setIsFixModal:(value:boolean)=>void}> = ({setIsFixModal}) => {
  const [isFix, setIsFix] = useState<boolean>(false);
  const [canEnter, setCanEnter] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Input[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [post, setPost] = useState<boolean>(false);
  const [initialInputs, setInitialInputs] = useState<Input[]>([]); // 초기 데이터 저장
    const navigate = useNavigate();

  const urlToFile = async (url: string) => {
    const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split(".").pop(); // url 구조에 맞게 수정할 것
  const filename = url.split("/").pop(); // url 구조에 맞게 수정할 것
  const metadata = { type: `image/${ext === "svg" ? "svg+xml" : ext}` };
  return new File([data], filename!, metadata);
  };
  // 새 입력 추가
  const addInput = async () => {
    setInputs((prev) => [
      ...prev,
      { departmentId: "", imgUrl: undefined, description: "" },
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
        console.error("삭제 실패:", error);
      } finally {
        setOpenModal(false);
        setDeleteIndex(null);
      }
    }
  };

  // 데이터 가져오기
  const fetchDepData = async () => {
    try {
      const data = await getDepartment();
      const updatedInformation = await Promise.all(
        data.information.map(async (item: Input) => {
          if (item.imgUrl) {
            const file = await urlToFile(item.imgUrl as unknown as string);
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
        const initialInput = initialInputs.find((init) => init.departmentId === input.departmentId);

        // 기존 값과 비교하여 변경된 경우에만 처리
        if (
          (initialInput?.imgUrl !== input.imgUrl || initialInput?.description !== input.description) &&
          input.imgUrl &&
          input.description
        ) {
          if (input.departmentId) {
             if(typeof(input.imgUrl)=="string"){
                const file = await urlToFile(input.imgUrl);
                await putDepartment(input.departmentId, input.description, file);
                const reader = new FileReader();
                reader.onload = () => {
                  reader.result;
                };
                reader.readAsDataURL(file);
              }else await putDepartment(input.departmentId, input.description, input.imgUrl);
              console.log("intro 수정 성공");
          } else {
            // 새로 생성 (이미지와 캡션)
            await postDepartment(input.description, input.imgUrl);
            console.log("intro 생성 성공");
          }
        }
      }
    } catch (error) {
      console.error("intro 처리 실패:", error);
    }
    setIsFix(false);
    fetchDepData();
    navigate(0);
  };

  useEffect(() => {
    if (isFix) {
      setIsFixModal(true);
    } else {
      setIsFixModal(false);
    }
  }, [isFix]);

  useEffect(() => {
    fetchDepData();
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
        <EachPartTitleBar
          title="국별 업무 소개"
          isFix={isFix}
          setIsFix={setIsFix}
          canEnter={canEnter}
          setCanEnter={setCanEnter}
          setPost={setPost}
          post={post}
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
          text="이미지와 캡션 필드를 삭제하시겠습니까?"
          onConfirm={deleteInput}
          setIsModal={setOpenModal}
        />
      )}
    </>
  );
};

export default EachPartPage;
