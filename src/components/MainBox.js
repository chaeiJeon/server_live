import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  background-color: #c7d7a5;
  border-radius: 15px;
  height: auto;
  min-height: 230px;
  margin-top: 10px;
`;
function MainBox({ children }) {
  return <Background>{children}</Background>;
}
export default MainBox;
