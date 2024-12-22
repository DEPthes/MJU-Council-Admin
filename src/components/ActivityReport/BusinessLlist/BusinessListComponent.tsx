import ListItem from "@/components/common/List/ListItem";
import { Business } from "@/types/ActivityReport/business";
import * as S from "@styles/ActivityReport/BusinessList/BusinessListComponentStyle";
import { useNavigate } from "react-router-dom";

interface BusinessListComponentProps {
  businessData: Business[];
}

const BusinessListComponent: React.FC<BusinessListComponentProps> = ({
  businessData,
}) => {
  const navigator = useNavigate();

  return (
    <>
      {businessData.length === 0 ? (
        <S.Text>사업 게시글이 없습니다.</S.Text>
      ) : (
        <S.Container>
          {businessData.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              date={item.createdAt}
              onClick={() =>
                navigator(`/activityReport/businessDetail/${item.businessId}`)
              }
            />
          ))}
        </S.Container>
      )}
    </>
  );
};

export default BusinessListComponent;
