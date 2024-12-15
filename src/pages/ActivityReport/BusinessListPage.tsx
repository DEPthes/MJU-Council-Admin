import BusinessListComponent from "@/components/ActivityReport/BusinessLlist/BusinessListComponent";
import DeleteModal from "@/components/common/DeleteModal";
import ListBtnContainer from "@/components/common/List/ListBtnContainer";
import PageComponent from "@/components/common/PageComponent";
import { useBusinessList } from "@/hooks/activityReport/useBusiness";
import * as S from "@styles/ActivityReport/BusinessList/BusinessListPageStyle";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const BusinessListPage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const navigator = useNavigate();
  const [pageParams] = useSearchParams();
  const page = pageParams.get("page") || "1";

  const { data } = useBusinessList({ page: Number(page) });
  const businessData = data.information.contents;

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
      <ListBtnContainer
        onDelete={() => setIsShowModal(true)}
        onPost={() => navigator("/activityReport/newBusiness")}
      />
      <BusinessListComponent businessData={businessData} />
      <PageComponent totalPage={data.information.totalPage} />
    </S.Container>
  );
};

export default BusinessListPage;
