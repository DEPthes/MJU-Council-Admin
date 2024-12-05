import BusinessListComponent from "@/components/ActivityReport/BusinessLlist/BusinessListComponent";
import DeleteModal from "@/components/common/DeleteModal";
import PageComponent from "@/components/common/PageComponent";
import * as S from "@styles/ActivityReport/BusinessList/BusinessListPageStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BusinessListPage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const navigator = useNavigate();
  return (
    <S.Container>
      {isShowModal && (
        <DeleteModal
          onCancel={() => setIsShowModal(false)}
          onSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
      <S.ButtonContainer>
        <S.AllDeleteButton onClick={() => setIsShowModal(true)}>
          <S.Text>전체 삭제</S.Text>
        </S.AllDeleteButton>
        <S.NewPostButton
          onClick={() => navigator("/activityReport/newBusiness")}
        >
          <S.Text>글 작성</S.Text>
        </S.NewPostButton>
      </S.ButtonContainer>
      <BusinessListComponent />
      <PageComponent totalPage={15} />
    </S.Container>
  );
};

export default BusinessListPage;
