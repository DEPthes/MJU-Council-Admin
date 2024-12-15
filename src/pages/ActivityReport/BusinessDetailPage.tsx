import BackButton from "@/components/common/Button/BackButton";
import CheckModal from "@/components/common/CheckModal";
import ContentView from "@/components/common/Detail/ContentView";
import DetailHeader from "@/components/common/Detail/DetailHeader";
import FileView from "@/components/common/Detail/FileView";
import ImageView from "@/components/common/Detail/ImageView";
import { useBusinessDetail } from "@/hooks/activityReport/useBusiness";
import * as S from "@styles/common/WritePageStyle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BusinessDetailPage = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  const navigator = useNavigate();

  const { data } = useBusinessDetail(Number(id));
  const businessDetailData = data.information;

  return (
    <S.Container>
      {isShowModal && (
        <CheckModal
          text="삭제하시겠습니까?"
          onSubmit={() => navigator(-1)}
          onCancel={() => setIsShowModal(false)}
        />
      )}
      <BackButton onClick={() => navigator("/activityReport/businessList")} />
      <DetailHeader
        title={data.information.title}
        date={`총학생회 | ${businessDetailData.createdAt}`}
        onDelete={() => setIsShowModal(true)}
        onEdit={() => navigator(`/activityRepory/businessFix/${id}`)}
      />
      <ImageView images={businessDetailData.images} />
      <ContentView content={businessDetailData.content} />
      <FileView files={businessDetailData.files} />
    </S.Container>
  );
};

export default BusinessDetailPage;
