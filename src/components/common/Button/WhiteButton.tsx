import * as S from "@/styles/common/Button/ButtonStyle";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const WhiteButton = ({ text, color, onClick, isDisabled, ...props }: Props) => {
  return (
    <S.WhiteBtn
      $color={color}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      <p>{text}</p>
    </S.WhiteBtn>
  );
};

export default WhiteButton;
