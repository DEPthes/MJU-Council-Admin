import { ChangeEvent, useState } from "react";
import * as S from "@styles/Introduction/ImgAddBtnComponentstyle";
import Add from "@assets/image/Add.svg";
import Close from "@assets/image/Close.svg";
import RemoveModal from "../Home/Banner/RemoveModal";

interface Input{
    text: string;
    title: string;
    image: File|undefined;
    setImage: React.Dispatch<React.SetStateAction<File|undefined>>;
    isFix: boolean;
}
const ImgAddBtn:React.FC<Input> = (props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      props.setImage(file);
      if(file){
        const reader = new FileReader();
        reader.onload = () => {
        };
        reader.readAsDataURL(file);
      }
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleConfirmRemove = () => {
        props.setImage(undefined); 
        setOpenModal(false);
      };

    return(
        <>
          <S.UploadBtnDiv>
            <S.Caption>{props.title}</S.Caption>
            {!props.image?(
                <S.AddWrapper>
                    {props.isFix?
                    <S.AddInput
                    type="file"
                    accept="image/*"
                    onChange={handleUploadImage}
                    />:<></>}
                    <S.AddImg src={Add}/>
                </S.AddWrapper>
            ):(
                <S.AddWrapper>
                    <S.FullImg src={
                        props.image
                        ? props.image instanceof File
                        ? URL.createObjectURL(props.image) // File 객체 처리
                        : props.image // 기존 URL 처리
                        : "/default-image.png"}/>
                    {props.isFix? 
                    <S.DeleteButton onClick={handleOpenModal}>
                    <img src={Close}/>
                    </S.DeleteButton>:<></>}
                </S.AddWrapper>
            )}
          </S.UploadBtnDiv>

          {openModal && (
                <RemoveModal
                text={props.text}
                setIsModal={setOpenModal}
                onConfirm={handleConfirmRemove}
                />
            )}
        </>
    );
};

export default ImgAddBtn;