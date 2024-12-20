import DeleteModal from "@/components/common/DeleteModal";
import GridItemContainer from "@/components/common/List/GridItemContainer";
import ListBtnContainer from "@/components/common/List/ListBtnContainer";
import PageComponent from "@/components/common/PageComponent";
import {
  useCoalitionsList,
  useDeleteAllCoalition,
} from "@/hooks/activityReport/useCoalition";
import * as S from "@styles/ActivityReport/Coalition/CoalitionPageStyle";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const CoalitionListPage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const navigator = useNavigate();
  const [pageParams] = useSearchParams();
  const page = pageParams.get("page") || "1";
  const { data } = useCoalitionsList({ page: Number(page) });

  const { mutate: deleteAllCoalition } = useDeleteAllCoalition();

  const handleDeletePromise = () => {
    deleteAllCoalition(undefined, {
      onSuccess: () => {
        navigator(0);
      },
      onError: (error) => {
        console.error("등록 실패:", error);
      },
    });
  };

  return (
    <S.Container>
      {isShowModal && (
        <DeleteModal
          onCancel={() => setIsShowModal(false)}
          onSubmit={handleDeletePromise}
        />
      )}
      <ListBtnContainer
        onDelete={() => setIsShowModal(true)}
        onPost={() => navigator("/activityReport/newCoalition")}
      />
      {data.information.contents.length > 0 ? (
        <>
          <S.CoalitionContainer>
            {data.information.contents.map((item, index) => (
              <GridItemContainer
                key={index}
                cover={item.cover}
                title={item.title}
                subject="제휴"
                date={`${item.startDate} ~ ${item.endDate}`}
                onClick={() =>
                  navigator(
                    `/activityReport/coalitionDetail/${item.allianceId}`
                  )
                }
              />
            ))}
          </S.CoalitionContainer>
          <PageComponent totalPage={data.information.totalPage} />
        </>
      ) : (
        <S.EmptyText>제휴 게시글이 없습니다.</S.EmptyText>
      )}
    </S.Container>
  );
};

export default CoalitionListPage;
