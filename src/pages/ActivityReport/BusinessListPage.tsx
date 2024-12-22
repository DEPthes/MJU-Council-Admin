import BusinessListComponent from "@/components/ActivityReport/BusinessLlist/BusinessListComponent";
import DeleteModal from "@/components/common/DeleteModal";
import ListBtnContainer from "@/components/common/List/ListBtnContainer";
import PageComponent from "@/components/common/PageComponent";
import {
  useBusinessList,
  useDeleteAllBusiness,
} from "@/hooks/activityReport/useBusiness";
import * as S from "@styles/ActivityReport/BusinessList/BusinessListPageStyle";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const BusinessListPage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const navigator = useNavigate();
  const [pageParams] = useSearchParams();
  const page = pageParams.get("page") || "1";

  const { data, refetch } = useBusinessList({ page: Number(page) });
  const businessData = data.information.contents;

  useEffect(() => {
    refetch();
  }, [page]);

  const { mutate: deleteAllBusiness } = useDeleteAllBusiness();

  const handleDeletePromise = () => {
    deleteAllBusiness(undefined, {
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
        onPost={() => navigator("/activityReport/newBusiness")}
        isDisabled={businessData.length === 0}
      />
      <BusinessListComponent businessData={businessData} />
      <PageComponent totalPage={data.information.totalPage} />
    </S.Container>
  );
};

export default BusinessListPage;
