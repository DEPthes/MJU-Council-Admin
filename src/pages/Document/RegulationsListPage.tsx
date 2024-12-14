import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "@/styles/common/ListPageStyle";
import ListItem from "@/components/common/List/ListItem";
import PageComponent from "@/components/common/PageComponent";
import DeleteModal from "@/components/common/DeleteModal";
import ButtonContainer from "@/components/common/List/ListBtnContainer";
import { useRegulations } from "@/hooks/regulations/useRegulations";
import { deleteRegulations } from "@/apis/regulations";

const RegulationsListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10) - 1;

  const [isShowModal, setIsShowModal] = useState(false);

  const [page, setPage] = useState(initialPage);

  const { data, refetch } = useRegulations(page);

  useEffect(() => {
    setPage(initialPage);
  }, [searchParams]);

  // 전체 삭제
  const onAllNoticeDelete = async () => {
    const response = await deleteRegulations();

    if (response.check) {
      setIsShowModal(false);
      refetch();
    }
  };

  return (
    <S.Container>
      {isShowModal && (
        <DeleteModal
          text="모든 회칙 및 세칙이 사라집니다."
          onCancel={() => setIsShowModal(false)}
          onSubmit={onAllNoticeDelete}
        />
      )}
      <ButtonContainer
        onDelete={() => setIsShowModal(true)}
        onPost={() => navigate("/document/regulations/new")}
      />
      {data.information.contents.length > 0 ? (
        <>
          <S.ListContainer>
            {data.information.contents.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  title={item.title}
                  date={item.date.split("T")[0].replaceAll("-", ".")}
                  onClick={() =>
                    navigate(`/document/regulations/${item.regulationId}`)
                  }
                />
              );
            })}
          </S.ListContainer>
          <PageComponent totalPage={data.information.totalPage} />
        </>
      ) : (
        <S.EmptyText>회칙 및 세칙이 없습니다.</S.EmptyText>
      )}
    </S.Container>
  );
};

export default RegulationsListPage;
