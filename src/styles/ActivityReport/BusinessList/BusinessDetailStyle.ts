import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 10%;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 40px;
  margin-bottom: 40px;
  cursor: pointer;
  background-color: var(--M5);
  font: var(--PC_ButtonText2);
  color: var(--Primary);
  border: none;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.p`
  font: var(--PC_LoginText);
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  height: 80px;
  align-items: end;
`;

export const SubmitButton = styled.button<{ $isSubmitDisabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 100px;
  height: 40px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isSubmitDisabled ? "var(--M50)" : "var(--Primary)"};
  font: var(--PC_ButtonText2);
  color: white;
  text-align: center;
  border: none;
`;

export const Date = styled.p`
  width: 100%;
  display: flex;
  margin-top: 40px;
  padding-bottom: 40px;
  font: var(--PC_BodyText);
  color: var(--M70);
  border-bottom: 4px solid var(--Primary);
  gap: 20px;
`;

export const Label = styled.label`
  margin-top: 40px;
  font: var(--PC_ButtonText);
`;

export const TitleInput = styled.input`
  width: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  text-align: justify;
  padding: 15px 20px;
  font: var(--PC_InputText);
  color: var(--Primary);
  background-color: var(--M5);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--M30);
    font: var(--PC_InputText);
  }

  &:focus {
    border: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Image = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ImageDeleteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const AddImageButton = styled.button`
  display: flex;
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
`;

export const Content = styled.p`
  width: 100%;
  padding: 15px 20px;
  margin-top: 20px;
  box-sizing: border-box;
  text-align: justify;
  font: var(--PC_InputText);
  color: var(--Primary);
  border: none;
  background-color: var(--M5);
  overflow: hidden;
`;

export const FileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  width: 120px;
  height: 40px;
  cursor: pointer;
  background-color: var(--M70);
  font-size: var(--PC_BodyText);
  color: white;
  border: none;
  gap: 1px;
  margin-top: 20px;
`;
