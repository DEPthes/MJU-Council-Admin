import { PageDoubleIcon, PageIcon } from "@/assets/common";
import * as S from "@styles/common/PageComponenStyle";
import { useSearchParams } from "react-router-dom";

const PageComponent = ({ totalPage }: { totalPage: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const handleNextPage = () => {
    const nextPage = Math.min(Number(page) + 1, totalPage);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: nextPage.toString(),
    });
  };

  const handlePreviousPage = () => {
    const previousPage = Math.max(1, Number(page) - 1);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: previousPage.toString(),
    });
  };

  const handleNextTenPages = () => {
    const nextPage = Math.min(Number(page) + 10, totalPage);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: nextPage.toString(),
    });
  };

  const handlePreviousTenPages = () => {
    const previousPage = Math.max(1, Number(page) - 10);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      page: previousPage.toString(),
    });
  };

  return (
    <S.Container>
      {/* 이전 10페이지 이동 */}
      <S.PageButtonContainer
        $isactive={Number(page) > 1}
        onClick={handlePreviousTenPages}
      >
        <PageDoubleIcon style={{ transform: "rotate(180deg)" }} />
      </S.PageButtonContainer>

      {/* 이전 페이지 이동 */}
      <S.PageButtonContainer
        $isactive={Number(page) > 1}
        onClick={handlePreviousPage}
      >
        <PageIcon style={{ transform: "rotate(180deg)" }} />
      </S.PageButtonContainer>

      {/* 현재 페이지 / 전체 페이지 */}
      <S.PageText>
        {page} / {totalPage}
      </S.PageText>

      {/* 다음 페이지 이동 */}
      <S.PageButtonContainer
        $isactive={Number(page) < totalPage}
        onClick={handleNextPage}
      >
        <PageIcon />
      </S.PageButtonContainer>

      {/* 다음 10페이지 이동 */}
      <S.PageButtonContainer
        $isactive={Number(page) < totalPage}
        onClick={handleNextTenPages}
      >
        <PageDoubleIcon />
      </S.PageButtonContainer>
    </S.Container>
  );
};

export default PageComponent;
