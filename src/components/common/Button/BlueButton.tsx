import * as S from "@/styles/common/Button/ButtonStyle";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  onClick: () => void;
}

const BlueButton = ({ text, color, onClick, ...props }: Props) => {
  return (
    <S.BlueBtn $color={color} onClick={onClick} {...props}>
      <p>{text}</p>
    </S.BlueBtn>
  );
};

export default BlueButton;
