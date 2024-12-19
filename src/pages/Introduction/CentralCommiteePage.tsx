import * as S from "@/styles/Introduction/CentralCommitee/CentralCommiteeComponentStyle";
import CentralCommiteeInput from "@/components/Introduction/CentralCommitee/CentralCommiteeInput";
import CentralCommiteeEachInput from "@components/Introduction/CentralCommitee/CentralCommiteeEachInput";
import { useEffect, useState } from "react";
import CaptionAddBtn from "@/components/Introduction/CaptionAddBtn";
import RemoveModal from "@/components/Home/Banner/RemoveModal";
import { getCommittee, deleteCommittees, putCommittees, postCommittees } from "@/apis/introduction";
import CentralCommiteeTitleBar from "@/components/Introduction/CentralCommitee/CentralCommiteeTitleBar";
import EachCommiteeTitleBar from "@/components/Introduction/CentralCommitee/EachCommiteeTitleBar";

interface Input {
  committeeId: string;
  imgUrl: File|undefined;
  description: string;
}

interface EInput {
  committeeId: string;
  imgUrl: File|undefined;
  college: string;
  name?: string;
  pageUrl?: string;
  snsUrl: string;
}

const CentralCommiteePage = () => {
  const [isFix, setIsFix] = useState<boolean>(false);
  const [isEFix, setIsEFix] = useState<boolean>(false);
  const [canEnter, setCanEnter] = useState<boolean>(false);
  const [canEEnter, setCanEEnter] = useState<boolean>(false);
  const [inputs, setInputs] = useState<Input[]>([]);
  const [eInputs, setEInputs] = useState<EInput[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [post, setPost] = useState<boolean>(false);
  const [ePost, setEPost] = useState<boolean>(false);
  const [initialInputs, setInitialInputs] = useState<Input[]>([]);
  const [initialEInputs, setInitialEInputs] = useState<EInput[]>([]);

  const urlToFile = async (url: string) => {
    const response = await fetch(url);
  const data = await response.blob();
  const ext = url.split(".").pop(); // url 구조에 맞게 수정할 것
  const filename = url.split("/").pop(); // url 구조에 맞게 수정할 것
  const metadata = { type: `image/${ext === "svg" ? "svg+xml" : ext}` };
  return new File([data], filename!, metadata);
  };

  const addInput = () => {
    setEInputs((prev) => [
      ...prev,
      { committeeId:"", imgUrl: undefined, college: "", name: "", pageUrl: "", snsUrl: "" },
    ]);
  };

  const deleteInput = async () => {
    if (deleteIndex !== null) {
      try {
        if (isEFix) {
          // eInputs 삭제 로직
          const committeeId = eInputs[deleteIndex]?.committeeId;
          if (committeeId) {
            await deleteCommittees(committeeId); // 서버에서 삭제
          }
          setEInputs((prev) => prev.filter((_, i) => i !== deleteIndex)); // 상태 업데이트
        } else if (isFix) {
          // inputs 삭제 로직
          const committeeId = inputs[deleteIndex]?.committeeId;
          if (committeeId) {
            await deleteCommittees(committeeId); // 서버에서 삭제
          }
          setInputs((prev) => prev.filter((_, i) => i !== deleteIndex)); // 상태 업데이트
        }
      } catch (error) {
        console.error("데이터 삭제 실패:", error);
      } finally {
        setDeleteIndex(null);
        setOpenModal(false);
      }
    }
  };
  

  const fetchCommitteeData = async () => {
    try {
      const data = await getCommittee();

      const updatedInformation = await Promise.all(
        data.information.map(async (item: Input) => {
          if (item.imgUrl) {
            const file = await urlToFile(item.imgUrl as unknown as string); 
            return { ...item, imgUrl: file }; // imgUrl을 File로 설정
          }
          return item;
        })
      );
      const nullDescriptions = updatedInformation.filter(
        (item: { description: any }) => item.description !== null
      );
      const validDescriptions = data.information.filter(
        (item: { description: any }) => item.description == null
      );

      setInputs(nullDescriptions);
      setInitialInputs(nullDescriptions)
      setEInputs(validDescriptions);
      setInitialEInputs(validDescriptions);
    } catch (error) {
      console.error("중운위 데이터 불러오기 실패:", error);
    }
  };

  const handleOpenModal = (index: number, isEach: boolean) => {
    setOpenModal(true);
    setDeleteIndex(index);
    if (isEach) {
      setIsEFix(true); // 소속 단과대 삭제
    } else {
      setIsFix(true); // 중앙운영위원회 삭제
    }
  };
  

  const isFull = (inputs: Input[]) => {
    return inputs.every((input) => input.imgUrl !== undefined && input.description !== "");
  };

  const isEFull = (inputs: EInput[]) => {
    return inputs.every(
      (input) =>
        input.imgUrl !== undefined &&
        input.college !== "" &&
        input.snsUrl !== ""
    );
  };

  

  const handleCommitteePost = async () => {
      try {
        for (const input of inputs) {
          const initialInput = initialInputs.find((init) => init.committeeId === input.committeeId);
          if (
            (initialInput?.imgUrl !== input.imgUrl || initialInput?.description !== input.description) &&
            input.description && input.imgUrl// description만 바뀌어도 동작
          ) {
            if (input.committeeId) {
              if(typeof(input.imgUrl)=="string"){ 
                const file = await urlToFile(input.imgUrl);
                await putCommittees(input.committeeId, input.description, null, null, null, null, file);
              }else await putCommittees(input.committeeId, input.description, null, null, null, null, input.imgUrl);
              console.log("intro 수정 성공");
            } else {
              // 새로 생성 (이미지와 캡션)
              await postCommittees(input.description, null, null, null, null, input.imgUrl);
              console.log("intro 생성 성공");
            }
          }
        }
      } catch (error) {
        console.error("intro 처리 실패:", error);
      }
      setIsFix(false);
      fetchCommitteeData();
    };

    const handleEachCommitteePost = async () => {
        try {
          for (const input of eInputs) {
            const initialEInput = initialEInputs.find((init) => init.committeeId === input.committeeId);
    
            // 기존 값과 비교하여 변경된 경우에만 처리
            if (
              (initialEInput?.imgUrl !== input.imgUrl || initialEInput?.snsUrl !== input.snsUrl || initialEInput?.pageUrl !== input.pageUrl || initialEInput?.name !== input.name || initialEInput?.college !== input.college) &&
              input.imgUrl &&input.snsUrl &&input.college&&input.imgUrl
            ) {
                if (input.committeeId) {
                  if(typeof(input.imgUrl)=="string"){ 
                    const file = await urlToFile(input.imgUrl);
                    await putCommittees(input.committeeId, null,input.college, input.name?input.name:null, input.pageUrl?input.pageUrl:null, input.snsUrl,  file);
                  }else await putCommittees(input.committeeId, null,input.college, input.name?input.name:null, input.pageUrl?input.pageUrl:null, input.snsUrl,  input.imgUrl);
                console.log("committee 수정 성공");
              } else {
                // 새로 생성 (이미지와 캡션)
                await postCommittees(null,input.college, input.name?input.name:null, input.pageUrl?input.pageUrl:null, input.snsUrl,  input.imgUrl);
                console.log("committee 생성 성공");
              }
          }
        }} catch (error) {
          console.error("intro 처리 실패:", error);
        }
        setIsFix(false);
      };

  useEffect(() => {
    setInputs([{committeeId:"", imgUrl: undefined, description: "" }]);
    fetchCommitteeData();
  }, []);

  useEffect(() => {
    setCanEnter(isFull(inputs));
  }, [inputs]);

  useEffect(() => {
    setCanEEnter(isEFull(eInputs));
  }, [eInputs]);

  useEffect(() => {
    if (post) {
      handleCommitteePost();
      setPost(false);
    }
  }, [post]); 

  useEffect(() => {
    if (ePost) {
      handleEachCommitteePost();
      setEPost(false);
      setIsEFix(false);
    }
  }, [ePost]); 

  return (
    <>
      <S.CentralDiv>
        <CentralCommiteeTitleBar
          title="중앙운영위원회 소개"
          isFix={isFix}
          setIsFix={setIsFix}
          canEnter={canEnter}
          setCanEnter={setCanEnter}
          post = {post}
          setPost = {setPost}
        />
        {inputs.map((input, index) => (
          <CentralCommiteeInput
            key={index}
            isFix={isFix}
            canEnter={canEnter}
            setCanEnter={setCanEnter}
            clicked={() => handleOpenModal(index, false)} // false: 중앙운영위원회 삭제
            input={input}
            setInputs={setInputs}
          />
        
        ))}

        <EachCommiteeTitleBar
          title="소속 단과대학 학생회 소개"
          isFix={isEFix}
          setIsFix={setIsEFix}
          canEnter={canEEnter}
          setCanEnter={setCanEEnter}
          post = {ePost}
          setPost = {setEPost}
        />
        {eInputs.map((input, index) => (
          <CentralCommiteeEachInput
            key={index}
            isFix={isEFix}
            canEnter={canEEnter}
            setCanEnter={setCanEEnter}
            clicked={() => handleOpenModal(index, true)} // true: 소속 단과대 삭제
            input={input}
            setInputs={setEInputs}
            isLast={index === eInputs.length - 1}
          />
        
        ))}
        {isEFix ? <CaptionAddBtn clicked={addInput} /> : null}
      </S.CentralDiv>
      {openModal ? (
        <RemoveModal
          text="해당 단과대학 정보를 모두 삭제하시겠습니까?"
          onConfirm={deleteInput}
          setIsModal={setOpenModal}
        />
      ) : null}
    </>
  );
};

export default CentralCommiteePage;
