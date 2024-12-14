import { ImageFileResponse } from "@/types/common";
import * as S from "@/styles/common/WriteStyle";

interface Props {
  images: ImageFileResponse[];
}

const ImageView = ({ images }: Props) => {
  return (
    <>
      <S.Label>이미지</S.Label>
      <S.ImageContainer>
        {images.map((item, index) => (
          <S.Image key={index}>
            <img
              src={item.url}
              alt={`uploaded-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </S.Image>
        ))}
      </S.ImageContainer>
    </>
  );
};

export default ImageView;
