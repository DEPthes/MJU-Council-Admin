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
}

const PolicyPromiseItem: React.FC<PolicyPromiseItemProps> = ({ item }) => {
  const [isFix, setIsFix] = useState<boolean>(false);
  const [promise, setPromise] = useState<Promise>({
    id: item.id,
    title: item.title,
    content: item.content,
    progress: item.progress,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
          />
        ) : (
          <S.Promise>{item.title}</S.Promise>
        )}
        <S.Text>진행도</S.Text>

        <S.BarContainer>
          {isFix ? (
            <S.fulfillmentInputContainer>
              {fulfillments.map((fulfillmentItem) => (
                <S.fulfillmentTextContainer>
                  <S.fulfillmentInput name="progress" />
                  <S.fulfillmentText
                    $selected={fulfillments[item.progress] === fulfillmentItem}
                  >
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
          <S.PromiseInput
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
