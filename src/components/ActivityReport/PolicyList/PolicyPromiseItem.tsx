import DeleteButton from "@/components/common/DeleteButton";
import FixButton from "@/components/common/FixButton";
import SubmitButton from "@/components/common/SubmitButton";
import { fulfillments } from "@/constants/ActivityReport";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyPromiseItemStyle";
import { Promise } from "@/types/ActivityReport/Policy";
import { getFulfillmentRate } from "@/utils/ActivityReport";
import React, { useState } from "react";

interface PolicyPromiseItemProps {
  item: Promise;
  fix?: boolean;
}

const PolicyPromiseItem: React.FC<PolicyPromiseItemProps> = ({ item, fix }) => {
  const [isFix, setIsFix] = useState<boolean>(fix ?? false);
  const [promise, setPromise] = useState<Promise>({
    id: item.id,
    title: item.title,
    content: item.content,
    progress: item.progress,
  });
  console.log(promise);
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

  return (
    <S.Container>
      <S.ButtonContainer>
        {isFix ? (
          <>
            <DeleteButton onClick={() => setIsFix(false)} />
            <SubmitButton onClick={() => console.log()} />
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
                {fulfillments.map((fulfillmentItem) => (
                  <S.fulfillmentTextContainer>
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
