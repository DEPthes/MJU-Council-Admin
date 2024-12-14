import * as S from "@styles/ActivityReport/BusinessList/BusinessListComponentStyle";
import { useNavigate } from "react-router-dom";
import ListItem from "@/components/common/List/ListItem";

const BusinessListComponent = () => {
  const businessListData = [
    {
      id: 1,
      title: "Project Alpha",
      Author: "Alice",
      date: "2024.11.12",
    },
    {
      id: 2,
      title: "Project Beta",
      Author: "Bob",
      date: "2024.11.13",
    },
    {
      id: 3,
      title: "Project Gamma",
      Author: "Charlie",
      date: "2024.11.14",
    },
    {
      id: 4,
      title: "Project Delta",
      Author: "David",
      date: "2024.11.15",
    },
  ];

  const navigator = useNavigate();

  return (
    <>
      {businessListData.length === 0 ? (
        <S.Text>공지사항이 없습니다.</S.Text>
      ) : (
        <S.Container>
          {businessListData.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              date={item.date}
              onClick={() =>
                navigator(`/activityReport/businessDetail/${item.id}`)
              }
            />
          ))}
        </S.Container>
      )}
    </>
  );
};

export default BusinessListComponent;
