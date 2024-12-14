import * as S from "@/styles/common/WriteStyle";

interface Props {
  startDate: string;
  endDate: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const DateInput = ({ startDate, endDate, handleInputChange }: Props) => {
  return (
    <>
      <S.Label>기간</S.Label>
      <S.DateContainer>
        <S.DateInput
          value={startDate}
          name="startDate"
          type="date"
          onChange={handleInputChange}
        />
        <p>~</p>
        <S.DateInput
          value={endDate}
          name="endDate"
          type="date"
          onChange={handleInputChange}
        />
      </S.DateContainer>
    </>
  );
};

export default DateInput;
