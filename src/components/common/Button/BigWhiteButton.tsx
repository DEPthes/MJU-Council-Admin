import * as S from "@/styles/common/Button/ButtonStyle";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
}

const BigWhiteButton = ({ text, onClick, ...props }: Props) => {
  return (
    <S.BigWhiteBtn onClick={onClick} {...props}>
      <p>{text}</p>
    </S.BigWhiteBtn>
  );
};

export default BigWhiteButton;
