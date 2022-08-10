import React from "react";
import styled from "styled-components";
import kakaoLogo from "../static/images/icons/kakao.png";
const { Kakao } = window;

const LoginBox = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  max-height: 495px;
  height: 495px;
  border-radius: 35px;
  padding: 100px 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginButton = styled.div`
  width: 170px;
  height: 170px;
  background-image: url(${kakaoLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  flex: 1;
  margin: 30px 0;

  cursor: pointer;
`;
const LoginText = styled.div`
  font-size: ${(props) => props.fontSize};
  font-family: NotoSansKRBold;
  letter-spacing: ${(props) => props.letterSpacing}; ;
`;

const LoginWithKakao = () => {
  Kakao.Auth.authorize({
    redirectUri: "http://localhost:3000/user/login"
  });
};
function Login() {
  return (
    <LoginBox>
      <LoginText fontSize="25px" letterSpacing="-2px">
        친구들이 기다리고 있어요!
      </LoginText>
      <LoginButton onClick={LoginWithKakao} />
      <LoginText fontSize="15px" letterSpacing="-1px">
        카카오톡으로 즉시 접속할 수 있습니다
      </LoginText>
    </LoginBox>
  );
}

export default Login;
