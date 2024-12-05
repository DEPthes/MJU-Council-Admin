import BusinessButtonContainer from "@/components/ActivityReport/BusinessLlist/BusinessButtonContainer";
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
      <BusinessButtonContainer
        onDelete={() => setIsShowModal(true)}
        onPost={() => navigator("/activityReport/newBusiness")}
      />
      <BusinessListComponent />
      <PageComponent totalPage={15} />
    </S.Container>
  );
};

export default BusinessListPage;
