import { Add } from "@/assets/common";
import { ImageFileResponse } from "@/types/common";
import * as S from "@/styles/common/WriteStyle";

interface Props {
  images: File[] | ImageFileResponse[];
  handleFileRemove: (index: number, key: "files" | "images") => void;
  handleFileChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "files" | "images",
    filterType?: string
  ) => void;
}

const AddImageContainer = ({
  images,
  handleFileRemove,
  handleFileChange,
}: Props) => {
  const getImageSrc = (item: File | ImageFileResponse) => {
    if (item instanceof File) {
      return URL.createObjectURL(item);
    }
    return item.url;
  };

  return (
    <>
      <S.Label>이미지</S.Label>
      <S.ImageContainer>
        {images.map((item, index) => (
          <S.Image key={index}>
            <img
              src={getImageSrc(item)}
              alt={`uploaded-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <S.ImageDeleteButton
              onClick={() => handleFileRemove(index, "images")}
            >
              <S.ImageDeleteButton />
            </S.ImageDeleteButton>
          </S.Image>
        ))}
        <S.AddImageButton
          onClick={() => document.getElementById("image-input")?.click()}
        >
          <Add />
        </S.AddImageButton>
        <input
          id="image-input"
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          multiple
          onChange={(e) => handleFileChange(e, "images", "image/")}
        />
      </S.ImageContainer>
    </>
  );
};

export default AddImageContainer;
