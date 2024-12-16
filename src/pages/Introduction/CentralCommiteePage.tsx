import * as S from "@/styles/Introduction/CentralCommitee/CentralCommiteeComponentStyle";
import CentralCommiteeInput from "@/components/Introduction/CentralCommitee/CentralCommiteeInput";
import CentralCommiteeEachInput from "@components/Introduction/CentralCommitee/CentralCommiteeEachInput";
import { useEffect, useState } from "react";
import CaptionAddBtn from "@/components/Introduction/CaptionAddBtn";
import RemoveModal from "@/components/Home/Banner/RemoveModal";
import { getCommittee, deleteCommittees } from "@/apis/introduction";
import CentralCommiteeTitleBar from "@/components/Introduction/CentralCommitee/CentralCommiteeTitleBar";
import EachCommiteeTitleBar from "@/components/Introduction/CentralCommitee/EachCommiteeTitleBar";

interface Input {
  committeeId: number;
  imgUrl: File|undefined;
  description: string;
}

interface EInput {
  committeeId?: number;
  imgUrl: File|undefined;
  college: string;
  name: string;
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

  const addInput = () => {
    setEInputs((prev) => [
      ...prev,
      { committeeId:prev.length+1, imgUrl: undefined, college: "", name: "", pageUrl: "", snsUrl: "" },
    ]);
  };

  const deleteInput = async () => {
    if (deleteIndex !== null) {
      try {
        const committeeId = eInputs[deleteIndex]?.committeeId;
        if (committeeId) {
          await deleteCommittees(committeeId); // 서버에서 삭제 요청
        }
        setEInputs((prev) => prev.filter((_, i) => i !== deleteIndex)); // 상태 업데이트
      } catch (error) {
        console.error("조직 삭제 실패:", error);
      } finally {
        setDeleteIndex(null);
        setOpenModal(false);
      }
    }
  };

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setDeleteIndex(index);
  };

  const isFull = (inputs: Input[]) => {
    return inputs.every((input) => input.imgUrl !== undefined && input.description !== "");
  };

  const isEFull = (inputs: EInput[]) => {
    return inputs.every(
      (input) =>
        input.imgUrl !== undefined &&
        input.college !== "" &&
        input.name !== "" &&
        input.snsUrl !== ""
    );
  };

  const fetchCommitteeData = async () => {
    try {
      const data = await getCommittee();
      const nullDescriptions = data.information.filter(
        (item: { description: any }) => item.description !== null
      );
      const validDescriptions = data.information.filter(
        (item: { description: any }) => item.description == null
      );

      setInputs(nullDescriptions);
      setEInputs(validDescriptions);
    } catch (error) {
      console.error("중운위 데이터 불러오기 실패:", error);
    }
  };

  useEffect(() => {
    setInputs([{committeeId:0, imgUrl: undefined, description: "" }]);
    fetchCommitteeData();
  }, []);

  useEffect(() => {
    setCanEnter(isFull(inputs));
  }, [inputs]);

  useEffect(() => {
    setCanEEnter(isEFull(eInputs));
  }, [eInputs]);

  return (
    <>
      <S.CentralDiv>
        <CentralCommiteeTitleBar
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

        <EachCommiteeTitleBar
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
