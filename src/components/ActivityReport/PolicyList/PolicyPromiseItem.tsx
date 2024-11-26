import FixButton from "@/components/common/FixButton";
import { fulfillments } from "@/constants/ActivityReport";
import * as S from "@/styles/ActivityReport/PolicyList/PolicyPromiseItemStyle";
import { Promise } from "@/types/ActivityReport/Policy";
import { getFulfillmentRate } from "@/utils/ActivityReport";
import React from "react";

interface PolicyPromiseItemProps {
  item: Promise;
}

const PolicyPromiseItem: React.FC<PolicyPromiseItemProps> = ({ item }) => {
  return (
    <S.Container>
      <S.ButtonContainer>
        <FixButton onClick={() => console.log()} />
      </S.ButtonContainer>

      <S.PromiseContainer>
        <S.Text>공약</S.Text>
        <S.Promise>{item.title}</S.Promise>
        <S.Text>진행도</S.Text>
        <S.BarContainer>
          <S.barBackground>
            <S.bar progress={getFulfillmentRate(item.progress)} />
          </S.barBackground>
          <S.dotContainer>
            {fulfillments.map((fulfillmentItem) => (
              <S.fulfillmentTextContainer>
                <S.dot
                  $selected={fulfillments[item.progress] === fulfillmentItem}
                />
                <S.fulfillmentText
                  $selected={fulfillments[item.progress] === fulfillmentItem}
                >
                  {fulfillmentItem}
                </S.fulfillmentText>
              </S.fulfillmentTextContainer>
            ))}
          </S.dotContainer>
        </S.BarContainer>
        <S.Promise>{item.content}</S.Promise>
      </S.PromiseContainer>
    </S.Container>
  );
};

export default PolicyPromiseItem;
