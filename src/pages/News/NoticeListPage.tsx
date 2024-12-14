import { useNotices } from "@/hooks/notice/useNotices";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "@/styles/News/NoticePageStyle";
import ListItem from "@/components/common/List/ListItem";
import PageComponent from "@/components/common/PageComponent";
import WhiteButton from "@/components/common/Button/WhiteButton";
import BlueButton from "@/components/common/Button/BlueButton";
import DeleteModal from "@/components/common/DeleteModal";
import { deleteNotices } from "@/apis/notice";

const NoticeListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10) - 1;

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const [page, setPage] = useState(initialPage);

  const { data } = useNotices(page);

  useEffect(() => {
    setPage(initialPage);
  }, [searchParams]);

  // 전체 삭제
  const onAllNoticeDelete = () => {
    const response = deleteNotices();
    console.log(response);
  };

  return (
    <S.Container>
      {isShowModal && (
        <DeleteModal
          text="모든 공지사항이 사라집니다."
          onCancel={() => setIsShowModal(false)}
          onSubmit={onAllNoticeDelete}
        />
      )}
      <S.ButtonContainer>
        <WhiteButton
          text="전체 삭제"
          color="var(--M70)"
          onClick={() => setIsShowModal(true)}
        />
        <BlueButton
          text="글 작성"
          color="var(--Primary)"
          onClick={() => navigate("/news/notice/new")}
        />
      </S.ButtonContainer>
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
