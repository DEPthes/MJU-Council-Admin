import { deleteNotice } from "@/apis/notice";
import BackButton from "@/components/common/Button/BackButton";
import CheckModal from "@/components/common/CheckModal";
import ContentView from "@/components/common/Detail/ContentView";
import DetailHeader from "@/components/common/Detail/DetailHeader";
import FileView from "@/components/common/Detail/FileView";
import ImageView from "@/components/common/Detail/ImageView";
import { useNotice } from "@/hooks/notice/useNotice";
import * as S from "@/styles/common/WritePageStyle";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NoticeDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useNotice(Number(id));

  const [isShowModal, setIsShowModal] = useState(false);

  // 공지사항 삭제
  const handleDelete = async () => {
    const response = await deleteNotice(Number(id));

    if (response.check) {
      setIsShowModal(false);
      navigate(-1);
    }
  };

  return (
    <S.Container>
      {isShowModal && (
        <CheckModal
          text="삭제하시겠습니까?"
          onSubmit={handleDelete}
          onCancel={() => setIsShowModal(false)}
        />
      )}
      <BackButton onClick={() => navigate(-1)} />
      <DetailHeader
        title={data.information.title}
        date={data.information.createdAt.replaceAll("-", ".")}
        onDelete={() => setIsShowModal(true)}
        onEdit={() => navigate(`/news/notice/${id}/edit`)}
      />
      {data.information.images.length > 0 && (
        <ImageView images={data.information.images} />
      )}
      <ContentView content={data.information.content} />
      {data.information.files.length > 0 && (
        <FileView files={data.information.files} />
      )}
    </S.Container>
  );
};

export default NoticeDetailPage;
