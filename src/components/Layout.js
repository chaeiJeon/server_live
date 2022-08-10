import React from "react";
import styled from "styled-components";
import BackgroundImg from "../static/images/backgroundImg.png";

const Background = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  width: 100%;
  max-width: 1024px;
  height: 100%;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-color: #ebe4d4;
  background-position-x: center;
`;
const Wrapper = styled.div`
  margin: 120px auto;
  padding: 0 30px;
  max-width: 880px;

  @media (max-width: 530px) {
    padding: 0 7px;
  }
`;
function Layout({ children }) {
  return (
    <Background>
      <Wrapper>{children}</Wrapper>
    </Background>
  );
}
export default Layout;
