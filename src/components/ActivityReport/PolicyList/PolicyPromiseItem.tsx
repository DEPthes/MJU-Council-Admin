import DeleteButton from "@/components/common/Button/DeleteButton";
import FixButton from "@/components/common/Button/FixButton";
import SubmitButton from "@/components/common/Button/SubmitButton";
import CheckModal from "@/components/common/CheckModal";
import { fulfillments } from "@/constants/ActivityReport";
import {
  useDeletePromise,
  usePutPromise,
} from "@/hooks/activityReport/usePromise";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyPromiseItemStyle";
import { PromiseResponseInformation } from "@/types/ActivityReport/policy";
import { getFulfillmentRate } from "@/utils/ActivityReport";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PolicyPromiseItemProps {
  item: PromiseResponseInformation;
  setIsFixModal: (value:boolean)=>void;
}

const PolicyPromiseItem: React.FC<PolicyPromiseItemProps> = ({ item,setIsFixModal }) => {
  const navigator = useNavigate();
  const [isFix, setIsFix] = useState<boolean>(false);
  const [promise, setPromise] = useState<PromiseResponseInformation>({
    promiseCategoryId: item.promiseCategoryId,
    title: item.title,
    content: item.content,
    progress: item.progress,
  });
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const { mutate: deletePromise } = useDeletePromise();
  const { mutate: putPromise } = usePutPromise();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    }

    setPromise((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
        if (isFix) {
          setIsFixModal(true);
        } else {
          setIsFixModal(false);
        }
      }, [isFix]);

  const handleDeletePromise = () => {
    deletePromise(
      { promiseId: promise.promiseCategoryId },
      {
        onSuccess: () => {
          navigator("/activityReport/policyList");
          navigator(0);
        },
        onError: (error) => {
          console.error("등록 실패:", error);
        },
      }
    );
  };

  const handlePutPromise = () => {
    putPromise(
      { promise: promise },
      {
        onSuccess: () => {
          () => setIsShowModal(false);
          navigator(0);
        },
        onError: (error) => {
          console.error("등록 실패:", error);
        },
      }
    );
  };

  return (
    <S.Container>
      {isShowModal && (
        <CheckModal
          text={"삭제하시겠습니까?"}
          onSubmit={handleDeletePromise}
          onCancel={() => setIsShowModal(false)}
        />
      )}
      <S.ButtonContainer>
        {isFix ? (
          <>
            <DeleteButton onClick={() => setIsShowModal(true)} />
            <SubmitButton
              onClick={handlePutPromise}
              isM70={promise.title === "" || promise.content === ""}
              disabled={promise.title === "" || promise.content === ""}
            />
          </>
        ) : (
          <FixButton onClick={() => setIsFix(true)} />
        )}
      </S.ButtonContainer>

      <S.PromiseContainer>
        <S.Text>공약</S.Text>
        {isFix ? (
          <S.PromiseInput
            value={promise.title}
            onChange={handleInputChange}
            name="title"
            placeholder="공약을 작성해주세요."
          />
        ) : (
          <S.Promise>{item.title}</S.Promise>
        )}
        <S.Text>진행도</S.Text>

        <S.BarContainer>
          {isFix ? (
            <S.fulfillmentInputContainer>
              {fulfillments.map((fulfillmentItem, index) => (
                <S.fulfillmentTextContainer key={index}>
                  <S.fulfillmentInput
                    type="radio"
                    name="progress"
                    value={index}
                    checked={promise.progress === index}
                    onChange={(e) =>
                      setPromise((prev) => ({
                        ...prev,
                        progress: parseInt(e.target.value),
                      }))
                    }
                  />
                  <S.fulfillmentText $selected={promise.progress === index}>
                    {fulfillmentItem}
                  </S.fulfillmentText>
                </S.fulfillmentTextContainer>
              ))}
            </S.fulfillmentInputContainer>
          ) : (
            <>
              <S.barBackground>
                <S.bar progress={getFulfillmentRate(item.progress)} />
              </S.barBackground>
              <S.dotContainer>
                {fulfillments.map((fulfillmentItem, index) => (
                  <S.fulfillmentTextContainer key={index}>
                    <S.dot
                      $selected={
                        fulfillments[item.progress] === fulfillmentItem
                      }
                    />
                    <S.fulfillmentText
                      $selected={
                        fulfillments[item.progress] === fulfillmentItem
                      }
                    >
                      {fulfillmentItem}
                    </S.fulfillmentText>
                  </S.fulfillmentTextContainer>
                ))}
              </S.dotContainer>
            </>
          )}
        </S.BarContainer>

        {isFix ? (
          <S.PromiseTextArea
            value={promise.content}
            onChange={handleInputChange}
            name="content"
          />
        ) : (
          <S.Promise>{item.content}</S.Promise>
        )}
      </S.PromiseContainer>
    </S.Container>
  );
};

export default PolicyPromiseItem;
