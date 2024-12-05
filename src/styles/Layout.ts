import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 230px;
  align-items: center;
  justify-content: center;
  background-color: var(--M5);
  position: relative;
`;

export const Text = styled.p`
  display: flex;
  position: absolute;
  z-index: 5;
  font: var(--PC_TitleText);
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`;
