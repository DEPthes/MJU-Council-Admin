import DeleteButton from "@/components/common/Button/DeleteButton";
import SubmitButton from "@/components/common/Button/SubmitButton";
import { fulfillments } from "@/constants/ActivityReport";
import { usePostPromise } from "@/hooks/activityReport/usePromise";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyPromiseItemStyle";
import { PromiseResponseInformation } from "@/types/ActivityReport/policy";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface NewPolicyPromiseItemProps {
  onCancel: () => void;
}

const NewPolicyPromiseItem: React.FC<NewPolicyPromiseItemProps> = ({
  onCancel,
}) => {
  const { mutate: postPromise } = usePostPromise();
  const navigator = useNavigate();
  const [policyParams] = useSearchParams();
  const policy = policyParams.get("policy");

  const [promise, setPromise] = useState<PromiseResponseInformation>({
    promiseCategoryId: 0,
    title: "",
    content: "",
    progress: 0,
  });
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

  const handleSubmit = () => {
    postPromise(
      {
        promiseTitle: policy!,
        body: {
          title: promise.title,
          content: promise.content,
          progress: promise.progress,
        },
      },
      {
        onSuccess: () => {
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
      <S.ButtonContainer>
        <DeleteButton onClick={onCancel} />
        <SubmitButton
          onClick={handleSubmit}
          isM70={promise.title === "" || promise.content === ""}
          disabled={promise.title === "" || promise.content === ""}
        />
      </S.ButtonContainer>

      <S.PromiseContainer>
        <S.Text>공약</S.Text>
        <S.PromiseInput
          value={promise.title}
          onChange={handleInputChange}
          name="title"
          placeholder="공약을 작성해주세요."
        />

        <S.Text>진행도</S.Text>

        <S.BarContainer>
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
        </S.BarContainer>

        <S.PromiseTextArea
          value={promise.content}
          onChange={handleInputChange}
          name="content"
        />
      </S.PromiseContainer>
    </S.Container>
  );
};

export default NewPolicyPromiseItem;
