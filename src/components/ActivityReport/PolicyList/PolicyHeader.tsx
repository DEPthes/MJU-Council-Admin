import DeleteButton from "@/components/common/Button/DeleteButton";
import FixButton from "@/components/common/Button/FixButton";
import SubmitButton from "@/components/common/Button/SubmitButton";
import {
  useDeletePromiseCategory,
  usePutPromiseCategory,
} from "@/hooks/activityReport/usePolicyCategory";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyHeaderStyle";
import { PromiseCategory } from "@/types/ActivityReport/policy";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../common/DeleteModal";

interface PolicyHeaderProps {
  title: string;
  categoryList: PromiseCategory[];
  setIsFixModal: (value:boolean)=>void;
}

const PolicyHeader: React.FC<PolicyHeaderProps> = ({ title, categoryList,setIsFixModal }) => {
  const navigator = useNavigate();

  const [isFix, setIsFix] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const { mutate: putPromiseCategory } = usePutPromiseCategory();
  const { mutate: deletePromiseCategory } = useDeletePromiseCategory();

  const foundCategory = categoryList.find((item) => item.title == title);
  const promiseCategoryId = foundCategory?.promiseCategoryId ?? 0;

  const handleSubmit = () => {
    putPromiseCategory(
      { promiseCategoryId, promiseTitle: inputValue },
      {
        onSuccess: () => {
          navigator(`/activityReport/policyList`);
          navigator(0);
        },
        onError: (error) => {
          console.error("등록 실패:", error);
        },
      }
    );

    setIsFix(false);
  };

  const handleDelete = () => {
    deletePromiseCategory(
      { promiseCategoryId },
      {
        onSuccess: () => {
          setIsShowModal(false);
          navigator("/activityReport/policyList");
          navigator(0);
        },
        onError: (error) => {
          console.error("등록 실패:", error);
        },
      }
    );
  };

  useEffect(() => {
      if (isFix) {
        setIsFixModal(true);
      } else {
        setIsFixModal(false);
      }
    }, [isFix]);

  return (
    <S.Container>
      {isShowModal && (
        <DeleteModal
          onCancel={() => setIsShowModal(false)}
          onSubmit={handleDelete}
        />
      )}
      <S.Bar />
      <S.TextContainer>
        {isFix ? (
          <S.TextInput
            placeholder={title}
            onChange={handleChange}
            value={inputValue}
          />
        ) : (
          <S.Text>{title}</S.Text>
        )}
        <S.ButtonContainer>
          {isFix ? (
            <>
              <DeleteButton onClick={() => setIsShowModal(true)} />
              <SubmitButton onClick={handleSubmit} isM70={true} />
            </>
          ) : (
            <FixButton onClick={() => setIsFix(true)} isM70={true} />
          )}
        </S.ButtonContainer>
      </S.TextContainer>
    </S.Container>
  );
};

export default PolicyHeader;
