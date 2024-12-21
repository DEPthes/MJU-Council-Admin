import { useNotices } from "@/hooks/notice/useNotices";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "@/styles/common/ListPageStyle";
import ListItem from "@/components/common/List/ListItem";
import PageComponent from "@/components/common/PageComponent";
import DeleteModal from "@/components/common/DeleteModal";
import { deleteNotices } from "@/apis/notice";
import ButtonContainer from "@/components/common/List/ListBtnContainer";

const NoticeListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10) - 1;

  const [isShowModal, setIsShowModal] = useState(false);

  const [page, setPage] = useState(initialPage);

  const { data, refetch } = useNotices(page);

  useEffect(() => {
    setPage(initialPage);
  }, [searchParams]);

  // 전체 삭제
  const onAllDelete = async () => {
    const response = await deleteNotices();
    if (response.check) {
      setIsShowModal(false);
      refetch();
    }
  };

  return (
    <S.Container>
      {isShowModal && (
        <DeleteModal
          text="모든 공지사항이 사라집니다."
          onCancel={() => setIsShowModal(false)}
          onSubmit={onAllDelete}
        />
      )}
      <ButtonContainer
        onDelete={() => setIsShowModal(true)}
        onPost={() => navigate("/news/notice/new")}
        isDisabled={data.information.contents.length === 0}
      />
      {data.information.contents.length > 0 ? (
        <>
          <S.ListContainer>
            {data.information.contents.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  title={item.title}
                  date={item.createdAt.replaceAll("-", ".")}
                  onClick={() => navigate(`/news/notice/${item.noticeId}`)}
                />
              );
            })}
          </S.ListContainer>
          <PageComponent totalPage={data.information.totalPage} />
        </>
      ) : (
        <S.EmptyText>공지사항이 없습니다.</S.EmptyText>
      )}
    </S.Container>
  );
};

export default NoticeListPage;
