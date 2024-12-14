import * as S from "@/styles/common/Button/ButtonStyle";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  onClick: () => void;
}

const WhiteButton = ({ text, color, onClick, ...props }: Props) => {
  return (
    <S.WhiteBtn $color={color} onClick={onClick} {...props}>
      <p>{text}</p>
    </S.WhiteBtn>
  );
};

export default WhiteButton;
