import * as S from "@/styles/common/Button/ButtonStyle";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
}

const BigBlueButton = ({ text, onClick, ...props }: Props) => {
  return (
    <S.BigBlueBtn onClick={onClick} {...props}>
      <p>{text}</p>
    </S.BigBlueBtn>
  );
};

export default BigBlueButton;
