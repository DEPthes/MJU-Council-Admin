import BusinessListComponent from "@/components/ActivityReport/BusinessLlist/BusinessListComponent";
import PageComponent from "@/components/common/PageComponent";
import * as S from "@styles/ActivityReport/BusinessList/BusinessListPageStyle";

const BusinessListPage = () => {
  return (
    <S.Container>
      <S.ButtonContainer>
        <S.AllDeleteButton>
          <S.Text>전체 삭제</S.Text>
        </S.AllDeleteButton>
        <S.NewPostButton>
          <S.Text>글 작성</S.Text>
        </S.NewPostButton>
      </S.ButtonContainer>
      <BusinessListComponent />
      <PageComponent totalPage={15} />
    </S.Container>
  );
};

export default BusinessListPage;
