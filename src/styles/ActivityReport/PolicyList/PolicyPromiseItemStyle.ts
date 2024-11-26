import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
`;

export const PromiseContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--M30);
  padding: 40px;
  box-sizing: border-box;
  width: 100%;
`;

export const Text = styled.p`
  font: var(--PC_ButtonText);
  margin: 0 20px 20px 0;
`;

export const Promise = styled.p`
  width: 100%;
  padding: 15px 20px;
  margin-top: 0;
  margin-bottom: 40px;
  box-sizing: border-box;
  text-align: justify;
  font: var(--PC_InputText);
  color: var(--Primary);
  background-color: var(--M5);
`;

export const BarContainer = styled.div`
  padding: 40px 20px;
  width: 100%;
  margin-bottom: 40px;
  box-sizing: border-box;
  border: 1px solid var(--M5);
`;

export const barBackground = styled.div`
  height: 20px;
  background-color: var(--M5);
  border-radius: 4px;
  overflow: hidden;
`;

export const bar = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: var(--Primary);
  border-radius: 4px;
`;

export const dotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const fulfillmentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const dot = styled.div<{ $selected: boolean }>`
  width: 4px;
  height: 4px;
  background-color: ${(props) =>
    props.$selected ? "var(--Primary)" : "var(--M30)"};
  border-radius: 50%;
`;

export const fulfillmentText = styled.div<{ $selected: boolean }>`
  font: ${(props) =>
    props.$selected ? "var(--NavigationTitle)" : "var(--Caption)"};
  color: ${(props) => (props.$selected ? "var(--Primary)" : "var(--M30)")};
`;
